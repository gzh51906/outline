const mongodb = require('mongodb');console.dir(mongodb)

const {DBurl,DBname} = require('../config.json');

// 获取Mongo客户端
const {MongoClient,ObjectId} = mongodb;

//连接mongoDB
const connect = ()=>{
    return new Promise((resolve,reject)=>{
        MongoClient.connect(DBurl, async (err, client)=>{
            // err:连接失败时的错误信息，默认为null
            // client：连接数据库的客户端
            if(err) throw err;
        
            // 连接具体一个数据库，无则自动创建
            let db = client.db(DBname);
        
            resolve({client,db});
         });
    })
}

// @增
 exports.insert = async (colName,data)=>{
    //  连接数据库，获取客户端与数据库对象
    let {db,client} = await connect();// {db,client}

    //  获取集合
    let collection = db.collection(colName);

    let result = await collection.insertOne(data);


    // 查询结束后，关闭客户端连接，释放资源
    client.close();

    return result;
 }

// @删
exports.remove = async (colName,query)=>{
    // colName：集合名称
    // query: 查询条件
    let {db,client} = await connect();

     //  获取集合
     let collection = db.collection(colName);

     collection.deleteMany(query)

     client.close();
}

 // @改
exports.update = async (colName,query,data)=>{
    // colName：集合名称
    // query: 查询条件
    // data: 更新的数据
    let {db,client} = await connect();

     //  获取集合
     let collection = db.collection(colName);

     collection.updateMany(query,data)
     
     client.close();
}


 // @查
 exports.find = async (colName,query={},{sort,limit,skip,asc}={})=>{
    // colName：集合名称
    // query: 查询条件
    // data: 更新的数据
    let {db,client} = await connect();

     //  获取集合
     let collection = db.collection(colName);

    //  针对id进行处理
    // '5d5667d8f174c9ca8ea897d8' -> ObjectId("5d5667d8f174c9ca8ea897d8")
    if(query._id){
        query._id = ObjectId(query._id);
    }

    let result = collection.find(query);

    // 筛选
    if(sort){
        let opt = {}
        opt[sort] = asc?1:-1;
        result = result.sort(opt);
    }

    if(limit){
        result = result.limit(limit);
    }

    if(skip){
        result = result.skip(skip);
    }

     let data = await result.toArray();
     
     client.close();

    // 执行find方法，不会得到data，而是得到promise对象
    // 要得到data，必须then或者await
     return data;
}