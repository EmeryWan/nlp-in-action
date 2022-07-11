---
title: 7️⃣ 机器翻译和 seq-to-seq
order: 8
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


这节的内容是应用 `RNN` 来做机器翻译。机器翻译模型有很多种，这节课介绍 `sequence to sequence` 模型。

并使用 `sequence to sequence` 模型，把英语翻译成德语。

机器翻译是个 `many to many` 多对多的问题，输入的英语长度大于 `1`，输出的德语长度也大于 `1`，且输入和输出的长度都不固定。


做任何机器学习的应用，第一步都是处理数据，我们首先来准备机器翻译的数据。

因为我们是学习用途，所以拿个小规模数据就行了，可以用这个网站提供的小规模数据，来训练一个简单的 `sequence to sequence` 模型。


这个网站上有多种语言翻译的数据，这个文件是德语和英语的翻译，把文件打开，左边是英语句子，右边是德语句子。


一个英语句子对应多个德语句子，给定一句英语，如果翻译结果能对应其中一个德语句子，翻译就算完全正确。


我们需要处理数据，把这些句子用矩阵表示，首先进行预处理，比如把大写字母变成小写，去掉标点符号等等，


预处理之后要做 tokenarization，把一句话变成很多个单词或者很多个字符，做 tokenaization 的时候，要用两个不同的 tokenaizer，


英语用一个，德语用一个，tokenaization 之后要建立两个字典，一个英语字典一个德语字典，

我之后会解释，为什么要用两个 tokenaizers 两个字典，

tokenization 可以是 character level，也可以是 word level，两者都可以，


character level tokenization 会把一句话分割成很多字符，

word level tokenization 会把一句话分割成很多单词，

为了简单方便，这节课使用 character level tokenization，

一句话变成一个列表，列表里面每个元素都是一个字符，

但实际的机器翻译都是用 word level，
tokenization 因为他们的数据及足够大，
我之后会解释，

我刚才说了要用两个不同的 tokenaizers，我现在解释一下原因，在字符层面上，不同的语言通常有不同的字母表，

英语用26个拉丁字母，如果区分大小写就有52个字母，

德语也用26个拉丁字母，但是还有4个不常用的字母，

希腊语使用不同的字母，希腊语有24个希腊字母，区分大小写，

中文没有字母，而是有几千个汉字，

日语字符更复杂，有46个评价名，46个片甲名，还有几百个汉字，

两种语言的字符通常是不同的，
所以应该用两种不同的 tokenaizers，
各有各的字母表，

如果是做 word level tokenization，
就更应该用两种不同的 tokenizers，
和不同的字典，

英语和德语的词汇完全不一样，
绝大多数德语单词，
在英语字典里是找不到的，

此外不同的语言有不同的分词方法，
汉语，日语跟欧洲语言的分词方法就不一样，

我用 keras 提供的库作 tokenaization，
结束之后自动生成字典，
左边是英语字典，

一共有27个字符，
26个是字母，
还有1个空格符号，
27个字符分别对应27个数字，

右边是德语字典，
我把德语中不常用的字符删掉了，
只保留了26个字母和一个空格符号，
任务是把英语翻译成德语

英语是原语言，
德语是目标语言，
要往目标语言，
德语的字典里加两个符号，
一个是起始符，
一个是终止符，

我用 `\t` 做起始符，
`\n` 做终止符，
你拿什么字符做起始符和终止符都行，
只要别跟字典里已有的字符冲突就可以，

tokenaization 结束之后，每句话都变成了一个字符的列表，并且生成了一个英语字典，和一个德语字典，

用这个字典，就可以把每个字符映射成一个整数，这样一来一句英语就变成了这样一个 sequence，每一个元素是一个整数，

对于德语也是完全一样的，一句话先变成一个字符列表，然后用德语字典，把每个字符映射成一个数字，这样一来，一句德语就变成了一个 sequence，

可以进一步，
把每个数字用一个 `one-hot` 向量表示，
字母 i 的 `index` 是 9，
就变成了这个 `one-hot` 向量，
第9个元素是1，
其余元素都是0，

做完 `one-hot encoding`，
每个字符用一个向量表示，
每句话就用一个矩阵表示，
这个矩阵就是 `RNN` 的输入，

