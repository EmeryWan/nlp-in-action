---
title: 其他
order: 6
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

- 📖 [awesome-nlp](https://github.com/keon/awesome-nlp)
  - 专门用于自然语言处理的资源精选列表

