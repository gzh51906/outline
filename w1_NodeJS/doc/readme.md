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

### 面试题
* 同步与异步
* jquery链式调用
    * return this
* 模块化开发
* 说说最近的项目
    * 项目的特点
    * 负责部分
    * 用什么技术栈
    * 遇到什么问题，怎么解决

### 知识点
* 模块化开发路由
* 跨域
    * 为什么会有跨域（同源策略：要求两个网站进行数据交互时必须同源）
        * js是一门客户端语言
        * 实际开发有跨域的需求
        * 跨域解决方案
            * jsonp
                * 原理:利用script能访问第三方服务器的特点来实现跨域获取数据
                * 使用
                    * 前端
                        * 定义全局函数
                        * 利用script标签发起请求
                        * 并携带全局函数名（函数必须为全局函数）
                    * 后端
                        * 接收回调函数名
                        * 返回js代码（回调函数执行的代码）
            * CORS（Cross Origin Resource Sharing）
                
## day1-3

### 面试题
* 未知宽高的图片居中
    * 兼容ie6:利用js获取宽高，动态设置top,left
* 事件传播的理解
    * 事件冒泡
    * 事件捕获
    * 事件源对象（e.target）
    * 阻止事件传播：e.stopPropagation()
    * 应用场景
        * 事件委托
