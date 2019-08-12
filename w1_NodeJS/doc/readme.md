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