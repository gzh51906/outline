import React, { Component } from 'react';

import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { Menu, Icon, Badge } from 'antd';
import {connect} from 'react-redux';

import Home from '~/Home';
import Mine from '~/Mine';
import Discover from '~/Discover';
import Cart from '~/Cart';
import Goods from '~/Goods';
import Login from '~/Login'
import Reg from '~/Reg'

import img1 from './imgs/jingjing.png';console.log('jj:',img1)
import img2 from './imgs/11.png';console.log('11:',img2)

class App extends Component {
    state = {
        current: '/home',
        menu: [{
            path: '/home',
            text: '首页',
            icon: 'home',
            name: 'home'
        }, {
            path: '/discover',
            text: '发现',
            icon: 'eye',
            name: 'discover'
        }, {
            path: '/cart',
            text: '购物车',
            icon: 'shopping-cart',
            name: 'cart'
        }, {
            path: '/mine',
            text: '我的',
            icon: 'user',
            name: 'mine'
        }]
    }


    goto = (path) => {
        // 编程式导航：通过代码实现跳转
        // 如何获取history

        this.props.history.push(path)

    }

    changeMenu = ({ key }) => {
        this.setState({
            current: key
        });
        this.goto(key)
    }

    componentDidMount() {

    }

    render() {
        let {cartlength} = this.props;
        return (
            <div>
                <Menu
                    onClick={this.changeMenu}
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    {
                        this.state.menu.map(item => {
                            return <Menu.Item key={item.path}>
                                {
                                    item.name === 'cart' 
                                    ? 
                                    <Badge count={cartlength}>
                                        <Icon type={item.icon} />
                                        {item.text}
                                    </Badge>
                                    :
                                    <>
                                        <Icon type={item.icon} />
                                        {item.text}
                                    </>
                                }
                                

                            </Menu.Item>
                        })
                    }


                </Menu>
                <div style={{ padding: 20 }}>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/reg" component={Reg} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/mine" component={Mine} />

                        {/* 动态路由 */}
                        <Route path="/goods/:id" component={Goods} />

                        {/* 嵌套路由 */}
                        <Route path="/discover" component={Discover} />

                        <Route path="/notfound" render={() => <div>404</div>} />
                        <Redirect from="/" to="/home" exact />
                        {/* 404 一定要写在最后面*/}
                        <Redirect from="*" to="/notfound" />
                    </Switch>
                </div>
                <img src="./imgs/jingjing.png"/>
                <img src="./imgs/11.png"/>
            </div>
        )
    }
}

App = withRouter(App);//返回一个新的组件 
let mapStateToProps = (state)=>{
    return {
        cartlength:state.cart.goodslist.length
    }
}
App = connect(mapStateToProps)(App);
export default App;