---
title: 3️⃣ RNN
order: 4
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

# 🏔️ RNN

这一节我们来学习**循环神经网络**`Recurrent Neural Networks`。本节的内容是 `Simple RNN`，以及用 `Pytorch` 编程实现 `Simple RNN`。

## 🌱 简介

现在 `RNN` 没有以前流行，尤其是在自然语言处理上，`RNN` 已经有一些过时了，如果训练的数据足够多，`RNN` 的效果不如 `Transformer` 模型，但是在小规模的问题上，`RNN` 还是很有用的。

## 🔖 如何建模时序数据？

机器学习中经常用到文本、语音等 **时序数据**`sequential data`（按时间顺序记录的数据列，有长度不固定的特点）。

首先思考一个问题，怎么对这样的时序数据进行建模？在上一小节中，我们将一段文字整体输入到一个逻辑回归 `Logistic Regression` 模型中，让模型来做二分类，这属于一个 `one-to-one` 模型，一个输入对应一个输出。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/1.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" style={{ maxHeight: '350px' }} />;
};
```

全连接神经网络和卷积神经网络都属于 `one-to-one` 模型。

人脑并不会使用 `one-to-one` 模型处理时序数据，不会把一整段文字全部输入到大脑，我们在阅读的时候，会从左到右阅读一段文字，不断地在大脑里积累信息，阅读一段话之后，你脑子里就积累了一段文字的大意。

`one-to-one` 模型要求一个输入对应一个输出，比如：输入一张图片，输出每一类的概率值，`one-to-one` 的模型比较适合这类图片问题，但是不太适合文本问题。

对于文本问题，输入和输出的长度并不固定，一段话可长可短，所以输入的长度并不固定；输出的长度也不固定，比如将英语翻译成汉语，一句英语有十个单词，翻译成汉语可能有十个字，可能有八个字，也可能是四个字的成语，输出汉语的字数并不固定，由于输入和输出的长度不固定，`one-to-one` 模型就不太适合了。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/translation.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

对于时序数据，更好的是 `many-to-one` 或者是 `many-to-many` 模型，`RNN` 就是这样的模型，输入和输出的长度都不固定。所以 `RNN` 很适合语音，文本等时序序列数据。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/2.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

## 🍀️ RNN

`RNN` 和跟人的阅读习惯很类似：人每次看一个词，会逐渐在大脑里积累信息；`RNN` 每看一个词，会用状态向量 $h$ 来积累阅读过的信息。

首先，我们将输入的每个词用 词嵌入`word embedding` 变成一个词向量 $x$。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/3.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

每次把一个词向量输入 `RNN`，就会更新状态 $h$ ，把新的输入积累到状态 $h$ 里面。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/4.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

在 $h_0$中，包含了第一个词 `the` 的信息，在 $h_1$ 里面，包含了前两个 `the cat` 的信息；以此类推，状态 $h_2$ 包含 了前三个词 `the cat sat` 的信息，最后一个状态 $h_t$ 包含了整句话的信息，可以把 $h_t$ 看做 `RNN` 从整句话 `the cat sat on the mat` 抽取的特征向量，在更新状态 $h$ 的时候，需要用到参数矩阵 $A$。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/5.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

**注意：整个 RNN 只有一个参数矩阵** $A$。无论这条链有多长，参数 $A$ 只有一个，$A$ 随机初始化，然后利用训练数据来学习 $A$。下面首先讲解 `Simple RNN Model`。

## 🚀 Simple RNN

我们具体看看，`Simple RNN` 简单循环神经网络是怎么把输入的词向量 $x$，结合到状态 $h$ 中的。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/6.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

我们将上一个状态记做 $h_t-1$，新输入词向量记做 $x_t$，将这两个向量做拼接 `concatenation`，得到一个更高维的向量。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/8.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

图中这个矩阵 $A$ 是 `RNN` 的模型参数，这里计算矩阵 $A$ 和这个向量的乘积（拼接后的向量），矩阵和向量的乘积是一个向量，然后使用激活函数 `tanh` 作用在向量的每一个元素上，最后把激活函数的输出记做新的状态 $h_t$。

这个激活函数式 双曲正切函数 `hyperbolic tangent function`，输入是任意实数，输出在 $(-1, +1)$ 之间。由于用了双曲正切激活函数，向量 $h_t$ 的每一个元素都在 $(-1, +1)$ 之间。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/7.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

这个神经网络的结构图可以这样理解：新的状态 $h_t$，是旧状态 $h_{t-1}$ 和新的输入 $x_t$ 的函数，神经网络模型的参数是 $A$：新的状态 $h_t$，依赖于向量 $h_{t-1}$, 向量 $x_t$ 以及矩阵 $A$。

### 🎨 为什么需要使用 `tanh` 作为激活函数？

我们思考这样一个问题：为什么需要使用 `tanh` 作为激活函数？能否将这个激活函数去掉，去掉之后会发生什么呢？

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/9.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

首先我们做个简化，假设输入的词向量的元素都是 $0$。如图，这等同于输入的词向量 $x_t$ 都去掉，把矩阵 $A$ 右边一半也去掉。

$x_0 = x_1 = ... = x_{100} = 0$

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/10.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

这么一来，第 `100` 维的特征向量 $h_{100} = Ah_{99} = A^2h_{98} = ... = A^{100}h_0$。

- 🌰 假设矩阵 $A$ 最大的特征值略小于 `1`

比如，最大的特征值等于 `0.9`。那么会发生什么呢？

$0.9^{100}$ 非常接近于 `0` 了，所以矩阵 $A^{100}$ 非常接近于 `0`，那么新的特征向量 $h_{100}$ 也几乎也是一个全零的向量。

- 🌰 假设矩阵 $A$ 最大的特征值略大于 `1`

比如，最大的特征值等于 `1.2`。

$1.2^{100}=82817974.522$，所以矩阵 $A^{100}$ 的元素都超级大，$A^{100}$的每个元素都很大，假如循环的次数更多一些，或者 $A$ 的特征值再大一些，状态向量的值就会爆炸。

假如没有这个激活函数 `tanh`，数值计算的时候很有可能会出问题，要么计算出的结果全部等于 `0`，要么爆炸了全部是 `NaN: Not a Number`。通过使用这个激活函数，每次更新状态 $h$ 后，都会做一个标准化操作 `normalization`，让 $h$ 恢复到 $(-1, +1)$ 这个合适的区间里。

### 🏝️ Simple RNN 模型参数数量

我们来数一下 `Simple RNN` 有多少个模型参数。

如图，先看一下这个拼接后向量，这个向量的维度是 $h_{t-1}$ 的维度加上 $x_t$ 的维度：

所以 $A$ 一定要有 $shape(h)+shape(x)$ 维度这么多列：

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/11.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

$A$ 的行数等于 $h$ 的维度：

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/12.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

所以，最终矩阵 $A$ 的大小等于：

$parameter(A) = shape(h) * [shape(h) + shape(x)]$

这个乘积 $parameter(A)$ 就是 `simple RNN` 的最终的参数数量。

## 📖 (TODO) Simple RNN 的电影评论分析

**Doing**

## 🧰 simple RNN 的缺陷

下面看一下 `simple RNN` 这种简单的模型有什么缺陷。

举个栗子 🌰 ，现在有这样一个问题，给定半句话，要求预测下一个单词。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/16.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

输入是 `clouds are in the`，正确的输出应该是 `sky`，如果在大量文本中预测 RNN，应该是有能力做出这样的预测的。在这个例子里，`RNN` 只需要看最近的几个词，尤其是 `clouds are`，并不需要更多的上下文看的更远。

这个例子是对 `simple RNN` 十分有利，`simple RNN` 特别擅长这种 `short-term dependence`，`simple RNN` 不擅长的是 `long-term dependence`。

`RNN` 的状态 $h$，和之前所有的输入 $x$ 都有函数依赖关系，照理来说，如果改变输入的单词 $x_1$，所有的状态 $h$ 都会发生变化，但实际上，`simple RNN` 并没有这种性质，所以很不合理。如果把第 `100` 个状态向量 $h_{100}$，关于输入 $x_1$ 求导，你会发现导数几乎等于 `0`。

$\frac{\partial h_{100}}{\partial x_1} \approx 0$

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/17.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

导数几乎等于 `0` 说明什么呢？说明当我们改变 $x_1$时，$h_{100}$ 几乎不会发生任何变化，也就是说状态 $h_{100}$ 和 `100` 步之前的输入 $x_1$ 几乎没有关系，这显然不合理，说明状态 $h_{100}$ 几乎把很多步之前的输入都给忘记了，`simple RNN` 的这种遗忘会给后续操作造成很多问题。

再举个栗子 🌰 ，这是很长的一段话，一开始是 `I grow up in China when I was a child, ... ...` 到了很多句话之后，有这样一句，`I speak fluent ...`。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/18.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

下一个词应该是 `Chinese`，我小时候在中国，所有会说流利的中文，然而 `simple RNN` 不太可能会做出 `Chinese` 这个正确的预测，因为 RNN 已经把前文给忘记了。`simple RNN` 擅长的是 `short-term dependence`，RNN 看到最近的单词是 `speak fluent`，所以 RNN 知道下一个单词可能是某种语言，可能是 `Chinese、English、French、Japanese` 等等，但正确答案是 `Chinese`，因为上文有 `I grow up in china when i was child`，simple RNN 就像金鱼一样记忆力只有 `7` 秒，`RNN` 根本就不记得上文有这句话，所以 `I speak fluent ...` 预测单词可能是 `English , French` 等任何一种语言，未必是 `Chinese`。

## 🎐 总结

最后总结一下这一节的内容：

`RNN` 是一种神经网络，但是他的结构不同于全连接网络和卷积网络，`RNN` 适用于文本，语音等时序序列数据，`RNN` 按照顺序读取每一个词向量，并且在状态向量 $h$ 中积累看到过得信息，$h_0$ 中包含了 $x_0$ 的信息，$h_1$ 中包含了 $x_0$ 和 $x_1$ 的信息，$h_t$ 中积累了之前所有 $x=\{x_0, x_1, ..., x_t\}$ 的信息。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/03/19.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

有一种错误的看法是 $h_t$ 中只包含了 $x_t$ 的信息，这是不对的，$h_t$ 中包含了之前所有输入的信息，可以认为 $h_t$ 代表了 `RNN` 从整个序列中抽取的特征向量，所有我们只需要 $h_t$ 就可以判断电影评价是正面的还是负面的。

`simple RNN` 有一个参数矩阵 $A$，它可能还会一个 `intercept` 参数向量 $b$，上面的介绍中忽略了这个参数向量 $b$，这个参数矩阵 $A$ 的维度是：

$shape(h) * [shape(h) + shape(x)]$

参数矩阵 $A$ 一开始随机初始化，然后从训练数据上学习。注意：`simple RNN` 只有一个参数矩阵，不管这个序列有多长，参数矩阵只有一个，所有模块里的参数都是一样的。

`RNN` 有一个缺点，`RNN` 的记忆比较短，会遗忘很久之前的输入 $x$，如果这个时间序列很长，有好几十步，最终 `RNN` 就会忘记了之前的输入。下一节将介绍 `LSTM`，`LSTM` 的记忆会比 `simple RNN` 长很多，但是 `RNN` 也还是会有遗忘的问题。
