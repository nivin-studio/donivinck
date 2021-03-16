# Docker命令

## 镜像仓库操作

### docker login
```bash
#登录docker镜像仓库
语法：docker login [OPTIONS] [SERVER]
实列：docker login -u 用户名 -p 密码
```

### docker search
```bash
#在镜像仓库中搜索镜像
语法：docker search [OPTIONS] TERM
实列：docker search redis
```

### docker pull
```bash
#从镜像仓库中拉取或者更新指定镜像
语法：docker pull [OPTIONS] NAME[:TAG|@DIGEST]
实列：docker pull redis
```

### docker push
```bash
#将本地的镜像上传到镜像仓库
语法：docker push [OPTIONS] NAME[:TAG]
实列：docker push myRedis:v1
```

## 本地镜像管理

### docker images
```bash
#镜像列表
语法：docker images [OPTIONS] [REPOSITORY[:TAG]]
实列：docker images
```

### docker rmi
```bash
#删除一个或多个镜像
语法：docker rmi [OPTIONS] IMAGE [IMAGE...]
实列：docker rmi redis
```

### docker tag
```bash
#给镜像创建新的标记
语法：docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
实列：docker tag redis:4.0 nivin/redis:v4
```

### docker build
```bash
#通过Dockerfile文件构建一个镜像
语法：docker build [OPTIONS] PATH | URL | -
实列：docker build -t nivin/redis:v4 . 
```

### docker history
```bash
#显示镜像的创建过程
语法：docker history [OPTIONS] IMAGE
实列：docker history nivin/redis:v4
```

### docker save
```bash
#将指定镜像保存成 tar 归档文件
语法：docker save [OPTIONS] IMAGE [IMAGE...]
实列：docker save -o redis_v4.tar nivin/redis:v4
```

### docker import
```bash
#从归档文件中创建镜像
语法：docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
实列：docker import redis_v4.tar nivin/redis:v4
```

## 容器生命周期

### docker run
```bash
#创建一个新的容器并运行一个命令
语法：docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
实列：docker run --name redis_container -p 80:80 -v /data:/data -d redis:4.0
```

### docker start
```bash
#启动一个或多个已经被停止的容器
语法：docker start [OPTIONS] CONTAINER [CONTAINER...]
实列：docker start redis_container
```

### docker stop
```bash
#停止一个或多个正在运行的容器
语法：docker stop [OPTIONS] CONTAINER [CONTAINER...]
实列：docker stop redis_container
```

### docker restart
```bash
#重新启动一个或多个容器
语法：docker restart [OPTIONS] CONTAINER [CONTAINER...]
实列：docker restart redis_container
```

### docker kill
```bash
#杀死一个或多个正在运行的容器
语法：docker kill [OPTIONS] CONTAINER [CONTAINER...]
实列：docker kill redis_container
```

### docker rm
```bash
#删除一个或多个容器
语法：docker rm [OPTIONS] CONTAINER [CONTAINER...]
实列：docker rm redis_container
```

### docker pause
```bash
#暂停一个或多个容器中的所有进程
语法：docker pause CONTAINER [CONTAINER...]
实列：docker pause redis_container
```

### docker unpause
```bash
#恢复一个或多个容器中的所有进程
语法：docker unpause CONTAINER [CONTAINER...]
实列：docker unpause redis_container
```

### docker create
```bash
#创建容器
语法：docker create [OPTIONS] IMAGE [COMMAND] [ARG...]
实列：docker create -t -i redis_container bash
```

### docker exec
```bash
#在运行的容器中执行命令
语法：docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
实列：docker exec -it redis_container bash
```

## 容器运维操作

### docker ps
```bash
#容器列表
语法：docker ps [OPTIONS]
实列：docker ps -a
```

### docker inspect
```bash
#获取容器/镜像的元数据
语法：docker inspect [OPTIONS] NAME|ID [NAME|ID...]
实列：docker inspect redis_container
```

### docker top
```bash
#显示容器的运行进程
语法：docker top CONTAINER [ps OPTIONS]
实列：docker top redis_container
```

### docker attach
```bash
#连接到正在运行中的容器
语法：docker attach [OPTIONS] CONTAINER
实列：docker attach redis_container
```

### docker events
```bash
#从服务器获取实时事件
语法：docker events [OPTIONS]
实列：docker events
```

### docker logs
```bash
#获取容器的日志
语法：docker logs [OPTIONS] CONTAINER
实列：docker logs -f redis_container
```

### docker wait
```bash
#阻塞运行直到容器停止，然后打印出它的退出代码
语法：docker wait CONTAINER [CONTAINER...]
实列：docker wait redis_container
```

### docker export
```bash
#将容器的文件系统导出为tar存档
语法：docker export [OPTIONS] CONTAINER
实列：docker export redis_container > redis_container.tar
```

### docker port
```bash
#列出容器的端口映射
语法：docker port
实列：docker port redis_container
```

### docker update
```bash
#更新一个或多个容器的配置
语法：docker update [OPTIONS] CONTAINER [CONTAINER...]
实列：docker update --cpu-shares 512 redis_container
```

## 容器数据卷

### docker volume create
```bash
#创建数据卷
语法：docker volume create [OPTIONS] [VOLUME]
实列：docker volume create redis_volume
```

### docker volume inspect
```bash
#显示一个或多个数据卷的详细信息
语法：docker volume inspect [OPTIONS] VOLUME [VOLUME...]
实列：docker volume inspect redis_volume
```

### docker volume ls
```bash
#数据卷列表
语法：docker volume ls [OPTIONS]
实列：docker volume ls
```

### docker volume prune
```bash
#删除所有未使用的本地数据卷
语法：docker volume prune [OPTIONS]
实列：docker volume prune
```

### docker volume rm
```bash
#删除一个或多个数据卷
语法：docker volume rm [OPTIONS] VOLUME [VOLUME...]
实列：docker volume rm redis_volume
```

## 容器网络

### docker network create
```bash
#创建一个网络
语法：docker network create [OPTIONS] NETWORK
实列：docker network create --driver=bridge --subnet=192.168.0.0/16 redis_network
```

### docker network connect
```bash
#连接容器到某个网络中
语法：docker network connect [OPTIONS] NETWORK CONTAINER
实列：docker network connect redis_network redis_container
```

### docker network disconnect
```bash
#断开容器与某个网络的连接
语法：docker network disconnect [OPTIONS] NETWORK CONTAINER
实列：docker network disconnect redis_network redis_container
```

### docker network inspect
```bash
#显示一个或多个网络的详细信息
语法：docker network inspect [OPTIONS] NETWORK [NETWORK...]
实列：docker network inspect redis_network
```

### docker network ls
```bash
#网络列表
语法：docker network ls [OPTIONS]
实列：docker network ls
```

### docker network prune
```bash
#删除所有未使用的网络
语法：docker network prune [OPTIONS]
实列：docker network prune
```

### docker network rm
```bash
#删除一个或多个网络
语法：docker network rm NETWORK [NETWORK...]
实列：docker network rm redis_network
```

## 其他

### docker info
```bash
#显示 Docker 系统信息，包括镜像和容器数
语法：docker info [OPTIONS]
实列：docker info
```

### docker version
```bash
#显示 Docker 版本信息
语法：docker version [OPTIONS]
实列：docker version
```
