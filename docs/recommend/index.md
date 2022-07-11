---
title: 介绍 # 自定义页面名称
order: 1 # 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序
toc: false
nav:
  title: 推荐内容 # 自定义导航名称
  order: 4
---

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => (
    <div className="post-top-icon">
      <Image src={trueImgSrc('/img/banner.png')} preview={false}/>
    </div>
);
```

https://www.paddlepaddle.org.cn/tutorials/projectdetail/3518060#anchor-10

http://www.huaxiaozhuan.com/