---
title: ð Windows
toc: content
order: 4
group:
  order: 3
  title: ç¯å¢éç½®
---

# ð å¨ Windows ä¸éç½®æ·±åº¦å­¦ä¹ ç¯å¢

<Alert type="info">
ð¤<br>
<code>windows</code>ä½ä¸ºæå¸¸ç¨çæä½ç³»ç»ï¼å¤§å®¶å¯¹å®é½å¾çæï¼ä½æ¯å°å®ä½ä¸ºæ·±åº¦å­¦ä¹ ççç³»ç»ï¼å¯è½ä¼æä¸äºâææ³ä¸å°âçé®é¢ï¼è¯·åç¨ ð æç´¢å¼æè§£å³è¿äºé®é¢ã<br>
<br>
ä½¿ç¨<code>windows</code>ï¼ææ¡ä»¶çè¯å»ºè®®ä½¿ç¨ <code>windows</code>è¿ç¨ä½¿ç¨<code>Linux</code>ã
<br>
æèå¯ä»¥èèä¸ä¸<code>WSL2</code>ï¼åªæå°é¨åæ§è½æå¤±ãå¨<code>windows 11</code>ä¸­ï¼<code>WSL2</code>å·²ç»å¯ä»¥åèææºå±å­ã
</Alert>


<div class="guide-divide"></div>

## ð» Nvidia GPU

### é©±å¨

é¦åï¼è¯·ç¡®ä¿å¨ç³»ç»ä¸­å®è£äºè±ä¼è¾¾æ¾å¡é©±å¨ï¼å¯ä»¥æå¼è±ä¼è¾¾æ§å¶é¢æ¿æ¥çè¯¦ç»ä¿¡æ¯ã

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/guide/windows/nvidia.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

### CUDA

ä½ å¯ä»¥å¨ [è¿é](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html) çå°æ¾å¡é©±å¨çæ¬ä¸ CUDA çæ¬çå¯¹åºå³ç³»ã

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/guide/windows/cuda.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

ð° å¨è¿éçæ¾å¡é©±å¨çæ¬ä¸º `456.53`ï¼æ ¹æ®å¯¹åºè¡¨å¯ç¥ï¼æé«å¯éç CUDA Toolkit ççæ¬å·ä¸º `CUDA 11.1 GA`ã

