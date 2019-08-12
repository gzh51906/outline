/**
 * 静态资源服务器
    * 图片
    * html
    * css
    * js
    * ...
 */
// 内置模块（nodejs自带的模块，直接使用）
 const http = require('http');// commonJS同步
 const fs = require('fs');

 // 创建一个服务器
const app = http.createServer((req,res)=>{
    // 响应内容（可以多次）
    // res.write('<h1>hello laoxie</h4>');

    // 要显示index.html
    // 1. 通过fs模块读取index.html内容
    // 2. 通过res.write把内容响应到前端
    
    fs.readFile('./index.html',(err,content)=>{
        // err:错误信息，默认：null

        res.write(content);

        //结束响应
        res.end();
    })

    // 根据不同的请求，返回不同的内容
    
    
});

// 监听端口
app.listen(1906,()=>{
    console.log('server is running on port 1906');
})