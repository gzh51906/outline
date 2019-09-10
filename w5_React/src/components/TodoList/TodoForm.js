import React,{Component} from 'react';

import {Input} from 'antd';

class TodoForm extends Component{
    render(){
        return <div>
            
            <Input.Search enterButton="添加" size="large"/>
        </div>
    }
}

export default TodoForm;