ä¹åï¼å¯å¨å®ç½ [è¯¥é¡µé¢](https://developer.nvidia.com/cuda-toolkit-archive) ä¸­ï¼éæ©å¯¹åºç CUDA Toolkitãä¸è½½å®æåï¼ææç¤ºä¸ä¸æ­¥å®è£å³å¯ã

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/guide/windows/cuda-download.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

### cuDNN

ä½ å¯ä»¥å¨å®ç½ [æ­¤é¾æ¥](https://developer.nvidia.com/rdp/cudnn-download) ä¸è½½ CUDNNï¼éè¦æ³¨åå¼åèè´¦å·ï¼å¯è½è¿éè¦ä¸ä¸ªâè¯å¥½çç½ç»ç¯å¢âã

éæ©ä¸ CUDA ç¸å¯¹åºç¨ç cuDNNã

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/guide/windows/cudnn.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

ä¸è½½å®æåï¼å°è§£ååçæä»¶å¤å¶å° CUDA å®è£ç®å½ `C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\{Version}`ã


<div class="guide-divide"></div>

## ð Python ç¯å¢

---

ä¸åçè®­ç»æ¡æ¶åçæ¬å¯è½ä¼éè¦ Python çæ¬ç¸å¯¹åºï¼ä¸åçé¡¹ç®å¯è½ä¹ä¼æä¸åçç¯å¢éæ±ï¼æ¨èä½¿ç¨ç®¡çå·¥å·ï¼æ ¹æ®éæ±æ°å»ºå¯¹åºçèæç¯å¢ï¼å¨éè¦çæ¶åéæ¶åæ¢ãå¯ä»¥éæ©ä»¥ä¸å·¥å·ï¼

- âï¸ [Anaconda / Miniconda](https://www.anaconda.com/)
- ð¥ [Miniforge](https://conda-forge.org/)
- âï¸ [Mambaforge](https://github.com/conda-forge/miniforge#mambaforge)

### Miniforge

å¨ [æ­¤é¾æ¥](https://github.com/conda-forge/miniforge#miniforge3) éæ©éåççæ¬ï¼åææç¤ºè¿è¡å®è£ãä¸è½½å®æåï¼åå»å®è£åï¼ææç¤ºå®è£å³å¯ã

<Alert>
ð§<br>
æ³¨æï¼è¯·ä¸è¦ä½¿ç¨å¸¦æä¸­æçå®è£è·¯å¾ï¼
</Alert>

### Anaconda

æ¨èå¨å½åéåæºä¸è½½ï¼ä»¥è·å¾æ´å¥½çç½ç»ä½éªãæ¨èéæ©ä»¥ä¸ç­å½åå°åï¼

- ð¿ [é¿éäº](https://developer.aliyun.com/mirror/anaconda)
- ð [åäº¬å¤å½è¯­](https://mirrors.bfsu.edu.cn/help/anaconda/)

ä¸è½½å®æåï¼åå»å®è£åï¼ææç¤ºå®è£å³å¯ã

<Alert>
ð§<br>
æ³¨æï¼è¯·ä¸è¦ä½¿ç¨å¸¦æä¸­æçå®è£è·¯å¾ï¼
</Alert>


<div class="guide-divide"></div>

## ð½ éç½®å½åéå

---

### Conda

æ¨èä½¿ç¨ ð¿ [é¿éäº](https://developer.aliyun.com/mirror/anaconda)ã

å¨å®¶ç®å½ `C:\\Users\\${USER_NAME}` ä¸­æ°å»º `.condarc` æä»¶ï¼å¹¶åå¥å¦ä¸åå®¹ï¼

```yaml
channels:
  - defaults
show_channel_urls: true
default_channels:
  - http://mirrors.aliyun.com/anaconda/pkgs/main
  - http://mirrors.aliyun.com/anaconda/pkgs/r
  - http://mirrors.aliyun.com/anaconda/pkgs/msys2
custom_channels:
  conda-forge: http://mirrors.aliyun.com/anaconda/cloud
  msys2: http://mirrors.aliyun.com/anaconda/cloud
  bioconda: http://mirrors.aliyun.com/anaconda/cloud
  menpo: http://mirrors.aliyun.com/anaconda/cloud
  pytorch: http://mirrors.aliyun.com/anaconda/cloud
  simpleitk: http://mirrors.aliyun.com/anaconda/cloud
```

éç½®å®æåï¼è¿è¡ `conda clean -i` æ¸é¤ç´¢å¼ç¼å­ã

<Alert>
ð§<br>
æ³¨æï¼windows ç³»ç» conda çä¸è½½åå®¹åèæç¯å¢é»è®¤å¨<code>C:\\Users\\${USER_NAME}</code>ç®å½ä¸ï¼å¦æå½åç¨æ·ä¸ºä¸­æåç§°æ¶ï¼åå»ºèæç¯å¢å¯è½æ æ³æåãå¯ä»¥å¨<code>.condarc</code>ä¸­éç½®æ°çç¯å¢åç¼å­ç®å½ã
</Alert>

```yaml
# æ·»å ä»¥ååå®¹
pkgs_dirs:
  - ${YOUR_ENGLISH_PATH}
envs_dirs:
  - ${YOUR_ENGLISH_PATH}
```

### Python

Python å½åéåä¼å¤ä¸éåº¦è¯å¥½ï¼å¯ä»¥éæ©ä»»ä¸åéçéåï¼ä»¥ä¸ä¸ºé¨ååè¡¨ï¼

å¨ç¨æ·ç®å½ `C:\\Users\\${USER_NAME}` ä¸­æ°å»º `pip\\pip.ini` æä»¶ï¼å¹¶åå¥å¦ä¸åå®¹ï¼

- ð é¿éäº

```conf
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
trusted-host = mirrors.aliyun.com
```

- ð è¾è®¯äº

```conf
[global]
index-url = http://mirrors.cloud.tencent.com/pypi/simple
trusted-host = mirrors.cloud.tencent.com
```

- ð åä¸ºäº

```conf
[global]
index-url = https://repo.huaweicloud.com/repository/pypi/simple
trusted-host = repo.huaweicloud.com
```

<div class="guide-divide"></div>

## ð«£ WSL

---

TODO

## â åè

- ð https://zhuanlan.zhihu.com/p/99880204
