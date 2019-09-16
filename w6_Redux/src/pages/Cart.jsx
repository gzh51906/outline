import React,{Component} from 'react';

// import store from '@/redux/store';

import {connect} from 'react-redux';

class Cart extends Component{
    state = {
        totalPrice:0
    }
    changePrice = ()=>{
        // 要修改store上的数据，必须通过唯一的方式：dispatch(action)
        // 调用dispatch()后，内部会自动执行reducer

        // let data = store.getState();
        // let action = {
        //     type:'change_total_price',
        //     price:data.totalPrice+100
        // }
        // store.dispatch(action);

    }
    componentDidMount(){
        // 监听store的修改
        // 只要store中的数据有修改，则执行subscribe中的回掉函数
        // store.subscribe(()=>{
        //     let data = store.getState();
        //    this.setState({
        //        totalPrice:data.totalPrice
        //    })
        // })

        console.log('Cart:',this.props)
    }
    render(){
        // let data = store.getState();
        return (
            <div>
                Cart
                <button onClick={this.changePrice}>修改总价{this.props.totalPrice}</button>
                <button onClick={()=>{
                    this.props.dispatch({type:'add_to_cart',payload:{name:'xxx',price:998,qty:1}})
                }}>添加到购物车</button>
            </div>
        )
    }
}

let mapStateToProps = function(state){
    // 需要映射什么到Cart组件的props就return什么出去
    return {
        goodslist:state.goodslist,
        totalPrice:state.goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
    }
}

let mapDispatchToProps = function(dispatch){
    return {
        add2cart(){
            dispatch({type:'add_to_cart',payload:{name:'xxx',price:998,qty:1}})
        }
    }
}

Cart = connect(mapStateToProps)(Cart);

export default Cart;