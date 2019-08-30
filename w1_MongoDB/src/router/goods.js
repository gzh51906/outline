const express = require('express');

const Router = express.Router();

const mysql = require('../db/mysql');

const {formatData} = require('../utils');

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


// 库存信息
Router.get('/kucun',(req,res)=>{console.log(123456)
    let kc = Math.ceil(Math.random()*10);
    res.send(formatData({data:10}))
});

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
    .then(result=>{
        res.send(formatData())
    })
    
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
    mysql(`delete from goods where id=${id}`).then(result=>{
        res.send(formatData())
    })
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
    mysql(`update goods set price=${price} where id=${id}`).then(result=>{
        res.send(formatData())
    })
})

.get(async (req,res)=>{
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
    // mysql(`select * from goods where id=${id}`).then((data)=>{
    //     res.send(formatData({data}))
    // }).catch(err=>{
    //     res.send(formatData({code:0,data:err})) 
    // })

    // await：等待promise对象resolve返回值
    // await限制条件：不能单独使用，必须写在async函数中
    // try{}..catch(err){}
    let result;
    try{
        // 尝试这里这里的代码
        // 如果执行成功，则忽略catch中的代码，
        // 如果有错误，则执行catch代码（不会停止js的执行）
        let data = await mysql(`select * from goods where id=${id}`)
        result = formatData({data});
    }catch(err){
        result = formatData({code:0,data:err})
    }

    res.send(result)
});






module.exports = Router;