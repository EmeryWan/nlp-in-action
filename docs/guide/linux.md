---
title: 🐧 Linux
toc: content
order: 2
group:
  order: 2
  title: 环境配置
---

# 🐧 在 Linux 上配置深度学习环境

<Alert type="info">
🙋‍♂️<br>
推荐首选 <code>Ubuntu</code> 作为深度学习的 <code>Linux</code> 系统。<code>Ubuntu</code> 不仅易用，并且具备各个深度学习框架的官方支持，在网络上还具有大量的教程。<br>
<br>
当然，如果你有其他发行版的使用经验，可以选择惯用的 <code>Linux</code> 发行版。
</Alert>

<Alert>
🙋‍♂️<br>
以下内容，都基于 <code>Ubuntu</code> 系统。
</Alert>

## 💻 Nvidia GPU

### 🌱 驱动

首先，请确保在系统中安装了英伟达显卡驱动，可以使用 `nvidia-msi` 命令查看显卡对应信息。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/guide/linux/nvidia-msi.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

如果没有安装，推荐使用系统自带软件 `软件和更新` 安装显卡驱动。打开应用后，点击 `附加驱动` 选项，会对所有可选的附加驱动进行搜索。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/guide/linux/nvidia-install.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

其中，`Nouveau` 为英伟达显卡开源驱动（默认安装），选择需要的 `NVIDIA drive` 驱动选项，点击 `应用更改`，等待进度条结束后，重启电脑，即完成了显卡驱动的安装。

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
  const path = '/img/guide/linux/cuda.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

🌰 在这里的显卡驱动版本为 `470.103.01`，根据对应表可知，最高可选的 CUDA Toolkit 的版本号为 `CUDA 11.4 Update 4`。

之后，可在官网 [该页面](https://developer.nvidia.com/cuda-toolkit-archive) 中，选择对应的 CUDA Toolkit。

可根据当前系统环境，选择对应的下载选项（推荐下载 `.drunfile`，`.deb` 会覆盖系统安装的显卡驱动）：

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/guide/linux/cuda-platform.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

下载完成后，使用以下命令进行安装：

```sh
cd ${DOWNLOAD_DIR}

chmod +x ./cuda_{Version}_linux.run
sudo sh ./cuda_{Version}_linux.run
```

<Alert>
🚧<br>
注意：在安装过程中，请取消勾选安装驱动选项。
</Alert>

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/guide/linux/cuda-install.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

配置环境变量：

```sh

```

### 🪴 cuDNN

你可以在官网 [此链接](https://developer.nvidia.com/rdp/cudnn-download) 下载 CUDNN，需要注册开发者账号，可能还需要一个“良好的网络环境”。

选择与 CUDA 相对应用的 cuDNN，推荐下载压缩包格式。

```jsx
/**
 * inline: true
 */
import React from 'react';
import { Image } from 'antd';
import { trueImgSrc } from 'nlp-in-action/utils';

export default () => {
  const path = '/img/guide/linux/cudnn.png';
  const truePath = trueImgSrc(path);
  return <Image src={truePath} className="ant-img" />;
};
```

下载完成后，解压文件夹，并根据以下命令复制解压后文件夹中的 `lib64` `include` 文件夹：

```sh
tar -xzvf cudnn-linux-{Version}.tar.gz

sudo cp cudnn-linux-{Version}/lib64/* /usr/local/cuda/lib64
sudo cp cudnn-linux-{Version}/include/* /usr/local/cuda/include
```

复制完成后，可以通过以下命令查看 cuDNN 版本信息：

```sh
cat /usr/local/cuda-10.1/include/cudnn.h | grep CUDNN_MAJOR -A 2
```

## 🐍 Python 环境

<Alert type="error">
🚧<br>
在所有 <code>Linux</code> 桌面环境中，通常都会预装 <code>Python</code> 环境。🌰 例如，在 <code>Ubuntu 16.04</code> 中，预装了 <code>Python 2.7</code> 和 <code>Python 3.5</code>。
<br>
并且，系统中有大量的的脚本文件都基于 <code>Python</code> 编写，更改系统默认 <code>Python</code> 版本，可能会造成系统运行问题。<br>
<br>
🌰 假设，当前正在使用 <code>Ubuntu 16.04</code>，为了使用 <code>Python 3.8</code>，进行了直接安装，并替换了默认 <code>Python</code> 版本，由于 <code>Python</code> 不同版本间部分 API 的调整和一些兼容性问题，会导致部分命令无法运行。🌰 例如，进行如上操作后系统自带的 <code>Terminal</code> 桌面应用无法打开（由于 API 调整，无法运行打开应用的脚本）。<br>
<br>
<span style="color: red">强烈建议非必要原因，不要使用系统自带的 <code>Python</code> 环境，而是使用工具创建虚拟环境。</span>
</Alert>

不同的训练框架和版本可能会需要 Python 版本相对应，不同的项目可能也会有不同的环境需求，推荐使用管理工具，根据需求新建对应的虚拟环境，在需要的时候随时切换。可以选择以下工具：

- ☁️ [Anaconda / Miniconda](https://www.anaconda.com/)
- 🌥 [Miniforge](https://conda-forge.org/)
- ⛅️ [Mambaforge](https://github.com/conda-forge/miniforge#mambaforge)

## 🏖 Miniforge

在 [此链接](https://github.com/conda-forge/miniforge#miniforge3) 选择适合的版本，下载后运行以下命令，再按提示进行安装。

```sh
cd ${DOWNLOAD_DIR}

chmod +x ./Miniforge3-{Version}-MacOSX-{Architecture}.sh
./Miniforge3-{Version}-MacOSX-{Architecture}.sh
```

## 🏝 Anaconda

推荐在国内镜像源下载，以获得更好的网络体验。推荐选择以下等国内地址：

- 💿 [阿里云](https://developer.aliyun.com/mirror/anaconda)
- 📀 [北京外国语](https://mirrors.bfsu.edu.cn/help/anaconda/)

下载完成后运行以下命令，再按提示进行安装。

```sh
cd ${DOWNLOAD_DIR}

chmod +x ./Anaconda3-{Version}-Linux-{Architecture}.sh
./Anaconda3-{Version}-Linux-{Architecture}.sh
```

## 💽 配置国内镜像

### ⚾️ Conda

推荐使用 💿 [阿里云](https://developer.aliyun.com/mirror/anaconda)。

在家目录 `/home/{USER_NAME}` 中新建 `.condarc` 文件，并写入如下内容：

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

### 🥎 Python

Python 国内镜像众多且速度良好，可以选择任一合适的镜像，以下为部分列表：

在家目录 `/home/{USER_NAME}` 中新建 `.pip/pip.conf` 文件，并写入如下内容：

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

## 📚 参考

- 🔗 https://zhuanlan.zhihu.com/p/336429888