数据已经准备好了，
接下来，
我们搭建一个 `sequence to sequence` 模型，
并且训练这个模型，

`sequence to sequence` 模型有一个 `Encoder` 编码器，
和一个 `Decoder` 解码器，

`Encoder` 是个 `LSTM` 或者其他 `RNN` 模型，
用来从输入的英语句子中提取特征，

`Encoder` 最后一个状态，
就是从输入的句子中提取的特征，
包含这句话的信息，
`Encoder` 其余的状态没有用，
都被丢掉了，

`Encoder` 的输出是 `LSTM` 最后的状态 h，
以及最后的传输带  $c$，

`sequence to sequence` 模型，
还有一个 `Decoder` 解码器，用来生成德语，

这个 `Decoder`，
其实就是上节课讲的文本生成器，
跟上节课讲的文本生成，
器唯一的区别在于初始状态，

上节课用的文本生成期的初始状态，
是个全零项量，
这里 `Decoder` 的初始状态，
是 `Encoder` 的最后一个状态，

`Encoder` 最后一个状态 $h$ 和  $c$，
是从输入的英语句子中提取的特征，
项量概括了输入的英语句子，
`Decoder` 靠这个状态来指导这句英语是 go away，

再强调一遍，`Decoder` 的初始状态，是 `Encoder` 的最后一个状态，

通过 `Encoder` 最后一个状态，`Decoder` 得知输入的英语句子是 go away，现在 `Decoder` 开始生成德语句子，

`Decoder` 是个 `LSTM` 模型，他每次接收一个输入，然后输出对下一个字符的预测，

第一个输入必须是起始符，
我用 `\t` 来表示起始符，
这就是我为什么要在德语字典中加入起始符，

 `Decoder` 会输出一个概率分布，
记做项量 $p$，

起始符后面这句德语的第一个字母是 m，
我把字母 m 做 one holding encoding，
作为标签 $y$ 

用标签 $y$ 和预测 p 的 cross entropy 作为损失函数，我们希望预测 p 尽量接近标签 $y$ 所以损失函数越小越好，


有了损失函数，就可以反向传播计算梯度，梯度会从损失函数传到 `Decoder`，然后再从 `Decoder` 一直传到 `Encoder`，
然后用梯度下降来更新 `Decoder` 和 `Encoder`的模型参数，让损失函数减小，

然后输入是两个字符，
起始符与字母 m，
`Decoder` 会输出对下一个字符的预测，
记为向量 p，

输入的字符串的下一个字符是字母 a，把 a 做 `one-hot encoding` 作为标签 $y$ 损失函数是标签 $y$ 与预测 p 的 cross entropy，


然后用反向传播来计算梯度，然后更新 `Decoder` 和 `Encoder`，在下一个输入是三个字符：起始符，字母 m 字母 a，
`LSTM` 输出对下一个字符的预测，
即为 p 项量，

真实的下一个字母是  $c$，
所以标签 $y$ 是字母 c 的 one-hot 向量，
同样的道理用反向传播计算梯度，
然后做梯度下降来更新抵 colder 和 `Encoder`，
不断重复这个过程，
直到这句德语的最后一个字符，

最后一轮把整句德语作为 `Decoder` 输入，
所以用停止服的 one-hot 向量作为标签 $y$ 
希望输出的预测尽量接近标签，
也就是停止服，

然后再做一次反向传播，
再更新一次模型参数，
不断重复这个训练过程，
拿所有的英语，德语二元组来训练 `Decoder` 和 `Encoder`，


如果你用 keras 或者 pie torch，
tensor，
flow 等系统来搭一个 `sequence to sequence` 模型，
你需要这么做，
`Encoder` 网络的输入是英文句子的 one holling coding，
用一个矩阵表示，

`Encoder` 网络有一层或者多层 `LSTM`，
用来从英文句子里提取特征，

`LSTM` 的输出是最后一个状态 h，
与最终的传输带  $c$，
`Decoder` 网络的初始状态是 $h$ 与  $c$，
这样可以让 `Encoder` 和 `Decoder` 连起来，

