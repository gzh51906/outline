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
