---
title: ð macOS
toc: content
order: 3
group:
  order: 3
  title: ç¯å¢éç½®
---

# ð å¨ macOS ä¸éç½®æ·±åº¦å­¦ä¹ ç¯å¢


## ð» GPU

macOS å¹¶ä¸æ¯æ Nvida æ¾å¡ï¼æ¬å°è®­ç»è¯·ä½¿ç¨ CPUã

ð¤ Apple Silicon GPU ? 


<div class="guide-divide"></div>

## ð Python ç¯å¢

ä¸åçè®­ç»æ¡æ¶åçæ¬å¯è½ä¼éè¦ Python çæ¬ç¸å¯¹åºï¼ä¸åçé¡¹ç®å¯è½ä¹ä¼æä¸åçç¯å¢éæ±ï¼æ¨èä½¿ç¨ç®¡çå·¥å·ï¼æ ¹æ®éæ±æ°å»ºå¯¹åºçèæç¯å¢ï¼å¨éè¦çæ¶åéæ¶åæ¢ãå¯ä»¥éæ©ä»¥ä¸å·¥å·ï¼

- âï¸ [Anaconda / Miniconda](https://www.anaconda.com/) <Badge>Intel</Badge>
- ð¥ [Miniforge](https://conda-forge.org/) <Badge>Apple Silicon</Badge> <Badge>Intel</Badge>
- âï¸ [Mambaforge](https://github.com/conda-forge/miniforge#mambaforge) <Badge>Apple Silicon</Badge> <Badge>Intel</Badge>

<Alert>
ð§<br/>
å¦ææ¯ <code>Intel</code> ç Macï¼å¯ä»¥éæ©ä»¥ä¸ä»»ä¸å·¥å·ç®¡ç <code>Python</code> ç¯å¢ï¼<br>
å¦ææ¯ <code>Apple Silicon</code> ç Macï¼ç±äº <code>Anaconda</code> ææ¶è¿æ²¡æééï¼æ¨èä¼åéæ©å¦å¤ä¸¤ç§å·¥å·ãå¹¶ä¸è¯·æ³¨æä½¿ç¨æ¯æ <code>Apple Silicon</code> ç <code>Python</code> <Badge>3.9.1+</Badge>ã
</Alert>

<Alert type="error">
ð§<br/>
å®è£ä¸è¿°å·¥å·å¯ä»¥éæ© 1ï¸â£ <code>brew</code> æ 2ï¸â£ ç´æ¥å®è£ çæ¹å¼ã<br>
<br>
å¦æéæ©ä½¿ç¨ <code>brew</code> å®è£ï¼è¯·æ³¨æ â ï¸ å½ä½¿ç¨ <code>brew upgrade ${NAME}</code> æ´æ°æ¶ï¼ä¼è¿è¡è¦çå®è£ï¼å¦æ <code>envs_dirs</code> å¨å®è£ç®å½åï¼å·²æç¯å¢ä¼è¢«æ¸é¤ãæ¨èéç½® <code>.condarc</code> å°ç¯å¢ç®å½éç½®å°ç¨æ·ç®å½ã 
</Alert>


## Miniforge

- ð° éæ© brew å®è£

å¨ç»ç«¯ä½¿ç¨ä»¥ä¸å½ä»¤å®è£ã

```zsh
brew install miniforge
```

- ð° éæ©ç´æ¥å®è£

å¨ [æ­¤é¾æ¥](https://github.com/conda-forge/miniforge#miniforge3) éæ©éåççæ¬ï¼ä¸è½½åè¿è¡ä»¥ä¸å½ä»¤ï¼åææç¤ºè¿è¡å®è£ã

```zsh
cd ${DOWNLOAD_DIR}

chmod +x ./Miniforge3-{Version}-MacOSX-{Architecture}.sh
./Miniforge3-{Version}-MacOSX-{Architecture}.sh
```

## Anaconda

- ð° éæ© brew å®è£

å¨ç»ç«¯ä½¿ç¨ä»¥ä¸å½ä»¤å®è£ã

```zsh
brew install anaconda
```

- ð° éæ©ç´æ¥å®è£

æ¨èå¨å½åéåæºä¸è½½ï¼ä»¥è·å¾æ´å¥½çç½ç»ä½éªãæ¨èéæ©ä»¥ä¸ç­å½åå°åï¼

- ð¿ [é¿éäº](https://developer.aliyun.com/mirror/anaconda)
- ð [åäº¬å¤å½è¯­](https://mirrors.bfsu.edu.cn/help/anaconda/)


<div class="guide-divide"></div>

## ð½ éç½®å½åéå

### Conda

æ¨èä½¿ç¨ ð¿ [é¿éäº](https://developer.aliyun.com/mirror/anaconda)ã

å¨å®¶ç®å½ `/Users/{USER_NAME}` ä¸­æ°å»º `.condarc` æä»¶ï¼å¹¶åå¥å¦ä¸åå®¹ï¼

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

### Python

Python å½åéåä¼å¤ä¸éåº¦è¯å¥½ï¼å¯ä»¥éæ©ä»»ä¸åéçéåï¼ä»¥ä¸ä¸ºé¨ååè¡¨ï¼

å¨å®¶ç®å½ `/Users/{USER_NAME}` ä¸­æ°å»º `.pip/pip.conf` æä»¶ï¼å¹¶åå¥å¦ä¸åå®¹ï¼

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