在做反向传播的时候，
梯度可以顺着这条线，
从 `Decoder` 传播到 `Encoder`，


 `Decoder` 网络的输入是德语的上半句话，
 `Decoder` 输出当前状态 h，
然后全连接层，输出对下一个字符的预测，


训练好了 `sequence to sequence` 模型，
可以拿他把英语翻译成德语，
把一句英语的每个字符输入 `Encoder`，
`Encoder` 会在状态 $h$ 和 c 中，


积累这句话的信息，
`Encoder` 输出最后的状态，
记住 h_0 和 c_0，

他们是从这句话里提取的特征，
h_0 和 c_0 被送给了 `Decoder`，

`Encoder` 的输出 $h$ 0和 c 0，
被作为 `Decoder` 的初始状态，
这样一来，
`Decoder` 就知道输入的英文句子是 go away，

现在 `Decoder` 就跟上节课讲的文本生成，
器一样工作，
首先把起始服务输入 `Decoder`，
有了新的输入，
 `Decoder` 就会更新状态 $h$ 和传输的  $c$，
并且预测下一个字符，


`Decoder` 输出的预测是每个字符的概率值，
我们要根据概率值来选取一个字符，比如可以选取概率最大的字符，也可以根据概率值来做随机抽样，我可能会得到字符 m，于是我把 m 记录下来，


现在 `LSTM` `Decoder` 的状态变成了 h_1 和 c_1，
把新生成的字符 m 作为 `LSTM` 的输入，
让 `LSTM` 来预测下一个字符，

基于状态 h_1 和 c_1 以及新的输入 m，
`LSTM` 会更新状态为 h_2和 c_2，
并且输出一个概率分布，
根据概率分布来抽样，
我们可能得到字符 a，
把字符 a 给记录下来，

现在状态更新成了 h_2 和 c_2，
拿新生成的字符 a 作为输入，
让 `LSTM` 来做预测，

基于状态 $h$ 2 c r，
以及新的输入字符 a，
`LSTM` 更新状态为 $h$ 3 c 3，
并且输出一个概率分布，
根据概率分布来做抽样得到字符  $c$，
然后把 c 记录下来，

我不断重复这个过程，
更新状态并且生成新的字符，
然后用新生成的字符，
作为下一轮的输入，

运行14轮之后，
状态是 $h$ 14和 c 14，
上一轮生成的字符是字母 e，
现在拿他作为输入，

根据 `Decoder` 输出的概率分布做抽样，我们可能碰巧抽到了终止符，一旦抽到终止符，就终止文本生成，并返回记录下的字符串，这个字符串就是模型翻译得到的德语。


## 总结

总结一下这节课的内容，
这节课讲了用 `sequence to sequence`，
模型做机器翻译，
模型有一个 `Encoder` 网络，
和一个 `Decoder` 网络，

在我的例子里，
`Encoder` 的输入是一句英语，
每输入一个词 `RNN` 就会更新状态，
把输入的信息积累在 `Encoder` 的状态里，
`Encoder` 最后一个状态，
就是从英文句子里提取的特征，
`Encoder`只输出最后一个状态，
会扔掉之前所有状态，
把最后一个状态传递给 `Decoder` 网络，
把 incode 的最后一个状态，
作为 `Decoder` 网络的初始状态，
初始化之后，
`Decoder` 网络就知道输入的英文句子了，
然后 `Decoder` 就作为一个文本生成器，
生成一句德语，
首先把起始符作为 `Decoder`  `RNN` 的输入，
 `Decoder`  `RNN` 会更新状态为 s 1，
然后全连接层会输出预测的概率，
即为 p 1 

根据概率分布 p 1做抽样，
得到下一个字符即做 z 1，
`Decoder` 网络拿 z 1做输入，
更新状态为 s r，
并且输出预测的概率 p 2，
根据 p 2做抽样，
得到新的字符 z 2，

同样的道理，
现在 `Decoder` 网络拿 z 2作为输入，
更新状态为 s 3，
然后输出预测的概率分布 p 3，
根据 p 3做抽样，
得到新的字符 z 3，

不停重复这个过程，
抽样得到新的字符即做 z，
然后拿 z 作为下一轮输入，
更新状态 s，
以及计算概率分布 p，
假如抽样得到了停止符，
那么就终止文本生成，
返回这个生成的序列，

