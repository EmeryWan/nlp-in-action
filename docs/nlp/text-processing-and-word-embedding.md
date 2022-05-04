---
title: 2️⃣ 文本处理与词嵌入
order: 3
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

# 🏔️ 文本处理与词嵌入

本节主要内容为 **文本处理** `Text Processing` 和 **词嵌入** `Word Embedding`。本节和下面两节内容都会使用 IMDb 电影评论的数据，用来搭建机器学习模型分析电影评论。

## 🌱 IMDb

[IMDb](https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E7%94%B5%E5%BD%B1%E8%B5%84%E6%96%99%E5%BA%93) 是最有名的电影评论网站，用户可以在 IMDb 上给电影打分，1 分是非常讨厌，10 分是非常喜欢，如果乐意，还可以写一段电影评论。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/imdb.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

如果不给你看分数，只给你看评论，你大概能猜到用户打的分数，但你的猜测可能不太准确。如果换种方式，让你判断电影评论是 **正面** `positive` 的还是 **负面** `negative` 的，你应该会有很高的准确率。有人从 IMDb 上爬了 5 万条电影评论，这些评论都是很极端的，都是强烈的喜欢，或者强烈反感。这个二分类问题对于人来说很简单，人读一下电影评论就能轻易知道这是正面评价还是负面评价，人应该能有 100% 的准确率，这个数据集被分成两半，2 万 5 千条作为训练数据 `Train`，另外 2 万 5 千条作为测试数据 `Test`。

<Tree>
  <ul>
    <li>
      README
    </li>
    <li>
      imdb.vocab
    </li>
    <li>
      imdbEr.txt
    </li>
    <li>
      test
      <small>测试集</small>
      <ul>
        <li>
          labeledBow.feat
        </li>
        <li>
          neg
        </li>
        <li>
          pos
        </li>
        <li>
          urls_neg.txt
        </li>
        <li>
          urls_pos.txt
        </li>
      </ul>
    </li>
    <li>
      train
      <small>训练集</small>
      <ul>
        <li>
          labeledBow.feat
        </li>
        <li>
          neg
        </li>
        <li>
          pos
        </li>
        <li>
          unsup
        </li>
        <li>
          unsupBow.feat
        </li>
        <li>
          urls_neg.txt
        </li>
        <li>
          urls_pos.txt
        </li>
        <li>
          urls_unsup.txt
        </li>
      </ul>
    </li>
  </ul>
</Tree>

