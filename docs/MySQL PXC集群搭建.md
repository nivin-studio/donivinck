> PXC 是一套 MySQL 高可用集群解决方案，与传统的基于主从复制模式的集群架构相比 PXC 最突出特点就是解决了诟病已久的数据复制延迟问题，基本上可以达到实时同步。而且节点与节点之间，他们相互的关系是对等的。PXC 最关注的是数据的一致性，对待事物的行为时，要么在所有节点上执行，要么都不执行，它的实现机制决定了它对待一致性的行为非常严格，这也能非常完美的保证 MySQL 集群的数据一致性。

## 获取PXC镜像
```bash
docker pull percona/percona-xtradb-cluster:5.7.21
```
## 修改PXC本地镜像名
```bash
docker tag percona/percona-xtradb-cluster pxc
```
## 创建PXC集群网络
```bash
docker network create --subnet=172.18.0.0/16 pxc_net
```
## 创建PXC备份数据卷（用于热备份数据）
```bash
docker volume create --name pxc_backup
```
## 创建6节点PXC数据卷
```bash
docker volume create --name pxc_v1
docker volume create --name pxc_v2
docker volume create --name pxc_v3
docker volume create --name pxc_v4
docker volume create --name pxc_v5
docker volume create --name pxc_v6
```
## 创建6节点PXC容器
> ❗注意
> 必须等第1个 PXC 容器节点启动成功，用 MySQL 客户端能连接上之后，再去创建其他 PXC 节点。每个 PXC 容器创建之后，因为要执行 PXC 的初始化和加入集群等工作，耐心等待1分钟左右再用客户端连接 MySQL 。

### 创建启动pxc_mysql1节点容器
```bash
docker run -d -p 3001:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456 -v pxc_v1:/var/lib/mysql -v pxc_backup:/data --privileged --name=pxc_mysql1 --net=pxc_net --ip 172.18.0.2 pxc
```
### 创建启动pxc_mysql2节点容器
```bash
docker run -d -p 3002:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456 -e CLUSTER_JOIN=pxc_mysql1 -v pxc_v2:/var/lib/mysql -v pxc_backup:/data --privileged --name=pxc_mysql2 --net=pxc_net --ip 172.18.0.3 pxc
```
### 创建启动pxc_mysql3节点容器
```bash
docker run -d -p 3003:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456 -e CLUSTER_JOIN=pxc_mysql1 -v pxc_v3:/var/lib/mysql -v pxc_backup:/data --privileged --name=pxc_mysql3 --net=pxc_net --ip 172.18.0.4 pxc
```
### 创建启动pxc_mysql4节点容器
```bash
docker run -d -p 3004:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456 -e CLUSTER_JOIN=pxc_mysql1 -v pxc_v4:/var/lib/mysql -v pxc_backup:/data --privileged --name=pxc_mysql4 --net=pxc_net --ip 172.18.0.5 pxc
```
### 创建启动pxc_mysql5节点容器
```bash
docker run -d -p 3005:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456 -e CLUSTER_JOIN=pxc_mysql1 -v pxc_v5:/var/lib/mysql -v pxc_backup:/data --privileged --name=pxc_mysql5 --net=pxc_net --ip 172.18.0.6 pxc
```
### 创建启动pxc_mysql6节点容器
```bash
docker run -d -p 3006:3306 -e MYSQL_ROOT_PASSWORD=abc123456 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=abc123456 -e CLUSTER_JOIN=pxc_mysql1 -v pxc_v6:/var/lib/mysql -v pxc_backup:/data --privileged --name=pxc_mysql6 --net=pxc_net --ip 172.18.0.7 pxc
```


