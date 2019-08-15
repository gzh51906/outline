const express = require('express');
const {PORT} = require('./config.json');
const router = require('./router');

const app = express();

app.use(express.static('./'));

// 路由接口
app.use(router);

app.listen(PORT,()=>{
    console.log('服务器启动成功');
})