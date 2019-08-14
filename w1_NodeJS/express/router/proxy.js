const express = require('express');
const Router = express.Router();

var proxy = require('http-proxy-middleware');
console.log(1234)

// 新浪微博代理
// /proxy/weibo
let weiboMiddleware = proxy({ 
    // 要代理的目标服务器
    target: 'http://52.198.113.252', 
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '/', // 删除路径中多余的字符
    },
})
Router.get('/*',weiboMiddleware)
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


// 目标服务器地址
// http://52.198.113.252/country
// 1. http://localhost:1906/proxy/country  -> http://52.198.113.252/proxy/country
// 2. http://52.198.113.252/proxy/country  -> http://52.198.113.252/country


module.exports = Router;