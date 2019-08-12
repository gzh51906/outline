// 如果不是原生模块
// 会自动到node_modules中去查找
const express = require('express');

// 创建一个服务器
let app = express();

// 静态资源服务器
// 把当前目录作为静态资源服务器
// 1.内置中间件
let mw = express.static('./');console.log(mw)
app.use(mw);

// 2.自定义中间件
// 不添加路径，任何请求都会进入
//app.use(function(req,res,next){
    // req：request
    // res: response
    // next: 进入下一个中间件的方法
    //console.log('第一个中间件：',req.url);


    // if(req.url === '/getdata'){
    //     next();
    // }
// })

app.get('/login',function(req,res,next){
    // 在express中，相应内容
    res.send({username:'jingjing',age:36})
});
app.post('/reg',function(req,res,next){
    // console.log('第二个中间：')
    res.send('注册成功')
});

// 监听端口
app.listen(1906,()=>{
    console.log('server is run on http://localhost:1906')
});