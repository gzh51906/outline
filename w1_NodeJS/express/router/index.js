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
// 地址以/proxty开头的请求，进入代理服务器
Router.use('/proxy',proxyRouter);
// var proxy = require('http-proxy-middleware');
// let weiboMiddleware = proxy({ 
//     // 要代理的目标服务器
//     target: 'http://52.198.113.252', 
//     changeOrigin: true,
//     pathRewrite: {
//         '^/proxy': '/', // 删除路径中多余的字符
//     },
// })
// Router.get('/proxy/*',weiboMiddleware)

// 爬虫
const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
Router.get('/spider',(req,res)=>{
    request('http://search.lefeng.com/search/showresult?keyword=%E9%9D%A2%E8%86%9C', (error, response, body) => {


        let $ = cheerio.load(body);
        let goodslist = [];
        $('#smPruArea .pruwrap').each((i, e)=>{
            let $ele = $(e)
            let name = $ele.find('.nam').text();
            let imgurl = $ele.find('dt img').attr('src');
            let oldPrice = $ele.find('.spri').text()
            let price = $ele.find('.price').text()

            // 获取文件名
            let filename = path.basename(imgurl);

            // 爬取图片
            // request方法返回一个stream
            request(imgurl).pipe(fs.createWriteStream('./img/'+filename));

            // var readerStream = fs.createReadStream('bigfile.avi');

            // let data = '';
            // readerStream.on('data',(chunk)=>{
            //     // 每读取一段文件执行一次data事件
            //     data += chunk;
            // })
            // readerStream.on('end',function(){
            //     // 文件读取完成执行end事件
            // });

            let goods = {
                name,
                imgurl:'img/'+filename,
                oldPrice,
                price
            }

            goodslist.push(goods)
            
        })

        // 操作数据库
        // mySQL在Nodejs中的操作
        res.send(goodslist)
    });
})



// 导出中间件
module.exports = Router;

