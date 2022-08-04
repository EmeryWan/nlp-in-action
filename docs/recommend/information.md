---
title: 📚 资料
order: 3
toc: false
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
      {' '}
      <Image src={truePath} preview={false} />{' '}
    </div>
  );
};
```

## 📚 内容

- 📖 [ChineseNlpCorpus](https://github.com/SophonPlus/ChineseNlpCorpus)

  - 搜集、整理、发布 中文 自然语言处理 语料/数据集，与 有志之士 共同 促进 中文 自然语言处理 的 发展。

- 📖 [动手学习深度学习中文笔记](https://github.com/HIT-UG-Group/DeepLearning-MuLi-Notes)
