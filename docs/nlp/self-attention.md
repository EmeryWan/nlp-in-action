---
title: 9️⃣ 自注意力机制
order: 10
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

Doing
