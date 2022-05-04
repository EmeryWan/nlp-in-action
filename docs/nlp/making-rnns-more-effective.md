---
title: 5️⃣ 更高效的 RNN
order: 6
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
  const path = '/img/nlp/banner.png';
  const truePath = trueImgSrc(path);
  return (
    <div className="post-top-icon">
      <Image
        src={truePath}
        preview={false}
        style={{
          maxHeight: '200px',
        }}
      />
    </div>
  );
};
```

Doing