我们设计了一个 `sequence to sequence` model，思考一下，我怎么改进这个模型

`sequence to sequence` 模型的原理是这样的，
`Encoder` 处理输入的英语句子，
把信息都压缩到状态向量里面，

`Encoder` 最后一个状态，
是整句话的一个概要，
理想情况下，
`Encoder` 最后一个状态，
包含整句英语的完整信息，
当然那只是理想状态，

假如英语句子很长，
`LSTM` 就会遗忘，
假如英语句子里有些信息被遗忘了，
那么 `Decoder` 就不可能有英语句子的完整信息，

那么 `Decoder` 生成的德语，
肯定就会有些遗漏，
一种很显然的改进，
就是用双向 `LSTM` 代替单向 `LSTM`，

回忆一下双向 `LSTM` 运行两条链，
一条从左到右，
另一条从右到左，
两条链独立运行，
分别从输入中提取特征，

从左到右这条链的最后一个状态 $h$ t，
可能会遗忘掉最左边的输入，
从右到左这条链最后一个状态 $h$ t prime，
可能会遗忘掉最右边的输入，

如果把 $h$ t 和 $h$ t prime 结合起来，
就能更好记住所有的输入，

综上所述，
把单向的 `LSTM` 换成双向 `LSTM`，
可以更好的记住输入的句子，
不容易遗忘，
但是 `Decoder` 必须是单向 `LSTM`，
`Decoder` 就是个文本生成器，
必须按顺序生成文本，
所以 `Decoder` 不能用双向 `LSTM`，

这节课我用了 character level technization，
这样比较方便，
不需要 embedding 层，
但最好还是用 world level technization，

原因是这样的，
英文平均每个单词有4.5个字母，
如果用单词代替字符，
那么输入的序列就能短4.5倍，
序列更短就更不容易遗忘，

但是呢想用 word level tokenization，
你需要有足够大的数据集，
用 word level tokenization，
得到的 vocabulary 大约是10,000，
因此 one hot 限量的维度大约就是10,000，
必须得用 wording bedding 得到 d 为词项量，

embedding 层的参数数量太大了，
用小数据集，
没有办法很好的训练 embedding 层，
会有 overfitting 的问题，
你得有足够大的训练数据级，
你才能避免 overfitting，
或者对 embedding 层，
做预训练才能避免 overfitting，


另一种改进方法是 multitask learning，
多任务学习，
这节课我们把英语翻译成德语，
`Encoder` 读入一句英语，
把英语句子概括成最终的状态，
像量 $h$ 和  $c$，
`Decoder` 通过 $h$ 和 c 获取英语句子的信息，
然后生成一句德语，
训练的时候，
比较 `Decoder` 的预测与真实的德语单词，
从而获得损失函数和梯度，
用来更新 `Decoder` 和 `Encoder`，
把英语翻译成德语是一个任务，

你还可以多加几个任务，
比如你可以把英语句子，
翻译成英语句子本身，
添加一个 `Decoder`，
让他根据 $h$ 和 c 来生成英语句子，
这样一来 `Encoder` 只有一个，
而训练数据多了一倍，
所以 `Encoder` 可以被训练的更好，

你还可以添加其他很多任务，
还有英文翻译成其他语言的数据集，
可以利用这些数据更好的训练营 coder，

比如你还可以添加更多任务，
把英语翻译成法语，
西班牙语意大利语，
添加更多的 `Decoder`，
让这些 `Decoder` 生成各种语言，

但是 `Encoder` 只有一个，
如果你用10种语言做训练，
那么训练 `Encoder` 的数据就多了10倍，
`Encoder` 就可以训练的更好，

我们的目标是把英语翻译成德语，
通过借助其他语言，
可以把引抠的变得更好，
虽然德语底抠的没有改进，
但是翻译的效果还是会变好，

我介绍了三种改进的办法，
第一，在 `Encoder` 中用双向 ls t m 代替单向 `LSTM`，
第二做 word level tokenization，而不是 character level，tokenization，
第三多任务学习，

还有一种方法叫做 attention 注意力机制，
这个方法是最强的，
对机器翻译的提高非常大，
下节课我们学习 attention，

