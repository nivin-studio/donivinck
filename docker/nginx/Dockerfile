FROM nginx:alpine

MAINTAINER Ving "ving@nivin.cn"

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/' /etc/apk/repositories && \
	apk update && \
    apk upgrade && \
    apk --update add logrotate && \
    apk add --no-cache openssl && \
    apk add --no-cache bash

RUN set -x ; \
    addgroup -g 82 -S www-data ; \
    adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

COPY nginx.conf /etc/nginx/
COPY logrotate/nginx /etc/logrotate.d/
COPY startup.sh /opt/startup.sh

RUN sed -i 's/\r//g' /opt/startup.sh

CMD ["/bin/bash", "/opt/startup.sh"]

EXPOSE 80 443