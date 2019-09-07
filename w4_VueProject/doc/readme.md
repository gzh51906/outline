# Vue项目

## day4-1

### 知识点
* 项目
    * WebApp
    * 后台管理系统
* git团队协作
    * 分支
        * 公共分支
        * 私有分支
            * 以自己名字来命名
            * 不推送到github
    * 冲突
        * 冲突不可避免，但可以减少
        * 解决冲突
            * git status 查看冲突文件（both modified）
            * 解决冲突
                * 删除多余代码
            * git add xx
            * git commit 

## day4-2

### 面试题
* Vuex
    * store
        * state     
        * getters
        * mutations
        * actions

    * 使用
        * 获取数据
            * store.state.xxx
            * store.getters.xxx
        * 修改数据
            * store.commit('mutation',参数)
            * store.dispatch('action',参数)
        
        * modules

* 拿到仓库地址接下来做什么
    * 克隆或拉取
        * git pull origin dev
        * git branch dev origin/dev
    * 创建私有分支
* 伪数组与数组的区别
    * 原型对象不一样
    * 伪数组->数组：
        * Array.from()
        * ...
    * 数组->伪数组
        * 修改原型对象

* 多久发一次版本
    * 紧急bug   hotfix
    * master
* 如何取消ajax请求
    * XMLHttpRequest
        ```js
            xhr = new XMLHttpRequest();
            xhr.abort()
        ```
    * axios
    ```js
        import axios from 'axios';
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();//{token,cancel()}

        axios({
            url:'xxx',
            cancelToken: source.token
        })

        axios.get('xxx',{
            cancelToken: source.token
        }),
        axios.post('xxx',{},{
            cancelToken: source.token
        });

        // 取消
        source.cancel('xxx')

    ```
    * 取消代码编写位置
        * 组件销毁阶段


## day4-4
* webapp + 后台管理系统

* Vue-cli
    * 图片路径问题
        * 图片会被webpack处理
            * webpack只会处理相对路径后require()/import的图片
        * 解决方案
            * require(url)
                * url如果是一个变量，则必须使用拼接路径的方式
            * vue-cli：
                * 放到public文件夹中
    * webpack介入时间
        * 流程：webpack编译 -> js,html,css -> 浏览器解析（Vue介入）
    