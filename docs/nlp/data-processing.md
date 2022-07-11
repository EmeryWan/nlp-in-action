---
title: 1️⃣ 数据处理基础
order: 2
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

# 🏔️ 数据处理基础

## 🌱 类别特征

机器学习的数据通常有 **类别特征** `Categorical Features` ，我们需要把类别特征 `Categorical Features` 转化成机器学习模型能理解的数值特征，下面使用一个例子来具体讲解类别特征数据的处理。

这张表的每一行是一个人的数据，包括：年龄、性别、国籍，我们需要把这些数据变成机器学习模型可以理解的数值特征。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/01/table.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

表格的第一列是年龄，年龄本身就是数值特征，所以可以不用做处理，数值特征的特点是可以比较大小，比如 `35` 岁的人比 `31` 岁的年龄大。

第二列是性别，性别是二元特征，我们可以用一个数来表示性别。用 `0` 表示女性，用 `1` 表示男性。这样一来，性别就表示为一个标量：`0` / `1`。

第三列是国籍，比如中国，美国，印度。国籍是类别特征，机器学习并不理解国籍，所以我们要把国籍编码成数值向量。世界上约有 `197` 个国家，我们先用一个 `[1 - 197]` 的整数表示一个国家。可以建立一个字典，把国籍映射成一个 `[1 - 197]` 的整数。比如：`China:1; US:2; India:3; Japan:4; Germany:5`。

<span style="color: #EA6B66">

**我们要从 1 开始计算，而不能从 0 开始计算。**

</span>

做这种映射，国籍就表示成 `[1 - 197]` 之间的整数。仅仅把国籍表示成 `[1 - 197]` 的整数还是不行，一个整数只是一种类别，它们之间不能比较大小。`US:2; India:3` 这个数字并不表示印度大于美国，这些整数只是类别而已，并不是真正的数值特征。

所以要进一步对国籍做 `one-hot encoding` ，用 `one-hot` 向量来表示国籍：

```
China  ->  1  -> [1,0,0,0,...,0]
US     ->  2  -> [0,1,0,0,...,0]
```

比如，中国对应 1，所以用 197 维的 `one-hot` 向量 `[1,0,0,0...,0]` 来表示，其中第一个元素为 1，其余元素都是 0；美国对应 2，这个 197 维的向量 `[0,1,0,0...,0]` 第二个元素是 1，其余元素都是 0。这样一来，每个国籍就由一个 `one-hot` 向量表示，一共有 197 个国家，所以每个向量都是 197 维的。

<span style="color: #EA6B66">我们要从 1 开始计算，而不能从 0 开始计算。</span> 因为我们要把 0 保留，用来表示未知或者缺失的国籍。数据库里面经常会有缺失的数据（比如用户没有填写国籍），这样缺失的国籍就用 0 来表示，它的 `one-hot` 向量就是一个全 0 的向量`[0,0,0,0...,0]`。

下面这个例子中，我们用一个 199 维表示一个人的特征。比如这个人 28 岁，女性，国籍是中国。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/01/1.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

其中，一个维度表示年龄，一个维度表示性别，一个 197 维的 `one-hot` 向量表示国籍。

这个例子里，这个 36 岁，男性，国籍未知的人的特征是这个 199 维的向量，我们用一个 197 维的全 0 向量表示未知国籍。

## 🔖 为什么要用 one-hot 向量表示特征

在处理类别特征的时候，我们使用 `one-hot` 向量表示国籍，每个国籍都用 197 维的向量表示。为什么要用 `one-hot` 向量而不用一个数字表示呢？比如用 1 表示中国，2 表示美国，3 表示印度。这样一来，名字就变成了数字，可以做数值计算，而且用一个数字表示的话，可以节省 197 倍的存储空间。当然这是不行的。否则我们就不需要 `one-hot encoding` 了。

假设我们使用 `1 -> China; 2 -> US; 3 -> India`。那么将中国 `1` 和美国 `2` 的特征加起来：`1+2=3` ，相当于 “中国 + 美国 = 印度”。这样的特征完全不合理。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/01/2.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

使用 `one-hot` 特征向量更合理。将 China 和 US 的 `one-hot` 向量加起来，得到 `[1,1,0,0,...,0]`，第一个和第二个元素都是 1，其余元素都是 0，这个特征向量的解释是：既有中国国籍，又有美国国籍。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/01/3.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

所以做机器学习的时候，不能用一个标量来表示一个类别特征，这种特征做法求和等数值计算是没有意义的。正确的做法是使用 `one-hot` 向量来表示类别特征。

## 🚀 处理文本数据的流程

在自然语言处理的应用中，数据就是文本 `document`，文本可以分割成很多单词，我们需要把单词表示成数值向量。其中每个单词都是一个类别，如果字典里有一万个单词，那么就有一万的类别，显然单词就是类别特征。我们需要使用处理类别特征的方法，把单词变成数值向量。

