import React,{Component} from 'react';

import {Route,Redirect,Switch} from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Reg from './pages/Reg'

class App extends Component{
    render(){
        return (
            <div>
                App
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/" component={Home}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </div>
        )
    }
}

export default App;