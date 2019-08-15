const express = require('express');

const Router = express.Router();

const mysql = require('../db/mysql');

// const mysql = require('mysql');
// 连接数据库

//   //1. 创建连接对象，并配置参数
//   var connection = mysql.createConnection({
//       host     : 'localhost',
//       user     : 'root',
//       password : '',
//       database : 'jiaoxue'
//   });


 //2.创建连接池
//  var pool  = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     port: 3306,
//     database: 'jiaoxue',
//     multipleStatements: true
// });


 

// 商品的增删改查
Router.post('/',(req,res)=>{
    // post请求参数：req.body
    let {name,price,color,size,imgurl,category} = req.body;
    // 数据库操作
    // pool.query(`insert into goods(name,price,color,size,imgurl,category) values('${name}','${price}','${color}','${size}','${imgurl}','${category}')`, function(error, rows){
    //     // 数据库操作
    //     console.log('增加商品');
    //     res.send(rows);
    // });

    mysql(`insert into goods(name,price,color,size,imgurl,category) values('${name}','${price}','${color}','${size}','${imgurl}','${category}')`)
});

Router.route('/:id')

.delete((req,res)=>{
    // 动态路由参数：req.params
    let {id} = req.params;
    // 数据库操作
    // pool.query(`delete from goods where id=${id}`, function(error, rows){
    //     // 数据库操作
    //     console.log('删除商品');
    //     res.send(rows);
    // });
    mysql(`delete from goods where id=${id}`)
})

.patch((req,res)=>{
    // 动态路由参数：req.params
    let {id} = req.params;

    // 获取商品参数
    let {price} = req.body;

    // pool.query(`update goods set price=${price} where id=${id}`, function(error, rows){
    //     // 数据库操作
    //     console.log('修改商品');
    //     res.send(rows);
    // });
    mysql(`update goods set price=${price} where id=${id}`)
})

.get((req,res)=>{
    // 动态路由参数：req.params
    let {id} = req.params
    // 数据库操作

     // 连接数据库
    //connection.connect();

    // 查询数据库
    // connection.query(`select * from goods where id=${id}`, function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('查询商品');
    //     res.send(results);

    // });
    
    // 关闭连接,释放资源
    //connection.end();


    // pool.query(`select * from goods where id=${id}`, function(error, rows){
    //     res.send(rows);
    // });

    // 回调函数
    // mysql(`select * from goods where id=${id}`,function(data){
    //     res.send(data);
    // })

    // Promise -> async await（ES7）
    mysql(`select * from goods where id=${id}`).then((data)=>{
        res.send(data);
    })
    
});



module.exports = Router;