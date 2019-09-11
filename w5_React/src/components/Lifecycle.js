import React, { Component } from 'react'; console.log(React)
class Lifecycle extends Component {
    constructor() {
        super();
        console.log('initial');

        this.state = {
            username: 'jingjing',
            age:32
        }
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
        setTimeout(()=>{

            this.forceUpdate();
        },2000)
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    // 特殊生命周期函数
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState){
        // console.log(nextState,this.state)
        // 必须返回true或false
        // true : 重渲染
        // false: 不渲染

        // 一般用于性能优化，根据不同的条件选择性返回true,false
        // return nextState.age>=40;
        // if(nextState.username == this.state.username){
        //     return false
        // }

        return true;
        
        

    }

    render() {
        console.log('render',this);
       
        return (
            <div>
                生命周期函数演示
                <h4>

                    {this.state.username} - {this.state.age}
                </h4>
                <button onClick={()=>{
                    this.setState({
                        age:this.state.age+1
                    })
                    
                }}>慢慢变老</button>
                <button onClick={()=>{
                    this.setState({
                        username:'jingjing plus'
                    })
                }}>改名</button>

                {/* <div>active:{this.props.active}</div> */}
            </div>
        )
    }
}

export default Lifecycle;