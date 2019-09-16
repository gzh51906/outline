import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import { Route, Redirect, Switch, NavLink ,withRouter} from 'react-router-dom';

class Discover extends Component{
    state={
        current:'/discover/phone',
        menu: [{
            path: '/phone',
            text: '手机',
            icon:'phone',
            name: 'phone'
        }, {
            path: '/computer',
            text: '电脑',
            icon:'computer',
            name: 'computer'
        }, {
            path: '/pad',
            text: '平板',
            icon:'pad',
            name: 'pad'
        }, {
            path: '/acc',
            text: '配件',
            icon:'acc',
            name: 'acc'
        }]
    }
    goto = ({key})=>{
        this.setState({
            current:key
        })
        this.props.history.push(key)
    }
    render(){
        console.log('Discover:',this.props);
        let {path,url} = this.props.match
        return (
            <div>
                商品列表
                <Menu
                onClick={this.goto} 
                selectedKeys={[this.state.current]} 
                >
                    {
                        this.state.menu.map(item=>{
                            return <Menu.Item key={url+item.path}>
                                <Icon type={item.icon} />
                                {item.text}
                            </Menu.Item>
                        })
                    }
                    

                </Menu>
                <Switch>
                    <Route path={path+"/phone"} render={()=><div>手机</div>}/>
                    <Route path={path+"/computer"} render={()=><div>电脑</div>}/>
                    <Route path={path+"/pad"} render={()=><div>平板</div>}/>
                    <Route path={path+"/acc"} render={()=><div>配件</div>}/>
                    <Redirect from={path} to={this.state.current}/>
                </Switch>
            </div>
        )
    }
}

export default Discover;