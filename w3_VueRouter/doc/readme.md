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
    * SPA   Single Page Application单页面应用