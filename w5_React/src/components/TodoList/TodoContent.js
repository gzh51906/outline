import React,{Component} from 'react';
import PropTypes from 'prop-types'

import TodoItem from './TodoItem';
import {TodoButton} from './TodoButton'

import { Table,Button} from 'antd';

import MyContext from './MyContext';


class TodoContent extends Component{
    render(){
        console.log('TodoContent:',this.context)
        // let {removeItem,completeItem} = this.props;
        let {removeItem,completeItem} = this.context;
        const columns = [
            {
              title: '#',
              key:'index',
              render: (text,record,idx) => {
                  return idx+1
                },
            },
            {
              title: '待办事项',
              dataIndex: 'content',
              key: 'content',
            },
            {
                title: '预计完成时间',
                dataIndex: 'date',
                key: 'date',
              },
            {
              title: '是否完成',
              dataIndex: 'done',
              key: 'done',
              render(text,record,index){
                // text: done字段对应的值
                //    record：本条数据
                //   index: 当前索引值
                return text?'是':'否'
              }
            },
            {
              title: '操作',
              key: 'actions',
              render: (text,record,idx) => (
                <Button.Group size="small">
                    {/* <Button type="primary" key="done" onClick={completeItem.bind(this,idx)}>完成</Button>
                    <Button type="danger" key="remove" onClick={removeItem.bind(this,idx)}>删除</Button> */}
                    {/* <TodoButton type="primary" clickHandle={completeItem.bind(this,idx)}>完成</TodoButton>
                    <TodoButton type="danger" clickHandle={removeItem.bind(this,idx)}>删除</TodoButton> */}
                    {/* <MyContext.Consumer>
                        {
                            value=>{
                                console.log('value:',value);
                                return <>
                                    <TodoButton type="primary" clickHandle={value.completeItem.bind(this,idx)}>完成</TodoButton>
                                    <TodoButton type="danger" clickHandle={value.removeItem.bind(this,idx)}>删除</TodoButton>
                                </>
                            }
                        }
                    </MyContext.Consumer> */}

                    <TodoButton type="primary" clickHandle={completeItem.bind(this,idx)}>
                        <span>完成</span>
                        <em>complete</em>
                    </TodoButton>
                    <TodoButton type="danger" clickHandle={removeItem.bind(this,idx)}>删除</TodoButton>
                </Button.Group>
              ),
            },
          ];
        return <div>
            <Table columns={columns} dataSource={this.props.data} />
        </div>
    }
}

// 设置静态属性
TodoContent.contextType = MyContext;
// TodoContent.propTypes = {
//     username:PropTypes.string.isRequired,
//     age:function(props,propName,comName){
//         // props : 传入的所有数据对象
//         // propsName ： 当前属性名
//         // comName：当前组件名
//         console.log('age:',props[propName])

//         if(isNaN(props[propName]) || typeof props[propName]!='number'){
//             return new Error(`propName必须是一个数字`)
//         }

//         if(props[propName]<18 || props[propName]>40){
//             return new Error('未成年或过于成熟慎入');
//         }
//     }
// }

export default TodoContent;