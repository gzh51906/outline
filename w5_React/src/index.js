import React from 'react';
import ReactDOM from 'react-dom';

// 渲染到页面
// ReactDOM.render(vnode,node)
// vnode: 创建的虚拟节点React.createElement(type,[props],[...children])

let myusername = 'jignjing';

function changeUsername(e){console.log(111)
    myusername = e.target.value;

    console.log(myusername)
}
let mystle = {color:'#58bc58'}
ReactDOM.render(
    // React.createElement('div',{className:'user'},
    // [
    //     React.createElement('h1',null,'laoxie'),
    //     React.createElement('p',null,'年龄：18')
    // ]
    // ),// JS语法
    <div className="user">
        {/*<h1>{myusername}</h1>*/}
        <p style={mystle}>年龄：17</p>
        <label htmlFor="username">用户名：</label>
        <input type="text" value={myusername} onChange={changeUsername} id="username"/>
    </div>, // JSX语法
    document.querySelector('#app')
)