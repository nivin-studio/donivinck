(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{431:function(a,s,t){"use strict";t.r(s);var e=t(65),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-pxc集群搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-pxc集群搭建"}},[a._v("#")]),a._v(" MySQL PXC集群搭建")]),a._v(" "),t("blockquote",[t("p",[a._v("PXC 是一套 MySQL 高可用集群解决方案，与传统的基于主从复制模式的集群架构相比 PXC 最突出特点就是解决了诟病已久的数据复制延迟问题，基本上可以达到实时同步。而且节点与节点之间，他们相互的关系是对等的。PXC 最关注的是数据的一致性，对待事物的行为时，要么在所有节点上执行，要么都不执行，它的实现机制决定了它对待一致性的行为非常严格，这也能非常完美的保证 MySQL 集群的数据一致性。")])]),a._v(" "),t("h2",{attrs:{id:"获取pxc镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取pxc镜像"}},[a._v("#")]),a._v(" 获取PXC镜像")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull percona/percona-xtradb-cluster:5.7.21\n")])])]),t("h2",{attrs:{id:"修改pxc本地镜像名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改pxc本地镜像名"}},[a._v("#")]),a._v(" 修改PXC本地镜像名")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" tag percona/percona-xtradb-cluster pxc\n")])])]),t("h2",{attrs:{id:"创建pxc集群网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建pxc集群网络"}},[a._v("#")]),a._v(" 创建PXC集群网络")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" network create --subnet"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.18")]),a._v(".0.0/16 pxc_net\n")])])]),t("h2",{attrs:{id:"创建pxc备份数据卷-用于热备份数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建pxc备份数据卷-用于热备份数据"}},[a._v("#")]),a._v(" 创建PXC备份数据卷（用于热备份数据）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create --name pxc_backup\n")])])]),t("h2",{attrs:{id:"创建6节点pxc数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建6节点pxc数据卷"}},[a._v("#")]),a._v(" 创建6节点PXC数据卷")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create --name pxc_v1\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create --name pxc_v2\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create --name pxc_v3\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create --name pxc_v4\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create --name pxc_v5\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create --name pxc_v6\n")])])]),t("h2",{attrs:{id:"创建6节点pxc容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建6节点pxc容器"}},[a._v("#")]),a._v(" 创建6节点PXC容器")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),t("p",[a._v("必须等第1个 PXC 容器节点启动成功，用 MySQL 客户端能连接上之后，再去创建其他 PXC 节点。每个 PXC 容器创建之后，因为要执行 PXC 的初始化和加入集群等工作，耐心等待1分钟左右再用客户端连接 MySQL 。")])]),a._v(" "),t("h3",{attrs:{id:"创建启动pxc-mysql1节点容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建启动pxc-mysql1节点容器"}},[a._v("#")]),a._v(" 创建启动pxc_mysql1节点容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3001")]),a._v(":3306 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PXC -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("XTRABACKUP_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -v pxc_v1:/var/lib/mysql -v pxc_backup:/data --privileged --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql1 --net"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_net --ip "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.18")]),a._v(".0.2 pxc\n")])])]),t("h3",{attrs:{id:"创建启动pxc-mysql2节点容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建启动pxc-mysql2节点容器"}},[a._v("#")]),a._v(" 创建启动pxc_mysql2节点容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3002")]),a._v(":3306 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PXC -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("XTRABACKUP_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_JOIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql1 -v pxc_v2:/var/lib/mysql -v pxc_backup:/data --privileged --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql2 --net"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_net --ip "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.18")]),a._v(".0.3 pxc\n")])])]),t("h3",{attrs:{id:"创建启动pxc-mysql3节点容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建启动pxc-mysql3节点容器"}},[a._v("#")]),a._v(" 创建启动pxc_mysql3节点容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3003")]),a._v(":3306 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PXC -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("XTRABACKUP_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_JOIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql1 -v pxc_v3:/var/lib/mysql -v pxc_backup:/data --privileged --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql3 --net"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_net --ip "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.18")]),a._v(".0.4 pxc\n")])])]),t("h3",{attrs:{id:"创建启动pxc-mysql4节点容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建启动pxc-mysql4节点容器"}},[a._v("#")]),a._v(" 创建启动pxc_mysql4节点容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3004")]),a._v(":3306 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PXC -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("XTRABACKUP_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_JOIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql1 -v pxc_v4:/var/lib/mysql -v pxc_backup:/data --privileged --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql4 --net"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_net --ip "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.18")]),a._v(".0.5 pxc\n")])])]),t("h3",{attrs:{id:"创建启动pxc-mysql5节点容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建启动pxc-mysql5节点容器"}},[a._v("#")]),a._v(" 创建启动pxc_mysql5节点容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3005")]),a._v(":3306 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PXC -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("XTRABACKUP_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_JOIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql1 -v pxc_v5:/var/lib/mysql -v pxc_backup:/data --privileged --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql5 --net"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_net --ip "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.18")]),a._v(".0.6 pxc\n")])])]),t("h3",{attrs:{id:"创建启动pxc-mysql6节点容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建启动pxc-mysql6节点容器"}},[a._v("#")]),a._v(" 创建启动pxc_mysql6节点容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3006")]),a._v(":3306 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PXC -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("XTRABACKUP_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("abc123456 -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_JOIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql1 -v pxc_v6:/var/lib/mysql -v pxc_backup:/data --privileged --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_mysql6 --net"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("pxc_net --ip "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.18")]),a._v(".0.7 pxc\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);