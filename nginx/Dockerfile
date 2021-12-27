FROM nginx:alpine

LABEL maintainer="Ving <ving@nivin.cn>"

# 安装必要的软件包和依赖包
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories && \
    apk update && \
    apk upgrade && \
    apk --update add logrotate && \
    apk add --no-cache openssl && \
    apk add --no-cache bash && \
    apk add --no-cache curl

# 添加用户组和用户
RUN set -x ; \
    addgroup -g 82 -S www-data ; \
    adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

# 复制日志分片配置
COPY logrotate.conf /etc/logrotate.d/

# 复制nginx配置
COPY nginx.conf /etc/nginx/

# 复制nginx启动脚本并运行
COPY startup.sh /opt/startup.sh

RUN sed -i 's/\r//g' /opt/startup.sh

CMD ["/bin/bash", "/opt/startup.sh"]

EXPOSE 80 443