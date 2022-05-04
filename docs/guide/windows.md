---
title: 🏁 Windows
toc: content
order: 4
group:
  order: 2
  title: 环境配置
---

# 🏁 在 Windows 上配置深度学习环境

<Alert type="info">
🤔<br>
<code>windows</code>作为最常用的操作系统，大家对它都很熟悉，但是将它作为深度学习的的系统，可能会有一些“意想不到”的问题，请善用 🔍 搜索引擎解决这些问题。<br>
<br>
使用<code>windows</code>，有条件的话建议使用 <code>windows</code>远程使用<code>Linux</code>。
<br>
或者可以考虑一下<code>WSL2</code>，只有小部分性能损失。在<code>windows 11</code>中，<code>WSL2</code>已经可以和虚拟机共存。
</Alert>

## 💻 Nvidia GPU

### 🌱 驱动

首先，请确保在系统中安装了英伟达显卡驱动，可以打开英伟达控制面板查看详细信息。

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

### 🌿 CUDA

你可以在 [这里](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html) 看到显卡驱动版本与 CUDA 版本的对应关系。

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

🌰 在这里的显卡驱动版本为 `456.53`，根据对应表可知，最高可选的 CUDA Toolkit 的版本号为 `CUDA 11.1 GA`。

之后，可在官网 [该页面](https://developer.nvidia.com/cuda-toolkit-archive) 中，选择对应的 CUDA Toolkit。下载完成后，按提示下一步安装即可。

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

### 🪴 cuDNN

你可以在官网 [此链接](https://developer.nvidia.com/rdp/cudnn-download) 下载 CUDNN，需要注册开发者账号，可能还需要一个“良好的网络环境”。

选择与 CUDA 相对应用的 cuDNN。

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

下载完成后，将解压后的文件复制到 CUDA 安装目录 `C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\{Version}`。

## 🐍 Python 环境

不同的训练框架和版本可能会需要 Python 版本相对应，不同的项目可能也会有不同的环境需求，推荐使用管理工具，根据需求新建对应的虚拟环境，在需要的时候随时切换。可以选择以下工具：

- ☁️ [Anaconda / Miniconda](https://www.anaconda.com/)
- 🌥 [Miniforge](https://conda-forge.org/)
- ⛅️ [Mambaforge](https://github.com/conda-forge/miniforge#mambaforge)

## 🏖 Miniforge

在 [此链接](https://github.com/conda-forge/miniforge#miniforge3) 选择适合的版本，再按提示进行安装。下载完成后，双击安装包，按提示安装即可。

<Alert>
🚧<br>
注意：请不要使用带有中文的安装路径！
</Alert>

## 🏝 Anaconda

推荐在国内镜像源下载，以获得更好的网络体验。推荐选择以下等国内地址：

- 💿 [阿里云](https://developer.aliyun.com/mirror/anaconda)
- 📀 [北京外国语](https://mirrors.bfsu.edu.cn/help/anaconda/)

下载完成后，双击安装包，按提示安装即可。

<Alert>
🚧<br>
注意：请不要使用带有中文的安装路径！
</Alert>

## 💽 配置国内镜像

### ⚾️ Conda

推荐使用 💿 [阿里云](https://developer.aliyun.com/mirror/anaconda)。

在家目录 `C:\\Users\\${USER_NAME}` 中新建 `.condarc` 文件，并写入如下内容：

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

配置完成后，运行 `conda clean -i` 清除索引缓存。

<Alert>
🚧<br>
注意：windows 系统 conda 的下载内容和虚拟环境默认在<code>C:\\Users\\${USER_NAME}</code>目录下，如果当前用户为中文名称时，创建虚拟环境可能无法成功。可以在<code>.condarc</code>中配置新的环境和缓存目录。
</Alert>

```yaml
# 添加以及内容
pkgs_dirs:
  - ${YOUR_ENGLISH_PATH}
envs_dirs:
  - ${YOUR_ENGLISH_PATH}
```

### 🥎 Python

Python 国内镜像众多且速度良好，可以选择任一合适的镜像，以下为部分列表：

在用户目录 `C:\\Users\\${USER_NAME}` 中新建 `pip\\pip.ini` 文件，并写入如下内容：

- 📀 阿里云

```conf
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
trusted-host = mirrors.aliyun.com
```

- 📀 腾讯云

```conf
[global]
index-url = http://mirrors.cloud.tencent.com/pypi/simple
trusted-host = mirrors.cloud.tencent.com
```

- 📀 华为云

```conf
[global]
index-url = https://repo.huaweicloud.com/repository/pypi/simple
trusted-host = repo.huaweicloud.com
```

## 🫣 WSL

TODO

## 📚 参考

- 🔗 https://zhuanlan.zhihu.com/p/99880204
