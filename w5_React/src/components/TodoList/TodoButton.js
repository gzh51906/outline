import React from 'react';

import { Button } from 'antd';

// function TodoButton(){
//     return <button>点我</button>
// }

// export default TodoButton;

export const TodoButton = ({type,clickHandle,children})=>{
    console.log(children, React.Children)
    return (
        <Button type={type} onClick={clickHandle}>{children}</Button>
    )
}