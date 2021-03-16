# Dockerfile介绍

## 介绍
Dockerfile 是一个用来构建镜像的文本文件，其中包含了一条条构建镜像所需的指令和说明。使用docker build，用户可以创建一个连续执行多个指令命令的镜像。

## 使用
在一个目录下新建一个名为 Dockerfile 文件，编写所需的指令命令。
```dockerfile
FROM alpine
CMD echo "Hello World!"
```

使用  docker build  命令用Dockerfile文件构建一个镜像。

::: tip 提示
结尾的 . 是必须的！！！
:::

```bash
 docker build -t nivinivin/alpine:v1 .
```

使用  docker run  命令用刚刚构建好的镜像创建并启动一个容器，就可以看见输出的“Hello World!”。
```bash
docker run nivinivin/alpine:v1
```

## 指令

### FROM
初始化新的构建阶段，并为后续指令设置基础镜像。因此，有效的Dockerfile必须以FROM指令开头。尽可能使用官方镜像作为基础镜像，推荐使用 [Alpine](https://hub.docker.com/_/alpine/) 镜像，因为它安全，轻量级，体积很小（目前小于5MB），同时仍然是一个完整的Linux发行版。
```dockerfile
#语法
FROM [--platform=<platform>] <image> [AS <name>]

FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]

FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]

#实例
FROM alpine

FROM alpine:3.12
```

### RUN
```dockerfile
#语法
RUN <command>

RUN ["executable", "param1", "param2"]

#实例
#一行写不下时，使用‘\’进行换行
RUN apt-get update && apt-get install -y \
		apt-utils \
    git \
    vim \
    && rm -rf /var/lib/apt/lists/*
   
 RUN ["/bin/bash", "-c", "echo hello"]
 #等价于 
 RUN /bin/bash -c 'echo hello'
```

### CMD
```dockerfile
#语法
CMD command param1 param2

CMD ["param1","param2"]

CMD ["executable","param1","param2"]

#实例
CMD php -m

CMD ["php", "-m"]
```

### LABEL
```dockerfile
#语法
LABEL <key>=<value> <key>=<value> <key>=<value> ...

#实例
LABEL maintainer="Ving <ving@nivin.cn>"
LABEL version="1.0"
LABEL description="This text illustrates"
```

### EXPOSE
```dockerfile
#语法
EXPOSE <port> [<port>/<protocol>...]

#实例
```

### ENV
```dockerfile
#语法
ENV <key>=<value> ...

#实例
```

### ADD
```dockerfile
#语法
ADD [--chown=<user>:<group>] <src>... <dest>

ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]

#实例
```

### COPY
```dockerfile
#语法
COPY [--chown=<user>:<group>] <src>... <dest>

COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]

#实例
```

### ENTRYPOINT
```dockerfile
#语法
ENTRYPOINT ["executable", "param1", "param2"]

ENTRYPOINT command param1 param2

#实例
```

### VOLUME
```dockerfile
#语法
VOLUME <path>

VOLUME ["path"]

#实例
```

### USER
```dockerfile
#语法
USER <user>[:<group>]

USER <UID>[:<GID>]

#实例
```

### WORKDIR
```dockerfile
#语法
WORKDIR <path>

#实例
```

### ARG
```dockerfile
#语法
ARG <name>[=<default value>]

#实例
```

### ONBUILD
```dockerfile
#语法
ONBUILD <INSTRUCTION>

#实例
```

### HEALTHCHECK
```dockerfile
#语法
HEALTHCHECK [OPTIONS] CMD command

HEALTHCHECK NONE

#实例
```

### SHELL
```dockerfile
#语法
SHELL ["executable", "parameters"]

#实例
```


