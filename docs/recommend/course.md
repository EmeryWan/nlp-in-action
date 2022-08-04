---
title: 🎥 课程
order: 2
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

- 📖 [动手学深度学习 PyTorch 版](https://courses.d2l.ai/zh-v2/)

  - 动手学深度学习 v2 - 从零开始介绍深度学习算法和代码实现
  - 课程主页 [https://courses.d2l.ai/zh-v2/](https://courses.d2l.ai/zh-v2/)
  - 教材 [https://zh-v2.d2l.ai/](https://zh-v2.d2l.ai/)

- 📖 [斯坦福 2021 秋季·实用机器学习（中文）](https://space.bilibili.com/1567748478/channel/collectiondetail?sid=28144#:~:text=https%3A//c.d2l.ai/stanford%2Dcs329p/)

  - 课程主页 [https://c.d2l.ai/stanford-cs329p/](https://c.d2l.ai/stanford-cs329p/)

- 📖 [AI 论文精读](https://space.bilibili.com/1567748478/channel/collectiondetail?sid=32744)

  - 更多论文请见 [https://github.com/mli/paper-reading](https://github.com/mli/paper-reading)

- 📖 [西湖大学 张岳老师｜自然语言处理在线课程](https://www.bilibili.com/video/BV1r3411q74d)

  - 本系列视频是张岳老师编写的《Natural Language Processing: A Machine Learning Perspective （机器学习视角下的自然语言处理）》一书的对应课程。

- 📖 [莫烦 Python NLP 教学](https://mofanpy.com/tutorials/machine-learning/nlp)

- 📖 [李宏毅机器学习深度学习课程](https://www.bilibili.com/video/BV1m3411p7wD)

- 📖 [2021 吴恩达深度学习 - NLP 序列模型](https://www.bilibili.com/video/BV1Co4y1279R)
