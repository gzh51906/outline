# day3-1

### 面试题
* 项目团队成员结构
    * 开发前
        * 产品经理
            * 原型图（草图）
        * UI设计师
            * 设计图
    * 开发中
        * web前端
        * 后端
        * 测试
    * 开发后
        * 运维
    * 管理 
        * 项目经理
        * 技术负责人
* review
* post请求如果拿不到前端传来的数据可能是什么原因
    * 请求参数
        * 请求头
        * url参数   req.query
        * 请求体    req.body
        * 动态路由  req.params
    * 后端没格式化数据
    * 前端请求头中的content-type格式
        * application/x-www-form-urlencoded
        * json
        * formdata
* Vue插槽`<slot>`（内容）
    * 默认插槽：default
    * 命名插槽
        * 定义： <slot name='header'/>
        * 使用：<template v-slot:header></template>
    * 作用域插槽
        * 传输：在slot上定义props：<slot name="header" username="xxx" v-bind:a="100">
        * 接收：<template v-slot:header="{username,a}">{{username}}</template>
### 复习
* 生命周期
    * 创建阶段
        > 初始化（响应式属性）
    * 挂载阶段
    * 更新阶段
    * 销毁阶段
    ```js
        <button v-for="item in 1000" @click="">点击</button>
    ```
* 对严格模式的了解
    * 'use strict'
* Vue指令的完整格式
    * v-指令名:参数.修饰符="值"
* Vue响应式属性在哪个阶段设置完成
    * 创建阶段

### 知识点
* Virtual DOM 虚拟DOM
    * 一个结构类似与真实DOM节点的js对象，
    * 虚拟DOM的操作在内存中执行
    * 所在的操作先在虚拟DOM中改变，然后对**同级节点**进行前后状态的对比(diff算法)，只更新有修改的部分
        * 所以需要对同层级、同类型的元素添加key属性（v-for）

    ```js
        // innerText初始状态为1
        btn.innerText = 10;
        btn.innerText = 11
        btn.innerText = 50
        btn.innerText = 1
        {
            type:'div',
            attrs:{
                id:'box',
                className:'box'
            },
            children:[
                {
                    type:'div',
                    children:[{
                        type:'button',
                        children:'点我'
                    }]
                },
                {
                    type:'ul'
                }
            ]
        }
    ```

* 影响页面性能几大因素
    * 节点的频繁操作
        * 节点操作不可避免，但可以减少
    * 事件的数量
    * http请求数量
    * ...
    ```js
        <button>1</button>

        console.time('laoxie')
        for(var i=0;i<10000;i++){
            // 几次节点操作：30000
            let btn = document.getElementsByTagName('button')[0];
            let num = btn.innerText;

            num++;

            btn.innerText = num;
        }
        console.timeEnd('laoxie')

        // 优化代码
        // 节点操作次数：3
        let btn = document.getElementsByTagName('button')[0];
        let num = btn.innerText;
        for(var i=0;i<10000;i++){
            num++;
        }
        btn.innerText = num;

    ```
* VueRouter
    * SPA ：Single Page Application单页面应用

## day3-2

### 面试题
* json数据的格式
    * 应用场景
        * 前后端数据交互
        * 配置文件
        * mock
        ...
    * xml
* 局部组件与全局组件有区别
    * 使用范围
    * 定义方式
* 组件局部样式
    * scoped
    * 原理：css属性选择器

### 复习
* 过渡动画
    * <transition>
    * <transition-group>
* VueRouter
    * 使用步骤
        * 使用：Vue.use()
    * 配置路由
### 知识点
* Vue全家桶
* 路由导航
    * 声明式导航<router-link>：利用已经声明的组件`<router-link>`实现导航
        * to
        * tag
        * active-class          /,  /home都添加高亮
        * exact-active-class    / 不高亮，/home高亮
    * 编程式导航
        * this.$route   当前路由信息
        * this.$router  路由对象
            * push(path)        等效于`<router-link :to="path"/>`
            * replace(path)     等效于`<router-link :to="path" replace/>`
    * 路由传参
        * 跳转时传参
            * params    参数保留在$route中，刷新数据会丢失
                * name方式跳转时才可使用params
                ```js
                    this.$router.push({name:'goods',params:{id:123}})
                    this.$router.push({path:'/goods',params:{id:123}});//不支持
                ```
            * query     参数保留在url中，刷新不会丢失
            * 动态路由
                * 需要在路由配置中设置，然后在跳转时传递参数
        * 定义时传参
            * props : Object|Boolean|Function
    * <router-view/>
        * 把url匹配到的组件渲染到router-view组件中，类似component动态组件的作用
