---
title: 5️⃣ 更高效的 RNN
order: 6
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
  const path = '/img/banner_small.png';
  const truePath = trueImgSrc(path);
  return (
    <div className="post-top-icon">
      <Image
        src={truePath}
        preview={false}
      />
    </div>
  );
};
```

# 🚀 更高效的 RNN

本节我们将继续学习 `RNN` 循环神经网络，本节将介绍三个技巧，来提升 `RNN` 的效果：

- 多层 RNN `Stacked RNN`

- 双向 RNN `Bi-directional RNN`

- 预训练 `Pre-train`


## 📚 多层 RNN


我们可以把很多全连接层堆叠起来，构成一个 多层感知机 `Multilayer Perception`。我可以把很多卷机层堆叠起来，构成一个深度卷机网络。

同样的道理，我没也可以把很多 `RNN` 层堆叠起来，构成一个多层 `RNN` 网络。比如这里，堆叠了 `3` 层 `RNN` 网络。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => <div><Image src={trueImgSrc('/img/nlp/05/1.png')} preview={false}/></div>;
```

神经网络每一步都会更新状态 $h$，新算出来的 $h$ 有两份 `copys`，一份送到下一个时刻，另一份作为输出。下面一层输出的状态 $h$，成为了上一层的输入。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => <div><Image src={trueImgSrc('/img/nlp/05/2.png')} preview={false}/></div>;
```

最底层的 `RNN` 的输入是词项量 $x$，这层（最底层）的 `RNN` 会输出每一步的状态向量，
这些输出的状态向量 $h$，又成了第二层 `RNN` 的输入。

第二层的 `RNN` 有自己的模型参数，同样会更新和输出自己的状态向量 $h$，


第二层输出的状态向量的 $h$，又成为第三层 `RNN` 的输入。


我们一共用了三层 `RNN`，最上层 `RNN` 的状态是这个网络最终的输出，我们可以拿最后一个状态 $h_t$，看作多是从最底层的输入 `i love the movie so much` 中提取的特征向量。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => <div><Image src={trueImgSrc('/img/nlp/05/3.png')} preview={false}/></div>;
```

### 多层 RNN 的实现（Doing）

接下来我们使用 `PyTorch` 实现多层 `LSTM`，这里使用用了三个 `LSTM` 层：


第一层的输出会成为第二层的输入，所以第一层的 return sequences 要设置为 true，输出所有的状态相量 $h$。

同样的道理，第二层的 return sequences 也要设置为 true，要输出所有的状态向量 $h$，这些状态向量会成为第三层 `LSTM` 的输入，


第三层 `LSTM` 是最后一层 `LSTM`，可以设置 return sequences 为 False，只需要输出最后一个状态向量就行，前面所有的状态向量都可以扔掉。


最后一层是全连接层，拿第三层 `LSTM` 的状态向量作为输入，这一层输出分类结果。


这是神经网络的概要，Embeding 层的输出是一个500乘以32的矩阵，500的意思是每段 movie review 都有500个单词，


每个词用32维的向量表示，这个500乘以32的矩阵，成为了第一层 `LSTM` 的输入，


第一层 `LSTM` 的输出，是一个500乘以32的矩阵，这里的32是状态相量 $h$ 的维度。


由于我设置 return sequences 等于 true，第一层 `LSTM` 输出了所有500个状态向量  $h$，这个500乘以32的矩阵，又成为第二层 `LSTM` 的输入。


第二层 `LSTM` 输出了一个500乘以32的矩阵，他又成为第三层 `LSTM` 的输入。


我设置第三层 `LSTM` 的 return sequences 等于 false，所以第三层 `LSTM` 的输出是一个32维的向量，它是第三层 `LSTM` 的最后一个状态，它相当于从输入的500个词里提取的特征项量。


这四个数字都是32，其实这只是巧合而已，你完全可以让这四个数字分别取不同的值。


我做实验对比了 stacked `LSTM` 和单层的 `LSTM`，在 movie review 数据上，的结果基本一样。


