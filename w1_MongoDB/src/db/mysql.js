const mysql = require('mysql');

//2.创建连接池
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: 3306,
    database: 'jiaoxue',
    multipleStatements: true
});

// 回调函数
// module.exports = function(sql,callback){
    
//     pool.query(sql, function(error, rows){

//         callback(rows)
//     });

// }

module.exports = sql=>{
    return new Promise((resolve,reject)=>{
        pool.query(sql, (error, rows)=>{
            if(error){
                reject(error);
            }
            resolve(rows);
        });
    })
}
