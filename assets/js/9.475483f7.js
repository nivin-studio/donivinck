(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{430:function(s,t,a){"use strict";a.r(t);var e=a(65),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"dockerfile介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile介绍"}},[s._v("#")]),s._v(" Dockerfile介绍")]),s._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("Dockerfile 是一个用来构建镜像的文本文件，其中包含了一条条构建镜像所需的指令和说明。使用docker build，用户可以创建一个连续执行多个指令命令的镜像。")]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("在一个目录下新建一个名为 Dockerfile 文件，编写所需的指令命令。")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')])]),s._v("\n")])])]),a("p",[s._v("使用  docker build  命令用Dockerfile文件构建一个镜像。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("结尾的 . 是必须的！！！")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t nivinivin/alpine:v1 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("p",[s._v("使用  docker run  命令用刚刚构建好的镜像创建并启动一个容器，就可以看见输出的“Hello World!”。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run nivinivin/alpine:v1\n")])])]),a("h2",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[s._v("#")]),s._v(" 指令")]),s._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[s._v("#")]),s._v(" FROM")]),s._v(" "),a("p",[s._v("初始化新的构建阶段，并为后续指令设置基础镜像。因此，有效的Dockerfile必须以FROM指令开头。尽可能使用官方镜像作为基础镜像，推荐使用 "),a("a",{attrs:{href:"https://hub.docker.com/_/alpine/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Alpine"),a("OutboundLink")],1),s._v(" 镜像，因为它安全，轻量级，体积很小（目前小于5MB），同时仍然是一个完整的Linux发行版。")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" [--platform=<platform>] <image> [AS <name>]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" [--platform=<platform>] <image>[:<tag>] [AS <name>]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" [--platform=<platform>] <image>[@<digest>] [AS <name>]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine:3.12")]),s._v("\n")])])]),a("h3",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" RUN")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" <command>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"executable"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param1"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param2"')]),s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#一行写不下时，使用‘\\’进行换行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update && apt-get install -y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n\t\tapt-utils "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    git "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    vim "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && rm -rf /var/lib/apt/lists/*")]),s._v("\n   \n "),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo hello"')]),s._v("]")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#等价于 ")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" /bin/bash -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'echo hello'")])]),s._v("\n")])])]),a("h3",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[s._v("#")]),s._v(" CMD")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" command param1 param2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param1"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param2"')]),s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"executable"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param1"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param2"')]),s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" php -m")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"php"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-m"')]),s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[s._v("#")]),s._v(" LABEL")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" <key>=<value> <key>=<value> <key>=<value> ...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" maintainer="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ving <ving@nivin.cn>"')])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" version="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" description="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This text illustrates"')])]),s._v("\n")])])]),a("h3",{attrs:{id:"expose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[s._v("#")]),s._v(" EXPOSE")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" <port> [<port>/<protocol>...]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[s._v("#")]),s._v(" ENV")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" <key>=<value> ...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[s._v("#")]),s._v(" ADD")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" [--chown=<user>:<group>] <src>... <dest>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" [--chown=<user>:<group>] ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<src>"')]),s._v(",... "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<dest>"')]),s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[s._v("#")]),s._v(" COPY")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" [--chown=<user>:<group>] <src>... <dest>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" [--chown=<user>:<group>] ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<src>"')]),s._v(",... "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<dest>"')]),s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[s._v("#")]),s._v(" ENTRYPOINT")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"executable"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param1"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param2"')]),s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" command param1 param2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[s._v("#")]),s._v(" VOLUME")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" <path>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[s._v("#")]),s._v(" USER")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <user>[:<group>]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <UID>[:<GID>]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"workdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[s._v("#")]),s._v(" WORKDIR")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" <path>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"arg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arg"}},[s._v("#")]),s._v(" ARG")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ARG")]),s._v(" <name>[=<default value>]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"onbuild"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onbuild"}},[s._v("#")]),s._v(" ONBUILD")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ONBUILD")]),s._v(" <INSTRUCTION>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"healthcheck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck"}},[s._v("#")]),s._v(" HEALTHCHECK")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HEALTHCHECK")]),s._v(" [OPTIONS] CMD command")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HEALTHCHECK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NONE")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])]),a("h3",{attrs:{id:"shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[s._v("#")]),s._v(" SHELL")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#语法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHELL")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"executable"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parameters"')]),s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#实例")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);