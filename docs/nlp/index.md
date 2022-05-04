---
title: 介绍 # 自定义页面名称
order: 1 # 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序
toc: false
nav:
  title: NLP 火速上手 # 自定义导航名称
  order: 1
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
          maxHeight: '230px',
        }}
      />
    </div>
  );
};
```

## 🤗 介绍

本模块的内容主要是介绍基于深度学习的自然语言处理。

### 🤔

这里的前半部分内容主要来自 [@wangshusen](https://github.com/wangshusen) 老师在网络中发布的 `RNN和NLP` 的课程内容。应该是老师之前任教时 [Deep Learning](https://github.com/wangshusen/DeepLearning) 课程的一部分。

[王树森](https://github.com/wangshusen) 老师在网络上也发布过许多其他课程。可以点击 [bilibili](https://space.bilibili.com/1369507485/favlist?fid=1244871485&ftype=create) [youtube](https://www.youtube.com/playlist?list=PLvOO0btloRnuTUGN4XqO85eKPeFSZsEqK) 查看更多课程。

此课程是我在学习 `NLP` 过程中，可以说是我看过的 **最好 👍** 的教程，让我醍醐灌顶。

我学习 `NLP` 的过程比较 “坎坷”，初期也比较盲目，当时网络上的资料也不像最近这么多。希望这个总结对大家学习有帮助。

其中原教程实现部分，会使用 `pyTorch` 进行实现（⚒ Doing）。

### 🫣

这里的后半部分内容主要是介绍一些 `NLP` 中的常见任务和前半部分未介绍的内容（⚒ Doing）。

以覆盖 `NLP` 核心内容。

### 🤗

在这个项目中，会推荐一些关于学习 `NLP` 的内容和资料。 [🔗 传送门 ➡️](/recommend)

欢迎大家进行提供和分享，让更多的人受益。
