# React

## day5-1

### 面试题
* 插槽<slot>
    * 命名插槽
        * v-slot:header
    * 作用域插槽
        * v-slot:header="xxx"
* 动态组件<component>
    * is
* 路由vue-router
    * <router-view>

### 知识点
* nvm管理Node版本
* npx的使用

* JSX
    * JSX -> JS : babel
    * 限制条件
    * 如何实现js与html的混写

* webpack：基于配置的构建工具
    * entry:入口
    * output:出口
    * devserver:测试服务器
        * contentBase
    * loader:加载器
        * babel-loader
    * plugins: 插件
        * 常用插件
            * html-webpack-plugin   生成html文件
* gulp：基于任务的构建工具
    ```js
        gulp.task('compileSass',()=>{
            gulp.src('./src/sass/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./src/css/'))
        })
    ```

* Vue 完整MVC架构的框架
* React 是一个视图层框，MVC中的View


* 组件化开发
    * 组件定义
        * 函数组件
        * 类组件
            * state
    * 组件通讯
        * props

## day5-2

### 面试题
* webpack的常用配置参数
    * 脚手架已经配置了所需的webpack参数
* 事件处理函数内如何判断`事件源对象`与`绑定事件的元素`为同一个元素
```js
    btn.onclick = function(e){
        if(e.target === e.currentTarget){

        }
    }
    <button v-on:click="show"></button>
    <div onClick={show}></div>
```
* 函数如何调用自身
```js
    function show(){
        show();//递归调用
    }

    document.onclick = function test(){
        // 匿名函数的递归调用
        arguments.callee();//在严格模式下无法使用

        test();// test()只能在函数内部使用，不能在外部使用
    }
```

### 复习
* React
    * JSX  : React.createElement()的语法糖
        * 限制
            * 关键字无法直接使用
                * class -> className
                * for   -> htmlFor
            * 必须使用驼峰
                * onclick -> onClick
                * onkeydown -> onKeyDown
                * tabindex  -> tabIndex
                * ...
            * 必须结束标签
            * style必须使用对象
            * js必须写在花括号中
    * 组件
        * 函数组件（受控组件、UI组件、无状态组件）
            * 纯函数
            * 必须有return值
        * 类组件（非受控组件、容器组件、状态组件）
            * state
            * render
                * return
            * this指向
                * render中this指向组件实例
                * 事件处理函数：无this

* 构建工具
    * grunt
    * gulp
        * 基于任务
    * Webpack
        * 基于配置
        * 什么时候介入：编译阶段
        * 常用配置
            * entry
            * output
            * devServer
                * contentBase
            * loader：module.rules
                * babel-loader
                * css-loader
                    * style-loader
                * ...
            * plugins
                * html-webpack-plugin


### 知识点
* 组件通讯
    * props
        * 函数组件：通过组件第一个参数获取props
        * 类组件：通过this.props
    * 深层次组件通讯
        * props逐层传递
            * Context
            * Redux/Mobx
    * props数据类型校验
        * prop-types
        * 自定义校验规则
* 事件处理函数
    * 默认没有this
        * 通过bind绑定this（建议在constructor初始化时统一操作）
            * 多次bind只会在第一次生效
    * event对象
        * 最后一个参数为event对象

## day5-3

### 面试题
* 如何取消ajax请求
    * 原生js: xhr.abort()
    * axios： 
        * 标识请求：token
        * 取消请求：token.cancel()
* BSR与SSR是什么
    BSR：在浏览器输入地址-> 服务器返回html(空html) -> 浏览器解析html->请求src,href,ajax...->返回数据->渲染（完整html结构）
        * 缺点：
            * 不能SEO
            * 速度较慢
    SSR：首屏优化
        在浏览器输入地址 -> 服务器返回html（完整）
        Vue: nuxt.js
* Vue中哪个生命周期函数最先获取到父组件传入的props
    * created

### 复习
* 组件化
    * 组件通讯
        * 父->子：props
            * 函数组件：函数的第一个参数
            * 类组件：this.props
                * state
                * 生命周期函数
                ...
            * 数据类型校验: prop-types
                * 为什么要校验数据类型
        * 子->父
            * 通过props传递事件处理函数，在子组件中执行
        * 深层次组件通讯
* UI框架
* 事件处理函数
    * 默认没有this，所以一般会统一在初始化时（constructor）通过bind改变this指向（bind只认第一次）
    * event：事件处理函数的最后一个参数
        * target        触发事件的元素
        * currentTarget 绑定事件的元素

### 知识点
* 深层次组件通讯
    * context
        1. 在父组件中
            * 创建context: 
            ```js
                const MyContext = React.createContext(defaultValue)
            ```
            * 提供context：
            ```js
                // 如果不适用Provider，则value值传递defaultvalue
                <MyContext.Provider value="xx">
                    //子组件
                </MyContext.Provider>
        2. 子组件
            * 通过consumer获取（推荐）
                ```js
                    <MyContext.Consumer>
                        {
                            value =>{
                                // 在函数中获取value值xx
                            } 
                        }
                    </MyContext.Consumer>
                ```
            * contextType静态属性获取(简单)
                ```js
                    this.context
                ```
* 内容传输
    * props.children

* `<React.Fragment>`
    * 简写 `<></>`
    * 对应原生js: document.createDocumentFragment()

* 生命周期
    > 生命周期函数中的this指向实例
    * Mounting：已插入真实 DOM
        * componentWillMount
        * componentDidMount
    * Updating：正在被重新渲染
        * componentWillUpdate
        * componentDidUpdate
    * Unmounting：已移出真实 DOM
        * componentWillUnmount
    * 特殊生命周期函数
        * componentWillReceiveProps
        * shouldComponentUpdate 一般用于性能优化

* 强制刷新组件
    * Vue: this.$forceUpdate()
    * React: this.forceUpdate()


