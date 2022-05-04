---
title: 4️⃣ LSTM
order: 5
toc: menu
---

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/banner.png';
  const truePath = trueImgSrc(path);
  return (
    <div className="post-top-icon">
      <Image
        src={truePath}
        preview={false}
        style={{
          maxHeight: '200px',
        }}
      />
    </div>
  );
};
```

# 🏔️ Long Short Term Memory

这一节，将介绍 `LSTM (Long Shorter Term Memory)`，以及用 `pytorch` 实现 `LSTM `。

## 🌱 简介

`LSTM` 是一种 `RNN` 模型，是对 `simple RNN` 的改进，`LSTM` 可以避免梯度消失的问题，可以有更长的记忆。`LSTM` 的论文在 1997 年发表。

> Hochreiter and Schmidhuber. Long short-term memory. Neural computation, 1997.

## 🔖 LSTM

`LSTM` 也是一种循环神经网络，原理跟 `simple RNN` 差不多，每当读取一个新的输入 $x$，就会更新状态 $h$。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/1.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

`LSTM` 的结构比 `simple RNN` 要复杂很多，`simple RNN` 只有一个参数矩阵， `LSTM` 有四个参数矩阵。接下来我们具体来看看 `LSTM` 的内部结构。

### 🚠 传输带

`LSTM` 最重要的设计是这个传输带 `Conveyor belt`，即为向量 $c$。过去的信息通过传输带，直接送到下一个时刻，不会发生太大的变化。`LSTM` 就是靠传输带来避免梯度消失的问题。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/2.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

`LSTM` 中有很多个 🚪 门 `gate`，可以有选择的让信息通过。

### 🚪 Forgate Gate

首先介绍 `forget gate` 遗忘门。遗忘门由 ☘️ `sigmoid` 函数，和 🍀 元素积 `element wise multiplication` 两部分组成。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/3.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

🌼 输入 `sigmoid` 的是一个向量 $a$，`sigmoid` 作用到向量 $a$ 的每一个元素上，把每一个元素都压到 `0` 和 `1` 之间。

举个例子，假如向量 $a$ 是：`[1, 3, 0, -2]`，那么，`sigmoid` 函数将分别作用在这四个元素上。然后分别输出：`[0.73, 0.95, 0.5, 0.12]` 。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/4.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

输入的向量 $a$，与输出的向量 $f$ 应该有相同的维度，这个例子里，向量 $a$ 是四维的，向量 $f$ 也会是四维的。

🌸 算出 $f$ 向量之后，计算传输带向量 $c$ 与遗忘门向量 $f$ 的元素积。元素积 `element wise multiplication` 是这样算的：

$c$ 和 $f$ 都是四维的向量，将它们的每一个元素分别相乘。所以元素积的结果也是个四维的向量。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/5.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

这个遗忘门 $f$，有选择的让传输带 $c$ 的值通过：

- 🌰 假如 $f$ 的一个元素是 $0$，那么 $c$ 对应的元素不能通过，对应的输出是 $0$；

- 🌰 假如 $f$ 的一个元素是 $1$，那么 $c$ 对应的元素就全部通过，对应的输出是 $c$ 本身。

遗忘门 $f$ 具体是这么算出来的：首先看这张结构图，$f_t$ 是上一个状态 $h_{t-1}$，与当前输入 $x$ 的函数。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/6.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

把状态 $h_{t-1}$ 与输入 $x_t$ 做拼接 `concatnation`，得到更高维度的向量。

然后计算矩阵 $W_f$ 与这个向量的乘积，得到一个向量，再用 `sigmoid` 函数，得到向量 $f_t$，$f_t$ 的每一个元素都介于 $0$ 和 $1$ 之间，遗忘门有一个参数矩阵 $W_f$，需要通过 **反向传播** 从训练数据里学习。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/7.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

### 🚪 Input Gate

刚才讲了遗忘门，现在来看一看 `input gate` 输入门。在这张结构图里，输入门 $i_t$，依赖于旧的状态向量 $h_{t-1}$，和新的输入 $X_t$。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/8.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

输入门 $i_t$ 的计算类似于遗忘门，把旧的状态 $h_{t-1}$，与新的输入 $x_t$ 做拼接 `concatnation`，得到更高维的向量。

然后计算矩阵 $w_i$ 与这个向量的乘积得到一个向量，最后使用激活函数 `sigmod`，得到向量 $i_t$（$i_t$ 的每一个元素都介于 $0$ 和 $1$ 之间）。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/9.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

输入门也有自己的参数矩阵，计作 $W_i$，$W_i$ 也需要从训练数据中学习。

### 🆕 New Value

还需要计算新的输入值 `new value` $\widetilde{c}_t$，$\widetilde{c}_t$ 是个向量，计算方法跟遗忘门和输入门都很像。也是把旧状态 $h_{t-1}$，与新输入 $x_t$ 做拼接，再乘到参数矩阵上。

区别在于激活函数不是 `sigmoid`，而是双曲正切函数 `tanh`，所以算出的向量 $\widetilde{C}_t$ 的元素都介于 `(-1, +1)`。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/10.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" />
    </>
  );
};
```

