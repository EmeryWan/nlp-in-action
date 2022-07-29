---
title: 科研
order: 5
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

- 📖 [research_tao](https://github.com/zibuyu/research_tao)
  - NLP研究入门之道

