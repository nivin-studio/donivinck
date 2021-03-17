module.exports = {
    base: '/donivinck/',
    title: 'donivinck',
    description: '一个基于 Docker 的 PHP 运行环境，支持 Mysql，Redis，Mongo 等服务。支持 Swoole 协程框架，Logrotate 日志分片，Supervisord 进程守护等功能。',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: '文档', link: '/guide/use' },
            { text: 'Docker Web服务搭建', link: '/docker/docker-command' },
            { text: 'Github', link: 'https://github.com/nivin-studio/donivinck' },
        ],
        sidebar: {
            '/guide/': [
                'use',
            ],
            '/docker/': [
                'docker-command',
                'dockerfile-command',
                'msql-cluster-bulid',
                'redis-cluster-bulid',
            ],
        }
    }
}