const express = require('express');
const Router = express.Router();

// 数据接口（路由）
// 增加商品
Router.post('/',(req,res)=>{
    // 获取前端传入的参数（商品信息），并写入数据库
    res.send('商品增加成功')
})

Router.route('/:id')
    .delete((req,res)=>{
        res.send('商品删除成功'+JSON.stringify(req.params))
    })
    .patch((req,res)=>{
        res.send(req.body);
    })
    .get((req,res)=>{
        res.send('获取：'+JSON.stringify(req.query))
    })

// // 删除商品(动态路由)
// Router.delete('/:id',(req,res)=>{
//     // 获取动态路由参数：req.params
//     // 获取商品id，并操作数据库删除
//     res.send('商品删除成功'+JSON.stringify(req.params))
// })

// Router.patch('/:id',(req,res)=>{
//     // post,patch,put等请求（参数放在请求体中）：req.body
//     // 获取商品id，并操作数据库删除
//     console.log('body:',req.body);
//     res.send(req.body);
// })

// Router.get('/:id',(req,res)=>{
//     // 根据id查找数据库获取商品新
//     // get请求获取参数（参数放在url中）：req.query
//     res.send(req.query)
// })

module.exports = Router;