文本处理主要分为三个步骤：

- 🔔 把文本分割成单词
- 🔔 计算每个单词出现的次数
- 🔔 进行 one-hot 编码

文本处理的第一步是把文本分割成单词。一段话，一篇文章或者一本书可以表示为一个字符串，可以把文本分割成很多单词，这个步骤称为 `Tokenization`。

比如说这句话 `... to be or not to be ...`， 可以分割成这些单词 `[to, be, or, not, to, be]`。Tokenization 就是把文本变成单词的列表。

文本处理的第二步是计算词频，也就是每个单词出现的次数。我们可以用一个哈希表 `hash Map` 来计算，计算开始之前，哈希表是空的，我们根据以下方式更新哈希表：如果单词 `w` 不在表里面，说明到目前为止，`w` 还没有出现在文本里，所以我们要把 `w` 加入哈希表，并让它的词频等于 1；如果 `w` 在哈希表里面，说明 `w` 之前在文本里出现过，只需要把 `w` 的词频加 1 即可。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/01/4.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

接下来举个例子，我们将挨个处理这个列表里的单词。当处理到单词 `to` 的时候，首先查一下哈希表，发现哈希表里面有 `to`，它的词频是 398，说明 to 在文章里已经出现过 398 次了，现在这个单词又出现了一次，于是把表里的词频加 1，变成了 399；当处理到单词 `or`的时候，在表里找不到，这说明文章里还没有出现过 `or` 这个单词，第一次出现在文章里，于是我们把 `or` 插入表里，将词频设置为 1。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/01/5.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

完成统计词频之后，需要把哈希表做一个排序，按照词频递减的顺序进行排列，表的最前面是词频最高的，表最后是词频最低的。然后就把词频换成下标 `index`，从 1 开始数计数，词频最高的词的 `index` 是 1。这个例子里，一共有 8 个单词，每个词对应一个 [1, 8] 之间的正整数。这个表称为字典 ，可以把单词映射为一个数字。

字典里单词的个数称为词汇量 `vocabulary`。这例子里词汇量等于 8。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/01/6.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

英语里大概有 1 万个常用词，但是统计词频之后，你会发现字典会有几十万甚至上百万个单词。统计词频的目的就是保留常用词，去掉低频词。比如，我们可以保留词频最高的 1 万个单词，删掉其余单词。

**为什么要删掉低频词呢？**

- 🌰 低频词通常没有意义

很多低频词都是名字实体 `name entities`，比如我们的名字就是个名字实体，假如我们的名字出现在一个数据集里面，他的频率肯定会很低，在大多数的应用里名字实体没有意义。

低频词很多都是拼写错误造成的，如果把 prince 的 c 误写成 s，prinse，那么就创造了一个新的单词，这种词的频率也很低，在很多应用里，去掉这种词没有危害。

- 🌰 去掉低频词的另一个原因是我们不希望 `vocabulary` 太大。

下一个步骤做 `one-hot encoding` 的时候，向量的维度就是字典的大小。字典越大，向量的维度就越高，这会让计算变慢。下一节详细说明词嵌入 `Word Embedding` 的时候就会看到，字典越大，模型的参数就越会越多，就会容易造成过拟合 `overfitting`，删掉低频词就会大幅减小 `vocabulary`。

文本处理的第三步就是对单词做 `one-hot encoding`，通过查字典，把单词映射成一个正整数，一个单词的列表就映射成了一个正整数的列表；如果有必要就继续把这些正整数变成 `one-hot` 向量。这些 `one-hot` 向量的维度正好等于 `vocabulary`，在这个例子里面，字典的长度是 8，所以 `one-hot` 维度就等于 8。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/nlp/01/7.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

上面说过，字典里的低频词可能会被删掉，所以有些词在字典里找不到，例如把 be 错误拼写成单词 bi，这个词在字典里找不到，`one-hot encoding` 时，可以忽略这个词，也可以把它编码成全 0 向量。

## 🎐 总结

最后总结一下这一节的内容。

部分机器学习的数据会具备类别特征 `Categorical Features`，机器学习模型无法理解，我们需要将其转换成数值特征。类别特征的类别会被映射成一个从 `1` 开始计算的整数，`0` 被用来表示缺失或者未知的类别，并且使用 `one-hot` 向量，能很好的表示类别特征的意义。

文本处理主要有三个步骤，第一步 `tokenization` 把文本分割成单词的列表；第二步建立了一个字典`vocabulary`，把单词映射成一个正整数；第三步进行 `one-hot encoding`，将分割后的单词列表映射成正整数的列表或变成 `one-hot` 向量。


## ⛓ 参考

- 🔗 https://github.com/wangshusen/DeepLearning/blob/master/Slides/9_RNN_0.pdf
- 🔗 https://www.youtube.com/watch?v=NWcShtqr8kc
- 🔗 https://www.bilibili.com/video/BV1w54y1L7xK
