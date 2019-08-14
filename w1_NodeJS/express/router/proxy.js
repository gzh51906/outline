const express = require('express');
const Router = express.Router();

var proxy = require('http-proxy-middleware')

// 新浪微博代理
// /proxy/weibo
let weiboMiddleware = proxy({ 
    // 要代理的目标服务器
    target: 'https://weibo.com', 
    changeOrigin: true,
    pathRewrite: {
        '^/proxy/weibo': '/', // 删除路径中多余的字符
    },
})
Router.get('/weibo',weiboMiddleware)
// 目标地址：https://weibo.com/aj/v6/comment/big?ajwvr=6&id=4404402175452970&from=singleWeiBo&__rnd=1565752680156
/**
    进入中间件后会执行以下操作
    1. target: 把'http://localhost:1906/proxy/weibo/aj/v6/comment/big?ajwvr=6&id=4404402175452970&from=singleWeiBo&__rnd=1565752680156'
变成 https://weibo.com/proxy/weibo/aj/v6/comment/big?ajwvr=6&id=4404402175452970&from=singleWeiBo&__rnd=1565752680156
    2. pathRewrite: 删除多余字符
    路径变成：https://weibo.com/aj/v6/comment/big?ajwvr=6&id=4404402175452970&from=singleWeiBo&__rnd=1565752680156
*/ 

// 代理淘宝
// /proxy/taobao
// Router.get('/taobao')


module.exports = Router;