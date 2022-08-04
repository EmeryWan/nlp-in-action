---
title: 🛠 其他
order: 6
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

- 📖 [深度学习论文精读](https://github.com/mli/paper-reading)

  - 深度学习经典、新论文逐段精读

- 📖 [awesome-nlp](https://github.com/keon/awesome-nlp)

  - 专门用于自然语言处理的资源精选列表

- 📖 [深度学习自然语言处理](https://github.com/DA-southampton/NLP_ability)
  - 总结梳理自然语言处理工程师(NLP)需要积累的各方面知识，包括面试题，各种基础知识，工程能力等等，提升核心竞争力