我觉得问题是出在了 `Embedding` 层，`Embedding` 层的参数太多了，没有足够多的数据把这一层训练好，所以总出现 overfilling，这个问题没有解决，加更多的 `LSTM` 层也无济于事。


## 🎏 双向 RNN

之前我们实现的 `RNN` 和人的阅读习惯一样，从左往右挨个阅读单词。人阅读的过程中，在脑子里积累提取出的信息；`RNN` 阅读的过程中在状态向量 $h$ 里面积累信息。读完一段电影评论，就知道这是正面评论还是负面评论。

我们人类总是从左往右，从前往后阅读，但这只是我们的阅读习惯而已，如果我们从后往前阅读，虽然有点困难，也同样可以判断出电影评论是正面，还是负面。

对 `RNN` 来说，从前往后或者是从后往前阅读，并没有太大的区别，我们训练一个从后往前阅读的`RNN`，也同样会有很好的效果。


所以很自然的想法就是训练两条`RNN`，一条从左往右，另一条从右往左。这两条`RNN`是完全独立的，不共享参数，也不共享状态。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => <div><Image src={trueImgSrc('/img/nlp/05/4.png')} preview={false}/></div>;
```


两条 `RNN` 各自输出自己的状态向量，然后把他们的状态向量做拼接 `concatnation`，记作向量 $y$。

- 如果有多层 `RNN`，就把输出的这些向量 $y$，作为上面一层 `RNN` 的输入。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => <div><Image src={trueImgSrc('/img/nlp/05/5.png')} preview={false}/></div>;
```

- 如果只有这一条 `RNN`，就把这些 $y$ 向量都丢掉就行了，只保留两条链，最后的状态向量，分别是这个 $h_t$ 与这个 ${h_t}'$，

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => <div><Image src={trueImgSrc('/img/nlp/05/6.png')} preview={false}/></div>;
```

把这两个状态向量的拼接作为从输入文字中抽取的特征向量，根据他来判断电影评论是正面还是负面，

双向 `RNN` 总是比单向的效果好，原因可能是这样的：

不管是用 simple `RNN` 还是用 `LSTM`，这些 `RNN` 模型都会或多或少遗忘掉早先的输入：

- 如果你让 `RNN` 从左往右阅读，那么最后一个状态 $h_t$，可能会遗忘靠左边的输入。

- 如果你让 `RNN` 从右往左阅读，最后一个状态 ${h_t}'$ 肯定能记住靠左边的输入。


把 $h_t$ 和 ${h_t}'$ 结合起来，这样 `RNN` 就不会遗忘两个方向最开始看到的词了。


### 双向 `LSTM` 的实现（Doing）


这是双向 `LSTM` 的编程实现，这里我只用了一个双向 `LSTM` 的层.


想要实现双向 `LSTM`，需要导入这个 by directional 层，然后在标准的 `LSTM` 层外面包一个 bidirectional 层，这样 `LSTM` 就变成双向的了，这就是实现双向 `LSTM`，唯一需要改变的地方。


我设置 return sequences 为 false，双向 `LSTM` 只会保留两条链最后的状态，输出两个状态向量的 concat nation，其余状态向量全都被扔掉了。


这是神经网络结构的概要，我设置状态项量 $h$ 的维度是32，而且 return sequences 为 false所以这一层的输出，是两条链最后的状态向量，两个都是32维，叠加起来就是64维。


你可以算一下这一层参数的数量，参数数量比用单项 `LSTM` 要多一倍，这是因为两条链各自有各自的模型参数。


我做实验对比了双向 `LSTM` 和单项 `LSTM`，在 movie review 数据上的结果基本一样，没有显著改进。


我觉得问题还是出在了 `Embedding` 层，`Embedding` 层的参数太多了造成 overfitting，在这种情况下改进 `LSTM` 层并没有帮助。


你自己做实验的时候，应该把多层 `LSTM` 和双向 `LSTM` 都试试，只要训练数据够多，应该会有提升。


## 🔩 预训练


另一个提高 `RNN` 准确率的方法是预训练，预训练在深度学习中十分常用。

比如在训练卷积神经网络的时候，如果网络太大而训练极不够大，那么可以先在 `ImageNet` 等大数据上做预训练，可以让神经网络又比较好的初始化，也可以避免过拟合。

训练 `RNN` 的时候也是这个道理，比如这个神经网络中的 `Embedding` 层，有 $32$ 万个参数，而我们只有 $20,000$ 个训练样本。

这个 `Embedding` 层太大了，就会导致模型过拟合，解决办法就是对 `Embedding` 层做预训练。


预训练具体是这么做的：

首先要找一个更大的数据集，可以是情感分析的数据，也可以是其他类型的数据，但是任务最好是接近原来情感分析的任务，最好是学出来的词项量，带有正面或者负面的情感。

两个任务越相似，预训练之后的 `Transfer` 就会越好。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => <div><Image src={trueImgSrc('/img/nlp/05/7.png')} preview={false}/></div>;
```


