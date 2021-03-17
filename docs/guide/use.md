# 使用

## 准备
你的本地环境需要安装Docker 或 Docker Desktop 和 Git。

## 安装
克隆本项目到本地
```bash
$ git clone https://github.com/nivin-studio/donivinck.git
```

目录结构
```bash
├── code                        # 项目代码
│   └── app                     # 默认项目
├── conf                        # 配置文件夹
│   ├── logrotate               # 日志分片配置
│   ├── php                     # php配置
│   ├── sites                   # 站点配置
│   ├── ssl                     # ssl证书
│   └── supervisord             # 进程守护配置
├── data                        # 容器数据文件映射目录
├── docker                      # 服务容器Dockerfile
│   ├── mongo                   # mogon服务容器
│   │   └── Dockerfile          
│   ├── mongo-webui             # mogon web数据管理服务容器
│   │   └── Dockerfile
│   ├── mysql                   # mysql服务容器
│   │   └── Dockerfile
│   ├── mysql-webui             # mysql web数据管理服务容器
│   │   └── Dockerfile
│   ├── nginx                   # nginx服务容器
│   │   ├── Dockerfile
│   │   ├── logrotate.conf      # 日志分片主配置
│   │   ├── nginx.conf          # nginx主配置
│   │   └── startup.sh          # 启动脚本
│   ├── php                     # php服务容器
│   │   ├── Dockerfile
│   │   ├── startup.sh          # 启动脚本
│   │   └── supervisord.conf    # 进程守护主配置
│   ├── redis                   # redis服务容器
│   │   └── Dockerfile
│   ├── redis-webui             # redis web服务容器
│   │   └── Dockerfile
│   ├── .env                    # docker-compose 配置文件
│   └── docker-compose.yml      # docker-compose 
├── docs                        # 使用文档
├── logs                        # 容器相关日志文件映射目录
├── package.json                # package.json
└── README.md                   # README.md
```

确保 Docker 服务已启动运行，使用 docker-compose 来构建环境。根据本地网络环境不同，构建时间也有所影响，一般大概（5分钟左右）。

::: tip 提示
如果构建失败，可以循环往复执行 docker-compose 命令，直至容器构建运行成功！！！
:::

```bash
$ cd docker
$ docker-compose up -d
```

## 运行
容器全部启动运行成功，访问如下地址。

### 项目访问
    地址：http://127.0.0.1      # 默认访问项目/code/app


### Mysql数据管理
    地址：http://localhost:1000/
    用户：root
    密码：123456

### Mongo数据管理
    地址：http://localhost:2000/
    用户：root
    密码：123456

### Redis数据管理
    地址：http://localhost:3000/
    用户：root
    密码：123456