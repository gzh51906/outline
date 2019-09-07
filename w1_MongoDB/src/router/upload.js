const express = require('express');
const path = require('path');

const multer = require('multer');

const Router = express.Router();

const {update} = require('../db/mongo')

// 简单用法
// var upload = multer({ dest: 'uploads/' });//设置上传目录

// DiskStorage
var storage = multer.diskStorage({
    // 上传文件保存目录，无则自动创建
    destination:'./uploads/',

    // 设置上传目录(如果uploads目录不存在，则报错)
    // destination: function (req, file, cb) {
    //     cb(null, 'uploads/')
    // },

    // 重命名文件名（必须使用回调函数cb）
    filename: function (req, file, cb) {
        //获取文件后缀
        let ext = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})
   
var upload = multer({ storage})

const {insert,remove,find} = require('../db/mongo');
const {formatData,token} = require('../utils')

// 上传商品图片
Router.post('/goods',upload.array('goods',5),(req,res)=>{
    // upload.array()会对上传的图片进行处理，并设置到req.files中

    res.send(req.files)
})

// 上传头像
Router.post('/touxiang',upload.single('touxiang'),(req,res)=>{
    // upload.single()会对上传的图片进行处理，并设置到req.file属性中
    console.log(req.file);
    let {_id} = req.body

    // update('user',{_id},{touxiang:req.file.filename})
    res.send('success')
})

module.exports = Router;