---
title: 代码
order: 4
toc: menu
---

```jsx
/**
 * inline: true
 */
import React from 'react'; import { Image } from 'antd'; import { trueImgSrc } from 'nlp-in-action/utils';
export default () => {
  const path = '/img/banner_small.png'; const truePath = trueImgSrc(path);
  return (<div className="post-top-icon"> <Image src={truePath} preview={false} /> </div>);
};
```


## 📚 内容

- 📖 [nlp-tutorial](https://github.com/graykode/nlp-tutorial)
  - 深度学习研究人员的自然语言处理教程
  - TensorFlow & Pytorch

- 📖 [nlp-beginner-finish](https://github.com/Alic-yuan/nlp-beginner-finish)
  - 自然语言处理入门练习的所有任务，所有代码都经过测试，可以正常运行

