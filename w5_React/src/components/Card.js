import React from 'react'

import './Card.css';

// 函数组件接收数据
function Card({data}){
    console.log('data:',data)
    return <div>
        {/* {
            data.map(item=>{
                return <div key={item.name} className="card">
                    <img src={'/assets/'+item.photo}/>
                    <h4>{item.name}</h4>
                    <p>性别:{item.gender}</p>
                    <p>年龄:{item.age}</p>
                </div>
            })
        } */}

        <div className="card">
            <img src={'/assets/'+data.photo}/>
            <h4>{data.name}</h4>
            <p>性别:{data.gender}</p>
            <p>年龄:{data.age}</p>
        </div>
    </div>
}

export default Card;
