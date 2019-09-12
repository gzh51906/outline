import React, { Component } from 'react';

import { Route, Redirect, Switch, NavLink ,withRouter} from 'react-router-dom';
import { Menu, Icon } from 'antd';

import Home from './pages/Home'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Goods from './pages/Goods'
import List from './pages/List'

class App extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         menu:[]
    //     }
    // }

    state = {
        current:'/home',
        menu: [{
            path: '/home',
            text: '首页',
            icon:'home',
            name: 'home'
        }, {
            path: '/mine',
            text: '我的',
            icon:'user',
            name: 'mine'
        }, {
            path: '/reg',
            text: '注册',
            icon:'user-add',
            name: 'reg'
        }, {
            path: '/login',
            text: '登录',
            icon:'login',
            name: 'login'
        }]
    }

    // 静态属性
    // static contextType = {}

    // 箭头函数
    // handleClick = ()=>{}

    // 以上写法必须安装：@babel/plugin-proposal-class-properties

    goto = ({key})=>{
        // 编程式导航：通过代码实现跳转
        // 如何获取history
        this.setState({
            current:key
        });
        this.props.history.push(key)

        console.log(this.props)
    }

    componentDidMount(){
        // let token = localStorage.getItem('Authorization')
        // this.setState({
        //     token
        // })
    }

    render() {
        console.log('token',this.props.token)
        return (
            <div>
                {/* {
                    this.state.menu.map(item=>{
                        return <NavLink to={item.path} activeStyle={{color:'#f00'}} replace>{item.text}</NavLink>
                    })
                } */}

                <Menu 
                onClick={this.goto} 
                selectedKeys={[this.state.current]} 
                mode="horizontal">
                    {
                        this.state.menu.map(item=>{
                            return <Menu.Item key={item.path}>
                                <Icon type={item.icon} />
                                {item.text}
                            </Menu.Item>
                        })
                    }
                    

                </Menu>
                    
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    {/* 动态路由 */}
                    <Route path="/goods/:id" component={Goods} />

                    {/* 嵌套路由 */}
                    <Route path="/list" component={List}/>

                    <Route path="/notfound" render={() => <div>404</div>} />
                    <Redirect from="/" to="/home" exact />
                    {/* 404 一定要写在最后面*/}
                    <Redirect from="*" to="/notfound" />
                </Switch>
            </div>
        )
    }
}

App = withRouter(App);//返回一个新的组件 
export default App;