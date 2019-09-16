import React,{Component} from 'react';

import store from '@/redux/store';



class Cart extends Component{
    state = {
        totalPrice:0
    }
    changePrice = ()=>{
        // 要修改store上的数据，必须通过唯一的方式：dispatch(action)
        // 调用dispatch()后，内部会自动执行reducer

        let data = store.getState();
        let action = {
            type:'change_total_price',
            price:data.totalPrice+100
        }
        store.dispatch(action);

    }
    componentDidMount(){
        // 监听store的修改
        // 只要store中的数据有修改，则执行subscribe中的回掉函数
        store.subscribe(()=>{
            let data = store.getState();
           this.setState({
               totalPrice:data.totalPrice
           })
        })
    }
    render(){
        let data = store.getState();
        return (
            <div>
                Cart
                <button onClick={this.changePrice}>修改总价{data.totalPrice}</button>
            </div>
        )
    }
}

export default Cart;