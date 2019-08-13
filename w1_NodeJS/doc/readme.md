# NodeJS

## day1-1

### 复习二阶段Node
* 安装环境
* 静态资源服务器
    * http
    * fs
    * url
    * path
    * ...
* 模块化开发规范（重点1）
    * commonJS      NodeJS（同步）
        * 使用模块
        ```js
            const http = require('http');
            const app = http.createServer(()=>{

            })
        ```
        * 定义模块
        ```js
            function show(){

            }
            module.exports = {
                show
            }
        ```
    * AMD           requireJS（异步:预加载）
        ```js
            let jq = require(['jquery'],($)=>{
                $('body')
            });
            console.log(jq);// undefined
        ```
    * CMD           seaJS（异步:延迟加载，不维护）
        ```js
            define(()=>{
                let $ = require('jquery')
            })
        ```
* 了解前端（客户端）与后端（服务器）（重点2）
    * request        请求（客户端->服务端）
    * response       响应（服务端->客户端）
* 静态资源服务器
    * mime类型
* NodeJS全局变量
    * nodeJS是服务端语言，能使用ECMAScript，不能使用浏览器端的DOM,BOM
    * NodeJS中也有全局变量，可以直接使用
        * __dirname
        * __filename
        * Buffer ： 一个类似与数组的二进制形式文件内容

* NodeJS模块分类
    * 内置模块
        > NodeJS自带，可直接使用
        * http,fs,url,path
    * 自定义模块
        > 自己编写的符合commonJS规范的模块，引入时必须使用相对路径（`./`或`../`）
        * module.exports
        * exports
    * 第三方模块
        > 别人写的符合commonJS规范的模块，需要安装`npm install xxx`，引入与内置模块一致
        * express
        * koa
* npm
    * 命令
        * `npm init`                    初始化一个项目（生成一个package.json文件）
        * `npm install <modulename>`    安装模块
        * `npm install`                 安装所有依赖模块
    * --save：      添加模块到到dependencies（默认）
    * --save-dev:   安装模块到devDependencies

* express
    * 中间件Middleware
        * 定义:中间就是一个封装了某些处理数据功能的函数
        * 使用中间件：`app.use([path],...middlewares)`
        * 中间件分类
            * 内置中间件: express自带
                * express.static()
            * 自定义中间件: 自己编写
            * 第三方中间件: 需要安装
* postman
    * chrome浏览器插件

## day1-2

### 面试题
> 每个上来面试的同学要把问题记录下来，并发到群里
格式：
```
#面试题#
1. 原型链的理解
    答案...
2. 作用域的理解
3. ES6有哪些新特性
4. var,let,const的异同
```
* 原型链的理解
    * 当前对象到Object.prototype间的链条
    * 属性访问规则
* 作用域的理解
    * 全局作用域
    * 局部作用域
    * 块级作用域 {let,const}
    * 变量查找规则：就近原则
        * 从当前作用域开始查找，找到则返回
        * 继续往级作用域查找，找到则返回
        * ....
        * 直到全局作用域，如还是无法找到变量则报:xxx is not define
    ```js
        let username = 'laoxie'
        window.onload = function(){
            let username = 'jingjing'

            btn.onclick = function(){
                // var username
                console.log(username);
                //var username = 'dingding'
            }
        }

        // 块级作用域
        // var i
        for(let i=0;i<5;i++){
            // let i
        }
        console.log(i);//5,not defined

        {
            let username = 'jingjing'
        }
        console.log(username)

    ```
* ES6有哪些新特性
* var,let,const的异同

### 复习
* NodeJS
    * 静态资源服务器
    * 服务器的知识
        * 客户端
        * 服务端
        * request
            * 请求头
            * 请求体
            * 参数
        * response
            * 响应头
    * 模块化开发
        * commonJS      Nodejs          同步
        * AMD           Requirejs       异步（预加载）
        * CMD           seajs           异步（延迟加载）
    * NodeJS模块
        * 内置模块
        * 自定义模块
            * 引入必须使用相对路径
            * 一个文件一个模块
            * 导出
                * module.exports = {}
                * exports.xxx = xxx
        * 第三方模块
            * 必须安装
            * 引入与原生模块一致
        * 文件模块
            * json文件
    * express
        * 利用express实现静态资源服务器
        * 中间件middleware
            * 内置中间件
                * express.static()
                * express.json()
                * express.urlencoded({extended:false})
            * 自定义中间件
                * 中间件就是一个函数
                * 参数
                    * request
                    * response
                    * next
            * 第三方中间件
        * 使用中间件
            * `app.use([path],middlewares)`

### 知识点
* 请求类型
    * get           查
    * post          增
    * patch/put     改（patch：部分修改，put：全部修改）
    * delete        删
    * options       预请求（一般出现在跨域请求中，由浏览器自动发起）
* 编写数据接口
    * RESTful：编写数据接口的标准
        * 根据**请求类型**来设计不同的数据接口
        * 根据**请求路径**来设计不同的数据接口
* 路由
    * 动态路由：路径带变量
        * 获取动态路由参数：req.params
    * get请求获取参数(参数放在url中)：req.query
    * post,put,patch(参数放在请求体中)：req.body
        * 注意：默认express没有把请求体中的数据格式化到req.body中，需要利用中间件实现格式化