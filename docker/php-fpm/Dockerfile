FROM php:7.2-fpm

MAINTAINER Ving "ving@nivin.cn"

USER root
RUN apt-get update && \
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
      re2c

USER root
RUN docker-php-ext-configure gd \
      --with-jpeg-dir=/usr/lib \
      --with-freetype-dir=/usr/include/freetype2 && \
    docker-php-ext-install gd && \
    docker-php-ext-configure zip --with-libzip && \
    docker-php-ext-install zip && \
    docker-php-ext-install pgsql && \
    docker-php-ext-install mysqli && \
    docker-php-ext-install pdo_mysql 

USER root
RUN pecl install -o -f redis && \
    docker-php-ext-enable redis && \
    pecl install taint && \
    docker-php-ext-enable taint && \
    pecl install mongodb && \
    docker-php-ext-enable mongodb && \
    pecl install imagick && \
    docker-php-ext-enable imagick

USER root
RUN curl -L -o /tmp/cphalcon.zip https://github.com/phalcon/cphalcon/archive/v3.4.4.zip && \
    unzip -d /tmp/ /tmp/cphalcon.zip && \
    cd /tmp/cphalcon-3.4.4/build && \
    ./install && \
    docker-php-ext-enable phalcon

USER root
RUN curl -s http://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer && \
    composer config -g repo.packagist composer https://packagist.phpcomposer.com

USER root
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    rm /var/log/lastlog /var/log/faillog

RUN usermod -u 1000 www-data

WORKDIR /var/www

CMD ["php-fpm"]

EXPOSE 9000