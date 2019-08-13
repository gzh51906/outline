const express = require('express');

const app = express();

const {PORT} = require('./config.json');//返回json内容

app.use(express.static('./'));

// 利用中间件格式化前端传入的参数
app.use(express.json(),express.urlencoded({extended:false}))

// 数据接口（路由）
// 增加商品
app.post('/goods',(req,res)=>{
    // 获取前端传入的参数（商品信息），并写入数据库
    res.send('商品增加成功')
})
// 删除商品(动态路由)
app.delete('/goods/:id',(req,res)=>{
    // 获取动态路由参数：req.params
    // 获取商品id，并操作数据库删除
    res.send('商品删除成功'+JSON.stringify(req.params))
})

app.patch('/goods/:id',(req,res)=>{
    // post,patch,put等请求（参数放在请求体中）：req.body
    // 获取商品id，并操作数据库删除
    console.log('body:',req.body)
    res.send(req.body)
})

app.get('/goods/:id',(req,res)=>{
    // 根据id查找数据库获取商品新
    // get请求获取参数（参数放在url中）：req.query
    res.send(req.query)
})

// 监听端口
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})