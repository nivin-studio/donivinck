# Lravel项目案例
> 本项目案例将介绍如果使用 donivinck 来运行 Laravel 项目

## 创建项目
进入php容器中，通过 Composer 来创建 Laravel6.0 项目
```bash
$ docker ps -a # 查看容器列表
CONTAINER ID   IMAGE                COMMAND                  CREATED      STATUS       PORTS                                      NAMES
1bc569241394   docker_mongo-webui   "tini -- /docker-ent…"   7 days ago   Up 3 hours   0.0.0.0:2000->8081/tcp                     docker_mongo-webui_1
a7b2e7f22c35   docker_mysql-webui   "/docker-entrypoint.…"   7 days ago   Up 3 hours   0.0.0.0:1000->80/tcp                       docker_mysql-webui_1
7ae8cc125ca1   docker_nginx         "/docker-entrypoint.…"   7 days ago   Up 3 hours   0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   docker_nginx_1
aeabb3d56dbf   docker_redis-webui   "tini -- php -S 0.0.…"   7 days ago   Up 3 hours   0.0.0.0:3000->80/tcp                       docker_redis-webui_1
bbe09b498654   docker_php           "docker-php-entrypoi…"   7 days ago   Up 3 hours   9000/tcp                                   docker_php_1
700d10c5f15a   docker_mongo         "docker-entrypoint.s…"   7 days ago   Up 3 hours   0.0.0.0:27017->27017/tcp                   docker_mongo_1
671c586ac41c   docker_redis         "docker-entrypoint.s…"   7 days ago   Up 3 hours   0.0.0.0:6379->6379/tcp                     docker_redis_1
c567b7934e91   docker_mysql         "docker-entrypoint.s…"   7 days ago   Up 3 hours   0.0.0.0:3306->3306/tcp, 33060/tcp          docker_mysql_1

$ docker exec -it docker_php_1 bash # 进入名称为 docker_php_1 的 php 服务容器的bash
root@bbe09b498654:/var/www#

# 默认情况进入 php 服务容器的 /var/www 目录下，以下命令将在容器中执行。
$ composer create-project --prefer-dist laravel/laravel test "6.*"
# 进入 test 项目
$ cd test
# 修改 storage 和 bootstrap/cache 目录权限
$ chmod -R 777 storage bootstrap/cache
# 创建 Laravel 项目密钥
$ php artisan key:generate
```