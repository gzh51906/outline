import React from 'react';

import Card from './components/Card'

// 函数组件：纯函数
// function App(){
//     return <div>
//         JSX的前世今生
//     </div>
// }

// 类组件：
class App extends React.Component{
    // 数据
    constructor(){
        super();

        this.state = {
            //默认显示卡片
            active:0,
            cards:[
                {
                    name:'laoxie',
                    age:18,
                    gender:'男',
                    photo:'img/laoxie.jpg'
                },
                 {
                    name:'lemon',
                    age:32,
                    gender:'女',
                    photo:'img/lemon.jpg'
                },
                 {
                    name:'tiantian',
                    age:24,
                    gender:'男',
                    photo:'img/tiantian.jpg'
                },
                 {
                    name:'wenjing',
                    age:24,
                    gender:'女',
                    photo:'img/wenjing.jpg'
                },
                 {
                    name:'laoyao',
                    age:24,
                    gender:'男',
                    photo:'img/laoyao.jpg'
                }
           ]
        }
    }

    handleNext(){
        let active = this.state.active+1;
        if(active>=this.state.cards.length){
            active = 0;
        }
        // **事件处理函数默认没有this
        // 修改active
        // 报错： Cannot read property 'setState' of undefined
        // 翻译：不能读取undefined的setState属性

        // 修改state唯一方式：setState
        this.setState({
            active
        })
    }

    // 必须有一个render方法
    // render方式中的this指向实例
    render(){
        let {cards,active} = this.state;
        return <div>
            <button onClick={this.handleNext.bind(this)}>下一张</button>
            <Card data={cards[active]}/>
        </div>
    }
}

export default App;