有了大数据集之后，要搭一个神经网络，这个神经网络的结构是什么样的都可以，都可以甚至不用是 `RNN` 模型，只要这个神经网络有 `Embedding` 层就行，


然后就是在大数据集上，训练这个神经网络，训练好之后，把上面的层全都丢掉，只保留 `Embedding` 层和训练好的模型参数。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => <div><Image src={trueImgSrc('/img/nlp/05/8.png')} preview={false}/></div>;
```

然后再搭我们自己的 `RNN` 网络。这个新的 `RNN` 网络，跟之前预训练的可以有不同的结构。


这个网络中的新的 `RNN` 层和全连接层，参数都是随机初始化的，而下面的 `Embedding` 层的参数是预训练出来的，将 `Embedding` 层的参数固定住，不训练这个 `Embedding` 层，只训练其他的层，

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => <div><Image src={trueImgSrc('/img/nlp/05/9.png')} preview={false}/></div>;
```

### 预训练的词向量（Doing）

Glove


## 🎐 总结

最后总结最近这节的内容，这节课我们学习了 `RNN` 循环神经网络。`simple RNN` 和 `LSTM` 都属于 `RNN`。


上上节介绍了 `simple RNN`，`simple RNN` 很容易遗忘，所以实际效果不好。


`LSTM` 的记忆比 `simple RNN` 要长很多，所以我们在实践中就不要用 `simple RNN` 了，可以使用用 `RNN` 的地方都可以也都应该使用 `LSTM`。


还有一些 `LSTM` 替代品，比如 `Gated Recurrent Units: GRU`，但貌似 `GRU` 性能与 `LSTM` 差不多，所以可以根据需求选择这两个。


有一些办法可以让 `RNN` 的效果更好，这些办法对所有的 `RNN` 都适用。

- ⭐️ 使用双向循环神经网络，尤其是双向 `LSTM`。

能用双向 `LSTM` 的话就不要用单向的，双向 `LSTM` 不会比单向的差。

- ⭐️ 将 `RNN` 像全连接层和卷积层那样累加起来，搭成一个深度神经网络。

把 `RNN` 层累加起来叫做多层 `RNN`，多层 `RNN` 的容量比单层 `RNN` 更大，如果训练数据足够多，多层 `RNN` 的效果会比单层的要好。

- ⭐️ 使用预训练。

想把 `RNN` 用在文本问题上，要有一个 `Embedding` 层来把词变成向量。
`Embedding` 层有一个参数矩阵，大小是： $len(vocabulary)*shape(word vector)$.

这个参数矩阵通常会很大，如果训练数据集比较小，那么 `Embedding` 层就不会训练的很好，会出现过拟合，解决办法是在大数据集上，预训练 `Embedding layer`。



## ⛓ 参考

- 🔗 https://github.com/wangshusen/DeepLearning/blob/master/Slides/9_RNN_4.pdf
- 🔗 https://www.youtube.com/watch?v=pzWHk_M23a0
- 🔗 https://www.bilibili.com/video/BV1Ab4y1f73K