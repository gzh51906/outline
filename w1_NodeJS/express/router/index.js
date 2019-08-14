const express = require('express');
// 创建一个中间件
let Router = express.Router();

// 引入其他接口路由
let goodsRouter = require('./goods');
let regRouter = require('./reg');
let corsRouter = require('./cors');
let proxyRouter = require('./proxy');


Router.use(express.json(),express.urlencoded({extended:false}))

Router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method=="OPTIONS") {// 在预请求中告诉浏览器这里允许跨域，让她发真实的请求过来吧
        res.sendStatus(200);
        // 等效于：res.status(200).send()
    }else{
        next();
    }
})

// 当浏览器地址为/goods开头时，进入goodsRouter路由
Router.use('/goods',goodsRouter);
Router.use('/reg',regRouter);

// @测试跨域
// jsonp实现跨域请求
Router.get('/jsonp',(req,res)=>{
    // 从数据库读取数据
    let data = JSON.stringify({username:'jingjing',password:123});
    // 接收前端传入的函数名
    let {callback} = req.query;//getData,getJingjing
    res.send(`${callback}(${data})`)
});

// cors
Router.use('/cors',corsRouter);

// 服务器代理
Router.get('/proxy',proxyRouter)



// 导出中间件
module.exports = Router;