* axios
    * axios是一个封装了XMLHttpRequest和Promise的ajax请求工具
    * 格式化数据

## day3-3

### 面试题
*  Vue全家桶：Vue+VueCLI(webpack+Babel)+VueRouter+Vuex+axios
* SPA
    * hash
    * history
* 组件
    * 为什么用
        * 复用
        * 维护方便
    * 定义
        * 全局
            * template:'#header' -> render
        * 局部
            * template:'<div></div>' -> render
        * 单文件组件
            * `*.vue`
    * 使用
    * 通讯
        * 父->子：props
        * 子->父：自定义事件系统
        * 兄弟
        * 深层次组件
        * 路由
* 构建版本
    * UMD       完整版本
    * cjs       commonJS
    * esm       ESModule
    * runtime   运行时

### 复习
* 路由使用
    1. 引入
    2. 安装Vue.use()
    3. 实例化并配置参数（路由记录）
    4. 注入根实例
    5. 使用
* 路由显示
    <router-view/>
* 路由导航
    * 声明式    <router-link/>
    * 编程式
        * $router
        * $route

* 路由传参
    * 定义时传参
        * props
    * 跳转时传参
        * query
        * params
            * 只支持name方式跳转时传参
            * 动态路由
* Vue生命周器每个阶段做了什么
    * 创建阶段：组件通讯props中，子组件哪个生命周期最先得到props的值：created
    * 挂载阶段：把实例的数据挂载到视图
    * 更新阶段：虚拟DOM,diff算法
    * 销毁阶段：清除监听，事件、响应式属性
* 项目开始要做哪些准备工作
    * 搭建环境
        * 目录
        * 依赖
    * 模块化开发

### 知识点
* 动态路由
    * 商品间的切换，Goods使用`复用规则`（不销毁不重建）
* 路由守卫
    * 全局路由守卫
        > 路由实例的方法，写在配置文件中
        * router.beforeEach()
        * router.afterEach()
    * 路由独享的守卫
        > 写在路由配置中的守卫
        * beforeEnter
    * 组件内的守卫：
        > 写在组件内的守卫（VueRouter针对组件添加的生命周期函数）
        * beforeRouteEnter  进入路由前执行
        * beforeRouteUpdate 路由更新时执行
        * beforeRouteLeave  离开当前路由时执行

* Vuex
    * 核心概念：store
        * state         状态(类似于组件的data)
        * getters       处理state(类似于组件的computed)
        * mutations     修改state的唯一方式(理解为组件中的methods)

## day3-4

### 面试题
* 路由模式mode
    * hash
    * history
* 路由传参方式
    * params
    * query
    * props
* 路由跳转过程中，组件声明周期如何执行
    * 激活组件  重建
    * 失活组件  销毁
    * 路由跳转过程中不经历重建与销毁过程
        * 动态路由
        * keep-alive
* 模块化与组件化开发
    * 模块化规范有哪些
        * require.js        AMD
        * sea.js            CMD
        * nodejs            CommonJS
        * ECMAScript2015    ESModule
            * ES版本呢
                * ES5
                * ES6   ECMAScript2015
                * ES7   ECMAScript2016
* 虚拟DOM为什么效率会更高
    * 是一个结构类似与真实DOM节点的对象，在内存中运行
    * 对节点操作进行优化
    * 对事件进行优化
    * 局部更新
* hash路由和history路由的底层原理
    * 不用VueRouter如何实现相同效果
    * 原理：window.onhashchange事件

### 复习
* 动态路由
    * 监听动态路由的改变
        * watch
        * beforeRouteUpdate
* 路由守卫
    * 全局
        * router.beforeEach(to,from,next)
        * router.afterEach(to,from)
    * 路由独享
        beforeEnter(to,from,next)
    * 组件内
        * beforeRouteEnter(to,from,next)
        * beforeRouteUpdate(to,from,next)   复用组件才会执行
            * $route
        * beforeRouteLeave(to,from,next)
* 完整路由跳转过程
    * 11步

* Vuex
    * 核心概念 
        * store
            * state         data
            * getters       computed
            * mutations     methods
                * 调用方式：store.commit()
    * 使用
        1. 实例化store
        2. 注入store
        3. 使用this.$store
    * Vuex解决的问题
        * 数据管理      
            * 获取  
                * this.$store.state.xxx
                * this.$store.getters.xxx
            * 修改
                * this.$store.commit('mutation',xxx)
            * UI更新
### 知识点

* 嵌套路由
    * children
    * 嵌套`<router-view>`
