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
* 模块化开发规范
    * commonJS      NodeJS（同步）
        ```js
            const http = require('http');
            const app = http.createServer(()=>{

            })
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
* 了解前端（客户端）与后端（服务器）
    * requet        请求（客户端->服务端）
    * response      响应（服务端->客户端）
* 静态资源服务器
    * mime类型