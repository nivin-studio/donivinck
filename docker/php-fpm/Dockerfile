FROM php:7.3-fpm

LABEL maintainer="Ving <ving@nivin.cn>"

# 安装必要的软件包和依赖包
USER root
RUN sed -i 's/deb.debian.org/mirrors.aliyun.com/' /etc/apt/sources.list && \
    sed -i 's/security.debian.org/mirrors.aliyun.com/' /etc/apt/sources.list && \
    sed -i 's/security-cdn.debian.org/mirrors.aliyun.com/' /etc/apt/sources.list && \
    apt-get update && \
    apt-get upgrade -y && \
    pecl channel-update pecl.php.net && \
    apt-get install -y --no-install-recommends \
    apt-utils \
    curl \
    libmemcached-dev \
    libz-dev \
    libpq-dev \
    libjpeg-dev \
    libpng-dev \
    libfreetype6-dev \
    libssl-dev \
    libmcrypt-dev \
    libpcre3-dev \
    libzip-dev \
    zip \
    unzip \
    jpegoptim \
    optipng \
    pngquant \
    gifsicle \
    libmagickwand-dev \
    imagemagick \
    gcc \
    make \
    re2c \
    git \
    vim \
    cron \
    supervisor

# 安装PHP基础扩展
USER root
RUN docker-php-ext-configure gd \
    --with-jpeg-dir=/usr/lib \
    --with-freetype-dir=/usr/include/freetype2 && \
    docker-php-ext-install gd && \
    docker-php-ext-configure zip --with-libzip && \
    docker-php-ext-install zip && \
    docker-php-ext-install pgsql && \
    docker-php-ext-install mysqli && \
    docker-php-ext-install pdo_mysql && \
    docker-php-ext-install pcntl && \
    docker-php-ext-install bcmath

# 安装PHP业务扩展
USER root
RUN pecl channel-update pecl.php.net && \
    pecl install -o -f redis && \
    docker-php-ext-enable redis && \
    pecl install taint && \
    docker-php-ext-enable taint && \
    pecl install mongodb && \
    docker-php-ext-enable mongodb && \
    pecl install imagick && \
    docker-php-ext-enable imagick

# 安装phalcon扩展
USER root
ARG PHP_INSTALL_PHALCON=false
RUN if [ ${PHP_INSTALL_PHALCON} = true ]; then \
    curl -L -o /tmp/cphalcon.zip https://github.com/phalcon/cphalcon/archive/v3.4.4.zip && \
    unzip -d /tmp/ /tmp/cphalcon.zip && \
    cd /tmp/cphalcon-3.4.4/build && \
    ./install && \
    docker-php-ext-enable phalcon \
    ;fi

# 安装composer
USER root
RUN curl -s http://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer && \
    composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

# 清理垃圾
USER root
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    rm /var/log/lastlog /var/log/faillog

# 设置用户组和用户
RUN groupmod -o -g 1000 www-data && \
    usermod -o -u 1000 -g www-data www-data

# 设置工作目录
WORKDIR /var/www

# 复制supervisord配置文件
COPY supervisord.conf /etc/supervisord.conf
# 服务启动文件
COPY startup.sh /opt/startup.sh

RUN sed -i 's/\r//g' /opt/startup.sh

CMD ["/bin/bash", "/opt/startup.sh"]

EXPOSE 9000