你可以在下面的链接中获取到数据集：[https://ai.stanford.edu/~amaas/data/sentiment/](https://ai.stanford.edu/~amaas/data/sentiment/)

## 🔖 文本处理文本处理

在词嵌入 `Word Embedding` 和搭建机器学习模型之前，首先要进行文本处理，将文本变成序列 `Sequence`，文本处理很无聊，但我们应该重视它，文本处理的好坏，会直接影响机器学习模型的准确率。

### 🚀 Tokenization

文本处理的第一步是 `Tokenization`，把文本分割成很多 `tokens`，这里我们把文本分割成很多单词，一个 `token` 就是一个单词（假如你把文本分割成字符，那么一个 `token` 就是一个字符），做完 `Tokenization`，一个很长的字符串就被分割成一个很多单词的列表。<br />

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/1.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

`Tokenization` 看起来很简单，但是讲究很多。比如：

- 🌰 是否应该把大写变成小写？

通常情况下应该把大写变成小写，大小写单词通常是一个意思；但有时候会混淆单词（Apple -> apple），比如 Apple 是苹果公司，apple 是水果，大小写的 apple 并不是相同的单词。

- 🌰 去除停用词。`stop word`

有些应用会去除 stop word，它是 the、a、of 等最高频的单词，这些词几乎出现在所有的句子里，对这个二分类问题几乎是没有帮助。

- 🌰 拼写纠错。

用户发电影评论的时候，大部分情况下并不会仔细检查，所以写的东西难免会有拼写错误，所以做拼写纠错通常是有用的。

这里只是举了几个例子，实际上做 `Tokenization` 的时候需要做大量的工作，`Tokenization` 看似简单，但实际上并不容易。

### 🧰 Build Dictionary

第二步是建立一个字典。可以先统计词频，去掉一些低频词，让后让每个单词对应一个正整数，比如让 `the -> 1; cat -> 2; sat -> 3`。有了这个字典，就可以把每个单词对应到一个整数，这样一来，一句话就可以用正整数的列表表示，这个列表被称为序列 `Sequences`。<br />

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/2.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

如果有必要的话，还得进一步做 `one-hot encoding`，把单词表示成 `one-hot` 向量。

在电影评论的例子里，数据是 5 万条电影评论，每条电影评论可以表示成一个字符串。做完 `Tokenization` 和 `Encoding` 后，每条电影评论都会转换成一个 `Sequences`，也就是一个正整数的列表。<br />

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/3.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

电影评论有长有短，有人只能写几个字的评论，有人能洋洋洒洒写几千字，所以得到的这些 `Sequences` 的长度也各不相同。比如这两条 `Sequences` 的长度分别是 52 和 90。<br />

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/4.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

这就造成了一个问题，训练数据没有对齐，每条 `Sequences` 都有不同的长度。做机器学习的时候，我们需要把数据存储到矩阵或者张量里，每条序列都得有相同的长度，需要把序列对齐。<br />

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/5.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

解决方案是这样的：我们可以固定长度为 $w$。假如一个序列长度太长，超过了 $w$ 个词，就砍掉前面的词，只保留最后面 $w$个词（当然保留最前面 $w$ 个词也同样可以）；假如一个序列太短，不到 $w$ 个词，那么就做 `zero padding` 用 0 来补齐，把长度增加到 $w$。<br />

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/6.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

这样一来，所有序列的长度都是 $w$，可以存储到一个矩阵里。

## 🍀️ 词嵌入

文本处理已经完成了，现在每个词都用一个正整数来表示，下一步是 `Word Embedding`，把每个词都表示为一个一维向量。

现在每个单词都用一个数字来表示，该怎么把这些 `Categorical` 特征表示为数值向量呢？<br />

显然可以做 `one-hot encoding`，用一个 `one-hot` 向量来表示一个单词。<br /> 比如 `good: index = 2`，于是使用标准正交积 $e_2$ 来表示，它的第二个元素是 1，其余元素都是 0，$e_2=[0, 1, 0, 0, ..., 0]$

假如 `vocabulary = v`，也就是说字典里一共有 $v$ 个单词，那么就需要维度 `dimension = v` 的 `one-hot` 向量，要是字典里有 1 万个单词，那么这些 `one-hot` 向量都是 1 万维的，这样的向量维度是在太高了。下一节介绍 RNN 的时候你会看到，RNN 的参数数量正比于输入向量的维度，我们肯定不想让输入的向量是 1 万维的，否则一层 RNN 将会有好几十万个参数。所以我们要做 `Word Embedding`，把这些高维 `one-hot` 向量映射到低维向量。

具体做法是吧 `one-hot` 向量 $e_i$ 乘到参数矩阵 $P^T$ 上，矩阵 $P^T$ 的大小是 $d*v$。其中 $d$ 是词向量的维度，由用户自己决定；$v$ 是 `vocabulary`，表示字典里单词的数量。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/7.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

矩阵的乘法的结果记做向量 $x_i$，$x_i$ 就是一个词向量，维度是 $d*1$，如果 `one-hot` 向量 $e$ 的第三个元素是 1，那么 $x_i$ 就是 $P^T$ 矩阵的第三列，可以看出，$P^T$ 矩阵每一列都是一个词向量。

同理，下面这个参数矩阵 $P$ 的每一行都是一个词向量。这个矩阵的行数是 $v$，也就是 `vocabulary`；每一行对应一个单词，矩阵的列数是 $d$，$d$ 是用户决定的，$d$ 的大小会影响机器学习模型的表现，应该用 交叉验证 `Cross Validation` 用来选择一个比较好的 $d$。

字典里的第一个词的是 `movie`，那么第一行就是 `movie` 的词向量；字典里的第二个词是 `good`，那么第二行就是 `good` 的词向量。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/8.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

我们的任务是判断电影评论是正面的还是负面的，这个参数矩阵是从训练数据中学习出来的，所以这些词向量都带有感情色彩，假如这些词向量都是二维的，我们就可以在平面坐标系中标出这些词向量。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/02/9.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

`fantastic; good; fun` 这些词向量都带有正面情感，所以这三个词的词向量学出来都比较接近；同理，`poor; boring; mediocre` 这些词带有负面情感，所以学出来的词同样也应该比较接近，但是这些词的词向量应该远离正面色彩的词向量。像 `movie; is` 这样的中性词，没有感情色彩，它们应该在中间。

## 🎐 总结

最后总结一下这一章的内容。

这一节上半部分，说明了文本处理是什么样的。给我们一条电影评论，首先做 `Tokenization`，把电影评论分割成很多单词，然后把很多单词编码成数字，这样一整条电影评论就可以很多正整数来表示，我们把这个正整数序列叫做 `Sequences`，就是神经网络中 `Embedding` 层的输入。由于电影评论的长短不一，得到的 `Sequence` 的长短也不一样，没办法存储在一个矩阵里，解决方案是 `Alignment` 对齐。假设最大长度为 `20`，如果长度大于`20`，就只保留最后 `20` 个单词；如果长度不到 `20`，就用 `0` 补齐，把长度增加到 `20`。这样一来，每个 `Sequences` 长度都相同。