计算 `new value` $\widetilde{c}_t$，也需要一个单独的参数矩阵矩阵 $w_c$。

### 🚂 更新 传输带

我们已经算出了遗忘门 $f_t$，输入门 $i_t$，以及新的输入值 $\widetilde{c}_t$，我们还知道传送带旧的值 $c_{t-1}$，现在可以更新传送带 $c$ 了。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/04/11.png';
  const truePath = trueImgSrc(path);
  return (
    <>
      <Image src={truePath} className="ant-img" style={{ maxHeight: '680px' }} />
    </>
  );
};
```

1️⃣ 计算遗忘门 $f_t$ 和传送带旧的值 $c_{t-1}$ 的元素积。

遗忘门 $f_t$，和传送带 $c_{t-1}$ 是维度相同的向量，算出的乘积也是个向量。遗忘门 $f_t$，可以选择性的遗忘 $c_{t-1}$ 中的一些元素，如果 $f_t$ 中的一个元素是 $0$，那么 $c_{t-1}$ 相应的元素就会被遗忘。

上一步通过 🚪 遗忘门 选择性删除掉了传送带 $c_{t-1}$ 的一些元素，现在要往传送带上添加新的信息。

2️⃣ 计算输入门 $i_t$，和新的输入值 $\widetilde{c}_t$ 的元素积。

输入门 $i_t$ 和新的值 $\widetilde{c}_t$ 都是维度相同的向量，他们的乘积也是维度相同的向量，把乘积加到传送带上，这样就完成了对传送带的一轮更新。

用遗忘门删除了传送带上的一些信息，然后用遗忘门输入加入新的信息，得到了传送带新的值 $c_t$，到现在，已经更新完传送带 $c$ 。

### 🚪 Output Gate

最后一步是计算 `LSTM` 的输出，也就是状态向量 $h_t$。

$h_t$ 是这么计算的，首先计算输出门 $o_t$，输出门 $o_t$ 跟前面的遗忘门，输入门的计算基本一样。

把旧的状态 $h_{t-1}$，与新的输入 $x_t$ 做拼接，得到更高维的向量，然后算矩阵 $w_o$ 与这个向量的乘积，得到一个向量，最后使用激活函数 `sigmod` 得到向量 $o_t$。$o_t$ 的每一个元素都介于 `(0, 1)`，输出门也有自己的参数向量 $w_o$，$w_o$ 也需要从训练数据中学习。

现在计算状态向量 $h_t$，对传送带 $C_t$ 的每一个元素求双曲正切`tanh`，把元素全都压到 `(-1, +1)` 区间。

然后，求这两个向量的元素积，这个红色向量是刚刚求出的输出门 $o_t$，这样就得到了状态向量 $h_t$。

看一下结构图，$h_t$ 他有两份 `copys`，$h_t$ 的一份 `copy` 传输到了下一步，另一份 `copy` 成了 `LSTM` 的输出。

到 $d_t$ 为止，一共有 `7` 个向量 $x$ 输入了 `LSTM`，我们可以认为所有这些 $x$ 向量的信息，都积累在了状态 $h_t$ 里面。

## 🧮 LSTM 的参数数量

我们来算一下 `LSTM` 的参数数量，`LSTM` 有 ❶ 遗忘门；❷ 输入门；❸ 新的输入；❹ 输出门。

这四个模块都有各自的参数矩阵 $w$，所以一共有 `4` 个参数矩阵，矩阵的行数是：$shape(h)$，列数是： $shape(h)+shape(x)$

所以，`LSTM` 参数的数量是：

$4 * shape(h) * [ shape(h) + shape(x)]$

## 🛠 实现 LSTM

**Doing**

## 🎐 总结

总结一下这一节的内容，这节介绍了 `LSTM` 模型和用 `PyTorch` 的实现。

`LSTM` 和 `simple RNN` 主要的区别，是用了一条传送带，让过去的信息可以很容易传输到下一时刻，这样就有了更长的记忆。

`LSTM` 的表现总是比 `simple RNN` 要好，所以当我们想使用 `RNN` 的时候就用 🙋‍♂️ `LSTM` 模型，而不要用 🙅‍♂️ `simple RNN` 模型。

`LSTM` 有四个组件，分别是：

- 🚪 `Forget Gate` 遗忘门
- 🚪 `Input Gate` 输入门
- 🆕 `New Value` 新的输入
- 🚪 `Output Gate` 输出门

这四个组件各自有一个参数矩阵，所以一共有四个参数矩阵，`LSTM` 参数的数量是：

$4 * shape(h) * [ shape(h) + shape(x)]$

下一节将介绍：

- `stacked RNN`
- `bi-directional RNN`
- 预训练

## 参考

- https://colah.github.io/posts/2015-08-Understanding-LSTMs/
