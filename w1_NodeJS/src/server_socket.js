const express = require('express');
const ws = require('ws');
const http = require('http');

const {PORT} = require('./config.json');


// web服务器
// const app = express();
// app.use(express.static('./'));
// app.listen(PORT)


// // websocket服务器
// const socket = new ws.Server({
// 	port:3003
// });

// socket.on('connection',(client)=>{

// })



/**
    @利用http模块把web服务器与webSocket服务器合二为一
*/

const app = express();
app.use(express.static('./'));


// 通过http模块连接web服务器和socket服务器,让其共用一个端口
let server = http.Server(app);

// 创建Websocket服务器
const socket = new ws.Server({
	server
});

server.listen(PORT,()=>{
    console.log('server is running on port %s',PORT);
});

// 监听客户端连接
socket.on('connection',client=>{
    // 每个客户端连接服务器会执行一次connection事件，并把每个客户端存放到socket.clients属性中
    // client: 客户端对象

    client.on('message',msg=>{
        // 某个客户端发送消息到服务端，就会执行message事件
        console.log(msg);

        // 接收到消息,广播给所有用户
        // socket.clients.forEach(item=>{
        //     item.send(msg)
        // })

        socket.broadcast(msg);
    });
})

// 自定义广播方法
socket.broadcast = msg=>{  
    socket.clients.forEach(client=>{
        // 服务器主动发消息给客户端
        client.send(msg)
    });  
}; 