* 对象的复制
    // {a:10,b:20,c:30,score:{en:123,math:100,cn:150}}
    {a:10,b:20,c:30,score:#xxx}
    * 浅拷贝
        * 遍历
        * Object.assign({},obj)
        * {...obj}
    * 深拷贝
        * 递归
        * JSON.parse(JSON.stringify())
            ```js
                let obj = {username:"jingjing",say:function(){}}
            ```
        * 第三工具
* get和post的区别
    * 语义不一样
    * 参数传递方式不一样
    * 发送数据大小限制不一样
    * 后端接收方式不一样
    * ...
* git常用命令
    * git add
    * git commit
    * git push
    * git pull
    * git status
    * git init
    * git clone
    * git log
    * git reflog
    * git remote
    * git reset
    * .....
* 原生js对节点的操作
    * 创建：document.createElement()
    * 插入：xxx.appendChild(xx)
    * 删除：parent.removeChild(xxx)
    * 改
        * xx.innerHTML
        * xx.innerText
        * xx.setAttribute()
    * 获取
        * document.getElementById()
        * document.getElementsByClassName()
        * document.getElementsByTagName()
        * document.querySelector()
        * document.querySelectorAll()


### 复习
* 路由
    * 模块化
    * 中间件
    * RESTful规范
        * 请求类型
            * get
            * post
            * patch/put
            * delete
            * options
        * 请求路径
            * post      /goods          增加一个商品
            * get       /goods          获取所有商品
            * get       /goods/11       获取一个商品
            * patch     /goods/11       修改一个商品
            * delete    /goods/11       删除一个商品
* 跨域
    * jsonp
        * 缺点：
            * 只能get请求
            * 不是一个ajax请求
    * CORS
        * 原理：就是一个普通的ajax请求，通过响应头来实现跨域数据请求
        * 必要条件
            * 浏览器支持
            * 服务器支持
                * 在服务端设置响应头
                    * Access-Control-Allow-Origin:'*'
                    * Access-Control-Allow-Headers:'Content-Type'
                    * Access-Control-Allow-Methods:'get,post,put,patch,delete'
        * 复杂请求与简单请求
            * options：预请求（一般出现在复杂跨域请求中，由浏览器自动发起，用于确认服务器是否支持这个请求）
    * 服务器代理
        > 目标服务器有接口，但不允许跨域访问
        * http-proxy-middleware
    * 爬虫
        > 服务器没接口，但又想使用它的数据 -> 爬虫


* 页面渲染方式
    * BSR：前后端分离（数据与结构分离：BSR客户端渲染）
        * 前端：请求接口，并渲染数据到页面
        * 后端：编写数据接口
    * SSR：html结构与数据混写（SSR服务器渲染）
        * 速度
        * SEO

## day1-4

### 面试题
* json字符串的格式要求
    * 字符串与属性名必须使用双引号
    * 不能有注释
    * 不用有多余的逗号
    * 值必须为以下类型
        * String
        * Number
        * Boolean
        * Object
        * Array
        * null
    * 常用方法
        * JSON.stringify()
        * JSON.parse()
* 类数组与数组的区别
    * 类数组的原型对象与数组不同，所以不能使用数组的方法
    * 类数组如何使用数组的方法
        ```js
            Array.prototype.map.call(jiaArray,function(item,idx,arr){})

            arr.map(function(){})
        ```
* cookie、webStorage、session的区别
    * 应用场景
    * cookie格式：name=value;expires=xxx;path=/html/img;domain=xxx
* HTML5新特性
    * 新标签
    * 新表单类型
    * Audio,Video,Canvas
    * Svg
    * WebStorage
        * sessionStorage
        * localStorage
    * Draggable
    * History
    * FormData
    * ......
* getElementsByTagName('button')和querySelectAll('button')的到结果的区别
    * HTMLCollection（实时更新）
    * NodeList
* ajax的完整步骤
    1. let xhr = new XMLHttpRequest();
    4. xhr.onload = ()=>{}
    2. xhr.open('get','',true);
    3. xhr.send()
* 箭头函数与普通函数的区别
    * 箭头函数是否可实例化（不可以）


### 复习
* 跨域
    * jsonp
    * CORS
    * 代理服务器
* 上线流程
* 爬虫
    * request
    * cheerio

### 知识点
* 读取文件
    * 小文件（一次性读取完毕）
        * fs.readFile(path)
    * 大文件(必须一点一点读取，文件流stream)
        * fs.createReadStream()
* 写入
    * 小文件（一次性写入）
        * fs.writeFile(path,data)
    * 大文件（Stream）
        * fs.createWriteStream(path)
        * 写入的文件可以使用以下方式
            * 管道传输pipe
            * writerStream.write(data,'UTF8');
            * writerStream.end();

    ```js
        gulp.task('compileJS',()=>{
            gulp.src('./src/js/*.js')       //得到文件流

            .pipe(concat())
            .pipe(uglify())
            .piep(gulp.dest('./dist/js'))
        })
    ```
* 环境变量
    * 我的电脑（右键）-> 属性-> 高级设置 -> 环境变量
        * 用户变量
        * 系统变量
* mySQL

## day1-5

### 面试题
* 对模块化开发的理解
    * 前端
        * AMD   requireJS
        * CMD   seaJS
        * ESModule
    * 后端
        * commonjs  NodeJS
    * 模块化开发的好处
        * 结构更清晰
        * 开发更便利
        * 维护更方便
        * ......
    * 搭架子（准备工作）
* 是否了解SEO
    * 搜索引擎优化
    * 搜索引擎就是一个最大的爬虫
    * 让自己的网站适应搜索引擎爬虫的算法，让网站对搜索引擎更友好
    * h5如何做SEO
        * 标签语义化
        * 结构更清晰
        * 布局更合理
        * 关键字排布更合理
        * SSR
* JS有那么些数据类型
    * JS数据类型判断
        * typeof
        * Object.prototype.toString()
    * 类型
        * Number
        * String
        * Boolean
        * Null
        * Undefined
        * Symbol
        * Object
            * Array
            * Function
            * ...
* 前后端如何协调
    * 模拟数据json-server
* 怎么理解Express
    * 中间件
* 错误处理步骤
    * console.log()
    * 断点
    * debugger

### 复习
* Stream
    * 属于fs模块的范畴
    * 读取
        fs.createReadStream()
        * 事件
            * data
            * end
            * error
    * 写入
        * myStream = fs.createWriteStream()
        * 写入内容
            * myStream.write()  可执行多次
            * .pipe(myStream)
            * myStream.end()    

* mySQL
    * mysql第三方模块
    * 连接数据库
        * 连接对象
        * 连接池（推荐）
    * 数据库操作
        * 增
        * 删
        * 改
        * 查
    * 封装方法
        * promise对象

### 知识点
* 规范后端返回的数据格式
    * 封装的扩展性与合理性
* async & await

* 数据库
    * 关系型数据库
        * Oracle
        * SQLServer
        * mySQL
        * mariaDB
    * 非关系型数据
        * MongoDB
    * 对比
                关系型数据              非关系型数据
    数据库       database                database
    表           table                   collection
    数据         row                     document

* 在NodeJS中使用mongodb
    * mongodb
    * mongoose
    * 文档操作CRUD

## day2-1

### 面试题
* git冲突怎么处理
    * review
    * 冲突很难避免，但可以减少
        * 合理分配任务
        * 模块开发
        * 规范开发流程

* async&await的理解
    * 如何捕获错误
        * `throw new Error()`
        * try...catch
* 前后端联调，接口未完成时怎么处理
    * 数据返回格式不是想要的格式时怎么处理
    * 需求文档

### 复习
* mySQL
    * 安装mySQL
    * php
        * 驱动：mysqli
    * node
        * 驱动 mysql
* MongoDB
    * 安装mongoDB数据库
    * node
        * 驱动
            * mongodb
            * mongoose
        * 操作
            * 增
                * insertOne(data)
                * insertMany(data)
            * 删
                * deleteOne(query)
                * deleteMany(query)
            * 改
                * updateOne(query,data)
                * updateMany(query,data)
            * 查
                * find(query)
                * findOne(query)
    * 概念
        * database
        * collection
        * document