---
title: 🍎 macOS
toc: content
order: 3
group:
  order: 3
  title: 环境配置
---

# 🍎 在 macOS 上配置深度学习环境


## 💻 GPU

[Pytorch](https://pytorch.org/blog/introducing-accelerated-pytorch-training-on-mac/) & [TensorFlow](https://developer.apple.com/metal/tensorflow-plugin/) 现已支持 Apple Silicon。


<div class="guide-divide"></div>

## 🐍 Python 环境

不同的训练框架和版本可能会需要 Python 版本相对应，不同的项目可能也会有不同的环境需求，推荐使用管理工具，根据需求新建对应的虚拟环境，在需要的时候随时切换。可以选择以下工具：

- ☁️ [Anaconda / Miniconda](https://www.anaconda.com/) <Badge>Intel</Badge>
- 🌥 [Miniforge](https://conda-forge.org/) <Badge>Apple Silicon</Badge> <Badge>Intel</Badge>
- ⛅️ [Mambaforge](https://github.com/conda-forge/miniforge#mambaforge) <Badge>Apple Silicon</Badge> <Badge>Intel</Badge>

<Alert>
🚧<br/>
如果是 <code>Intel</code> 的 Mac，可以选择以上任一工具管理 <code>Python</code> 环境；<br>
如果是 <code>Apple Silicon</code> 的 Mac，由于 <code>Anaconda</code> 暂时还没有适配，推荐优先选择另外两种工具。并且请注意使用支持 <code>Apple Silicon</code> 的 <code>Python</code> <Badge>3.9.1+</Badge>。
</Alert>

<Alert type="error">
🚧<br/>
安装上述工具可以选择 1️⃣ <code>brew</code> 或 2️⃣ 直接安装 的方式。<br>
<br>
如果选择使用 <code>brew</code> 安装，请注意 ⚠️ 当使用 <code>brew upgrade ${NAME}</code> 更新时，会进行覆盖安装，如果 <code>envs_dirs</code> 在安装目录内，已有环境会被清除。推荐配置 <code>.condarc</code> 将环境目录配置到用户目录。 
</Alert>


## Miniforge

- 🌰 选择 brew 安装

在终端使用以下命令安装。

```zsh
brew install miniforge
```

- 🌰 选择直接安装

在 [此链接](https://github.com/conda-forge/miniforge#miniforge3) 选择适合的版本，下载后运行以下命令，再按提示进行安装。

```zsh
cd ${DOWNLOAD_DIR}

chmod +x ./Miniforge3-{Version}-MacOSX-{Architecture}.sh
./Miniforge3-{Version}-MacOSX-{Architecture}.sh
```

## Anaconda

- 🌰 选择 brew 安装

在终端使用以下命令安装。

```zsh
brew install anaconda
```

- 🌰 选择直接安装

推荐在国内镜像源下载，以获得更好的网络体验。推荐选择以下等国内地址：

- 💿 [阿里云](https://developer.aliyun.com/mirror/anaconda)
- 📀 [北京外国语](https://mirrors.bfsu.edu.cn/help/anaconda/)


<div class="guide-divide"></div>

## 💽 配置国内镜像

### Conda

推荐使用 💿 [阿里云](https://developer.aliyun.com/mirror/anaconda)。

在家目录 `/Users/{USER_NAME}` 中新建 `.condarc` 文件，并写入如下内容：

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

### Python

Python 国内镜像众多且速度良好，可以选择任一合适的镜像，以下为部分列表：

在家目录 `/Users/{USER_NAME}` 中新建 `.pip/pip.conf` 文件，并写入如下内容：

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
