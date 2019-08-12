/**
 * 静态资源服务器
    * 图片
    * html
    * css
    * js
    * ...


    * 为什要用静态资源服务器
        * PHP: PHP+Apache+mySQL
        * NodeJS: node+Mongo
        * java: java+tomcat+oracle
        * dotNet: .netAsp+IIS+SQLServer
 */
// 内置模块（nodejs自带的模块，直接使用）
 const http = require('http');// commonJS同步

// 用于读取文件
 const fs = require('fs');

// 引入url模块，用于url地址格式化
let url = require('url');

// 用于格式化文件地址
let path = require('path');

// 自定义模块
let mime = require('./mime');

 // 创建一个服务器
const app = http.createServer((req,res)=>{
    // 响应内容（可以多次）
    // res.write('<h1>hello laoxie</h4>');

    // 要显示index.html
    // 1. 通过fs模块读取index.html内容
    // 2. 通过res.write把内容响应到前端
    
    // fs.readFile('./index.html',(err,content)=>{
    //     // err:错误信息，默认：null

    //     res.write(content);//{username:'laoxie',age:18}

    //     //结束响应
    //     res.end();
    // })

    // 静态资源服务器：根据不同的请求，返回不同的内容
    // /index.html?username=laoxie&password=123
    // let reqObj = url.parse(req.url);//{pathname:'/index.html',query:'username=laoxie&password=123'}
    let reqObj = url.parse(req.url,true);//{pathname:'/index.html',query:{username:'laoxie',password:123}}

    // 得到地址格式：/img/jingjing.jpg
    let filePath = reqObj.pathname;

    // 获取后缀名.png,.jpg,.html,.css
    let extname = path.extname(filePath).slice(1);

    // 获取真实路径
    // 把/img/jingjing.jpg -> D:/myweb/img/jingjing.jpg
    // __dirname：当前文件所在目录
    let realPath = path.join(__dirname,filePath);


    fs.readFile(realPath,(err,content)=>{
        // err:错误信息，默认：null
        // content:文件内容Buffer（二进制文件内容）
        // console.log('content:',content)

        // 告诉浏览器内容类型是什么（响应头Content-Type）
        res.writeHead(200,{'Content-Type':mime[extname] + ';charset=utf8'});

        res.write(content);

        //结束响应
        res.end();
    })
    
});

// 监听端口
app.listen(1906,()=>{
    console.log('server is running on port 1906');
})