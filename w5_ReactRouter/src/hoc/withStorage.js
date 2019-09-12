/**
 * 高阶组件（HOC）
    * 是一个函数，而且是一个纯函数(包装函数)
 */
import React from 'react';

function withStorage(Component){
    return function withStorage(props){
        // 获取本地token
        let token = localStorage.getItem('Authorization')
        return <Component {...props} token={token}/>
    }
}

export default withStorage;

// withRouter
// App = withRouter(App)