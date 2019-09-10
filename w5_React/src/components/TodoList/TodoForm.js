import React,{Component} from 'react';

import {Input} from 'antd';

class TodoForm extends Component{
    constructor(){
        super();

        this.state = {
            keyword:''
        }

        this.add = this.add.bind(this)
        this.changeKeyword = this.changeKeyword.bind(this)
    }
    add(value,e){
        let {addItem} = this.props;

        addItem(value);

        this.setState({
            keyword:''
        })
    }
    changeKeyword(e){
        // console.log(username,e)
        let keyword = e.currentTarget.value;
        this.setState({
            keyword
        })
    }
    render(){
        
        return <div>
            <Input.Search 
            value={this.state.keyword}
            onChange={this.changeKeyword}
            enterButton="添加" 
            size="large" 
            onSearch={this.add}/>
        </div>
    }
}

export default TodoForm;