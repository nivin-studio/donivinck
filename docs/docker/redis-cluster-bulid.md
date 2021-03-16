# Redis Cluster搭建

> Redis Cluster 是一个提供在多个 Redis 节点间共享数据的程序集。
> Redis Cluster 并不支持处理多个 keys 的命令，因为这需要在不同的节点间移动数据，所以达不到像 Redis 那样的性能，在高负载的情况下可能会导致不可预料的错误。
> Redis Cluster 集群通过分区来提供一定程度的可用性，在实际环境中当某个节点宕机或者不可达的情况下继续处理命令。

## 获取Redis镜像
```bash
docker pull nivinivin/redis
```

## 创建redis集群网络
```bash
docker network create --subnet=172.19.0.0/16 redis_net
```

## 创建6节点Redis容器
```bash
docker run -it -d --name redis1 -p 6001:6379 -p 16001:16379 --net=redis_net --ip 172.19.0.2 nivinivin/redis bash
docker run -it -d --name redis2 -p 6002:6379 -p 16002:16379 --net=redis_net --ip 172.19.0.3 nivinivin/redis bash
docker run -it -d --name redis3 -p 6003:6379 -p 16003:16379 --net=redis_net --ip 172.19.0.4 nivinivin/redis bash
docker run -it -d --name redis4 -p 6004:6379 -p 16004:16379 --net=redis_net --ip 172.19.0.5 nivinivin/redis bash
docker run -it -d --name redis5 -p 6005:6379 -p 16005:16379 --net=redis_net --ip 172.19.0.6 nivinivin/redis bash
docker run -it -d --name redis6 -p 6006:6379 -p 16006:16379 --net=redis_net --ip 172.19.0.7 nivinivin/redis bash
```

::: tip 提示
Redis 配置文件里必须要设置 bind 0.0.0.0，这是允许其他IP可以访问当前 Redis 。如果不设置这个参数，就不能组建 Redis 集群。
:::

::: tip 提示
如果6个节点的端口号分别是6001，6002，6003，6004，6005，6006。那么防火墙需要打开这个6个端口号，并且还需要打开16001，16002，16003，16004，16005，16006这6个[集群总线端口](https://redis.io/topics/cluster-tutorial)。
:::

## 启动6节点Redis容器

### 进入redis1节点容器修改配置
```bash
docker exec -it redis1 bash
cd /home/redis
vim redis.conf
# 添加下面三行配置
# cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP
# cluster-announce-port 6001
# cluster-announce-bus-port 16001
redis-server ./redis.conf
```

### 进入redis2节点容器修改配置
```bash
docker exec -it redis2 bash
cd /home/redis
vim redis.conf
#添加下面三行配置
#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP
#cluster-announce-port 6002
#cluster-announce-bus-port 16002
redis-server ./redis.conf
```

### 进入redis3节点容器修改配置
```bash
docker exec -it redis3 bash
cd /home/redis
vim redis.conf
#添加下面三行配置
#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP
#cluster-announce-port 6003
#cluster-announce-bus-port 16003
redis-server ./redis.conf
```

### 进入redis4节点容器修改配置
```bash
docker exec -it redis4 bash
cd /home/redis
vim redis.conf
#添加下面三行配置
#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP
#cluster-announce-port 6004
#cluster-announce-bus-port 16004
redis-server ./redis.conf
```

### 进入redis5节点容器修改配置
```bash
docker exec -it redis5 bash
cd /home/redis
vim redis.conf
#添加下面三行配置
#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP
#cluster-announce-port 6005
#cluster-announce-bus-port 16005
redis-server ./redis.conf
```

### 进入redis6节点容器修改配置
```bash
docker exec -it redis6 bash
cd /home/redis
vim redis.conf
#添加下面三行配置
#cluster-announce-ip XXX.XXX.XXX.XXX  宿主机真实IP
#cluster-announce-port 6006
#cluster-announce-bus-port 16006
redis-server ./redis.conf
```

## 创建集群
```bash
#在redis1节点上执行下面的指令
cd /home/redis
#创建集群(如果是宿主机共享模式，请使用宿主机的真实IP和端口号)
./redis-trib.rb create --replicas 1 172.19.0.2:6379 172.19.0.3:6379 172.19.0.4:6379 172.19.0.5:6379 172.19.0.6:6379 172.19.0.7:6379
```
