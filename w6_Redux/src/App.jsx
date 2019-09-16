import React,{Component} from 'react';

import {Route,Switch,Redirect,NavLink} from 'react-router-dom';

import Home from '~/Home';
import Mine from '~/Mine';
import Discover from '~/Discover';
import Cart from '~/Cart';
import Goods from '~/Goods';

// 引入store
import store from '@/redux/store';

const allComponent = {
    Home,
    Mine,
    Discover,
    Cart
}

class App extends Component{
    state = {
        menu:[{
            text:'首页',
            name:'Home',
            path:'/home'
        },{
            text:'我的',
            name:'Mine',
            path:'/mine'
        },{
            text:'发现',
            name:'Discover',
            path:'/discover'
        },{
            text:'购物车',
            name:'Cart',
            path:'/cart'
        }]
    }
    render(){
        let {menu} = this.state;

        // 获取Reudx数据
        let data = store.getState();
        console.log('store:',data);
        
        return (
            <div>
                <ul>
                    {
                       menu.map(item=><li key={item.name}>
                            <NavLink to={item.path} activeStyle={{color:'#f00'}}>{item.text}</NavLink>
                        </li>)
                    }
                </ul>
                <Switch>
                    {
                        menu.map(item=>{
                            return <Route 
                            key={item.name}
                            path={item.path} 
                            component={allComponent[item.name]}/>
                        })
                    }
                    <Route path="/goods/:id" component={Goods}/>
                    <Redirect from="/" to="/home" exact/>
                </Switch>
            </div>
        )
    }
}

export default App;