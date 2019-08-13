const express = require('express');
const Router = express.Router();

Router.post('/',(req,res)=>{
    res.send(req.body);
})

module.exports = Router;