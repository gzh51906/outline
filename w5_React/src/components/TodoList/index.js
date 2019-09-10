import React,{Component} from 'react';

import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

class TodoList extends Component{
    render(){
        return (
            <div style={{padding:'15px'}}>
                <TodoForm/>
                <TodoContent/>
            </div>
        )
    }
}

export default TodoList;