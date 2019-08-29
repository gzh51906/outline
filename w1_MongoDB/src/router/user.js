const express = require('express');

const Router = express.Router();

const {insert,remove,find} = require('../db/mongo');
const {formatData} = require('../utils')

// 增：注册用户
Router.post('/reg',async (req,res)=>{
    let {username,password,age,gender} = req.body;
    let data
    try{
        insert('user',{username,password,age,gender});//{username,password,age,gender}
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:0}))
    }
})

// 验证用户名是否存在
Router.get('/check',async (req,res)=>{
    let {username} = req.query;
    let data
    try{
        data = await find('user',{username});//{username,password,age,gender}
        data = data[0];
        if(data){
            res.send(formatData({code:0}))
        }else{
            res.send(formatData())
        }
    }catch(err){
        res.send(formatData({code:0}))
    }
})

Router.post('/login',async (req,res)=>{
    let {username,password} = req.body;
    let data
    try{
        data = await find('user',{username,password});//{username,password,age,gender}
        console.log('data',data)
        data = data[0]
        if(data){
            res.send(formatData({data:{_id:data._id,username:data.username}}))
        }else{
            res.send(formatData({code:0}))
        }
    }catch(err){
        res.send(formatData({code:0}))
    }
})

// 删
Router.delete('/:id',(req,res)=>{
    let {id} = req.params;
    let data
    try{
        remove('user',{_id:id})
        res.send(formatData())
    }catch(err){
        res.send(formatData({code:0}))
    }
})

// 查（获取所有用户）：get /user
Router.get('/',async (req,res)=>{
    let {skip,limit,sort} = req.query;
    let data = await find('user',{},{skip,limit,sort});
    res.send(formatData({data}))
})
Router.get('/:id',async (req,res)=>{
    let {id} = req.params;
    let data = await find('user',{_id:id});
    res.send(formatData({data}))
})

module.exports = Router;