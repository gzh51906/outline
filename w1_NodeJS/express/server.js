// 引入第三方模块
const express = require('express');

// 引入文件模块
const {PORT} = require('./config.json');

// 引入路由
const router = require('./router')

// 创建一个服务器
const app = express();

// 静态资源服务器
app.use(express.static('./'));

app.use(router)

// 监听端口
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})