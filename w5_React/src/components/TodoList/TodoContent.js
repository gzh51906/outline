import React,{Component} from 'react';

import TodoItem from './TodoItem';

import { Table,Button} from 'antd';

const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key:'index',
      render: idx => {idx+1},
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
    },
    {
      title: '操作',
      key: 'actions',
      render: () => (
        <div>
            <Button>点我</Button>
        </div>
      ),
    },
  ];

const data = []

class TodoContent extends Component{
    render(){
        return <div>
            <Table columns={columns} dataSource={data} />
        </div>
    }
}

export default TodoContent;