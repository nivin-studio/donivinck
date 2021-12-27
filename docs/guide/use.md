# 使用

## 准备
你的本地环境需要安装 [Docker](https://www.docker.com/) 或 [Docker Desktop](https://www.docker.com/products/docker-desktop) 和 [Git](https://git-scm.com/downloads)。

## 安装
克隆本项目到本地
```bash
$ git clone https://github.com/nivin-studio/donivinck.git
```

目录结构
```bash
├── docs                    # 使用文档
├── mongo                   # mogon 服务容器
│   └── Dockerfile          
├── mongo-manage            # mogon web 数据管理服务容器
│   └── Dockerfile
├── mysql                   # mysql 服务容器
│   ├── Dockerfile
│   └── my.cnf              # mysql 配置文件
├── mysql-manage            # mysql web 数据管理服务容器
│   └── Dockerfile
├── nginx                   # nginx 服务容器
│   ├── sites               # 站点配置
│   ├── ssl                 # ssl 证书
│   ├── Dockerfile
│   ├── logrotate.conf      # 日志分片主配置
│   ├── nginx.conf          # nginx 主配置
│   └── startup.sh          # 启动脚本
├── php                     # php 服务容器
│   ├── config              # php 配置
│   ├── supervisord         # 进程守护配置
│   ├── Dockerfile
│   ├── startup.sh          # 启动脚本
│   └── supervisord.conf    # 进程守护主配置
├── redis                   # redis 服务容器
│   ├── Dockerfile
│   └── redis.conf          # redis 配置文件
├── redis-manage            # redis web 数据管理服务容器
│   └── Dockerfile
├── .env                    # docker-compose 配置文件
├── docker-compose.yml      # docker-compose 
├── package.json            # package.json
└── README.md               # README.md
```

确保 Docker 服务已启动运行，使用 docker-compose 来构建环境。根据本地网络环境不同，构建时间也有所影响，一般大概（5分钟左右）。

::: tip 提示
如果构建失败，可以循环往复执行 docker-compose 命令，直至容器构建运行成功！！！
:::

```bash
$ cd docker
$ docker-compose up -d
```