* 命名路由
    * `<router-view name="header">`
    * 配置：components:{header:xxxx}
* hash路由的底层原理
    * 不用VueRouter如何实现相同效果
    * 原理：window.onhashchange事件
* history路由的底层原理
    * HTML5新特性（对history对象的增强）
        * pushState()
        * replaceState()

## day3-5

### 面试题
* 如何实现QQ或者微信同类型设备不能同时登录的效果
    * 会自动下线之前的设备
        * websocket
        * 轮询
* hash路由的原理
    * window.onhashchange
* 单页面应用SPA与多页面应用MPA
* 上线
    * 编译

### 知识点
* session & token & cookie
    * cookie：客户端存储技术
        * 自动发送给服务器
    * session: 服务器版cookie
    * token：令牌

* 用户登录状态保留
    * token 令牌（就是一个加密后的字符串）
        * 生成：用户第一次使用用户名和密码登录成功后，后端生成并返回给前端保存
        * 校验：
            * 是否被伪造
            * 是否过期
* 路由拦截
    * 利用全局路由守卫（beforeEach）实现拦截
    * 鉴权：必须有登录权限才能访问到某个页面

* 响应拦截
    * 

* 知识点梳理
    * token
        * 什么是token
        * 应用场景
        * 如何使用（在服务端完成）
            * 创建
            * 校验
            * 使用步骤
                1. 用户在客户端使用用户名密码第一次登录
                2. 后端验证用户名密码成功后，创建一个token，并返回前端
                    * jsonwebtoken.sign({data},secret,{expires})
                3. 客户端接收到token后保存在本地存储
                4. 在需要权限才能访问的页面把token发送给后端进行校验，根据服务器校验结果确定是否允许访问目标页面
    * 路由拦截
        * beforeEach全局守卫
            * 校验用户是否已登录：判断本地存储中是否存在token
            * 校验用登录是否过期，或token是否被伪造：发起请求到后端进行校验
    * 完成的请求过程
        1. 客户端发起请求
        * 请求拦截
        2. 服务器接收到请求，并响应数据
        * 响应拦截
        3. 客户端接收到相应数据

    * 响应拦截
        * 使用：axios.interceptors.response
        * 应用场景
            * token校验
            * 数据格式化
            * 关闭loading
    * 请求拦截
        * 使用：axios.interceptors.request
        * 应用场景：
            * 显示loading
            * 发送全局数据
                * token
                * 用户标识
                * ...
    * VueX
        * store
            * state
            * getters
            * mutations
                * 调用：store.commit('mutation',参数)
            * actions   类似于mutations
                * 不使用actions的做法
                    1. 组件内发起ajax请求
                    2. 数据回来后调用store.commit('mutation')
                * 调用：store.dispatch('action',参数)
                    * dispacth -> action(ajax) -> commit -> mutation -> state
        * store模块
            * modules   影响state的获取：store.state.xxx -> store.state.cart.xxx
                * cart
                * common
        * Vuex映射：简化操作的作用
            * state & getters 映射到组件的computed
            * mutations & actions 映射到组件的methods
* git分支操作
    * 公共分支
        * master    专人管理，其他人不能改
        * dev       开发分支，每个人都可以修改
    * 私有分支
        * 每个人自己创建一个独立分支，不需要传到github
    * 操作流程
        * 每天在私有分支上传编写代码，需要给其他成员使用时，把代码合并到dev分支
        * 合并步骤: git merge
            1. 切换到需要合并的分支：dev
            2. git merge laoxie : 把laoxie分支合并到当前分支
            3. 推送dev分支到github
            4. 其他成员拉取dev分支内容: git pull origin dev
            5. 其他成员把dev分支内容合并到私有分支：git merge dev
        * 进入vim
            * 插入模式：i
            * 保存
                * :w    保存
                * :q    退出
                * :q!
        * 配置公钥
            * 生成公钥与私钥：ssh-keygen
* 正则表达式
    * 零宽断言
        ```js
            /(?<=\{\{)\w+(?=\}\})/
            /(?<=\{\{)\w+(?=\}\})/
        ```

## day4-6
* 上线
    1. 买服务器
        * 配置实例
        * 配置安全组
            * 开发端口：80，1901~1920
            http://52.198.113.252:1906
    2. 上线
* web服务器
    * Apache
    * nodeJS express中间件
    * tomcat
    * IIS
    * nginx
* git tag v1.17.3
* 代理
    * 正向代理
    * 反向代理
    

    无法直接访问3000端口，但可以访问1902端
    使用1902端口代理3000端口服务器


* 上传
    * 前端
        * formData
    * 后端
        * node + express
        * multer

