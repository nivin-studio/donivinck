(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{362:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("Dockerfile 是一个用来构建镜像的文本文件，其中包含了一条条构建镜像所需的指令和说明。使用docker build，用户可以创建一个连续执行多个指令命令的镜像。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("在一个目录下新建一个名为 Dockerfile 文件，编写所需的指令命令。")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" alpine\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v("\n")])])]),a("p",[t._v("使用  docker build  命令用Dockerfile文件构建一个镜像。")]),t._v(" "),a("blockquote",[a("p",[t._v("❗注意\n结尾的 . 是必须的！！！")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" docker build -t nivinivin/alpine:v1 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("使用  docker run  命令用刚刚构建好的镜像创建并启动一个容器，就可以看见输出的“Hello World!”。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run nivinivin/alpine:v1\n")])])]),a("h2",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" FROM")]),t._v(" "),a("p",[t._v("初始化新的构建阶段，并为后续指令设置基础镜像。因此，有效的Dockerfile必须以FROM指令开头。尽可能使用官方镜像作为基础镜像，推荐使用 "),a("a",{attrs:{href:"https://hub.docker.com/_/alpine/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alpine"),a("OutboundLink")],1),t._v(" 镜像，因为它安全，轻量级，体积很小（目前小于5MB），同时仍然是一个完整的Linux发行版。")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("platform=<platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" <image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AS <name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("platform=<platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" <image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AS <name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("platform=<platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" <image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@<digest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AS <name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" alpine\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" alpine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.12\n")])])]),a("h3",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[t._v("#")]),t._v(" RUN")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" <command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#一行写不下时，使用‘\\’进行换行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get update && apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y \\\n\t\tapt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("utils \\\n    git \\\n    vim \\\n    && rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf /var/lib/apt/lists/*\n   \n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/bash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#等价于 ")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" /bin/bash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echo hello'")]),t._v("\n")])])]),a("h3",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[t._v("#")]),t._v(" CMD")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" command param1 param2\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" php "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("m\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"php"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-m"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[t._v("#")]),t._v(" LABEL")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LABEL")]),t._v(" <key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("=<value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" <key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("=<value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" <key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("=<value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LABEL")]),t._v(" maintainer="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ving <ving@nivin.cn>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LABEL")]),t._v(" version="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LABEL")]),t._v(" description="),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This text illustrates"')]),t._v("\n")])])]),a("h3",{attrs:{id:"expose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[t._v("#")]),t._v(" EXPOSE")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" <port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("<port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("/<protocol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" ENV")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" <key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("=<value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" ADD")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("chown=<user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" <src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" <dest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("chown=<user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<src>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<dest>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[t._v("#")]),t._v(" COPY")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("chown=<user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" <src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" <dest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("chown=<user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<src>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<dest>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[t._v("#")]),t._v(" ENTRYPOINT")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"param2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" command param1 param2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[t._v("#")]),t._v(" VOLUME")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VOLUME")]),t._v(" <path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VOLUME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[t._v("#")]),t._v(" USER")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" <user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USER")]),t._v(" <UID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("<GID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"workdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[t._v("#")]),t._v(" WORKDIR")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" <path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"arg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arg"}},[t._v("#")]),t._v(" ARG")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" <name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("=<default value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"onbuild"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onbuild"}},[t._v("#")]),t._v(" ONBUILD")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ONBUILD")]),t._v(" <INSTRUCTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"healthcheck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck"}},[t._v("#")]),t._v(" HEALTHCHECK")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HEALTHCHECK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CMD command\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HEALTHCHECK")]),t._v(" NONE\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])]),a("h3",{attrs:{id:"shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[t._v("#")]),t._v(" SHELL")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#语法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHELL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parameters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#实例")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);