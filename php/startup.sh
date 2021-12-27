#!/bin/bash
# Start supervisord in background
/usr/bin/supervisord -c /etc/supervisord.conf
# Start php-fpm in foreground
php-fpm