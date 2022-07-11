---
title: 介绍 # 自定义页面名称
order: 1 # 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序
toc: false
nav:
  title: 开发指南 # 自定义导航名称
  order: 2
---

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/banner.png';
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

## 🤗 介绍

本模块的内容主要是介绍：

- 🤔 如何在自己的电脑 / 服务器中安装显卡驱动和搭建深度学习的环境；

- 🤔 如何运行和调试自己的第一份代码。

## 📚 目录

- 💽 环境配置

  - 🐧 [Linux](guide/env/linux)

  - 🍎 [macOS](guide/env/macos)

  - 🏁 [windows](guide/env/windows)

- 🧑🏻‍💻 开发指南

  - 💻 [使用本地环境](guide/code/local)

  - 🖥️ [使用远程环境](guide/code/remote)
