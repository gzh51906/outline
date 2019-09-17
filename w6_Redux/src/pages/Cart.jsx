import React, { Component } from 'react';

import {List,Avatar,InputNumber,Button,Row, Col} from 'antd';
import { connect } from 'react-redux';

import '@/style/common.scss';

class Cart extends Component {
    state = {
        totalPrice: 0
    }
    changePrice = () => {
        // 要修改store上的数据，必须通过唯一的方式：dispatch(action)
        // 调用dispatch()后，内部会自动执行reducer

        // let data = store.getState();
        // let action = {
        //     type:'change_total_price',
        //     price:data.totalPrice+100
        // }
        // store.dispatch(action);

    }
    componentDidMount() {
        // 监听store的修改
        // 只要store中的数据有修改，则执行subscribe中的回掉函数
        // store.subscribe(()=>{
        //     let data = store.getState();
        //    this.setState({
        //        totalPrice:data.totalPrice
        //    })
        // })

        console.log('Cart:', this.props)
    }
    changeQty = ()=>{

    }
    render() {
        let {goodslist,totalPrice} = this.props;
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={goodslist}
                    renderItem={item => (
                        <List.Item
                        actions={[<Button size="small" ghost shape="circle" icon="delete" type="danger"></Button>]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.goods_image} />}
                                title={item.goods_name}
                                description={<div><span className="price"><span>{item.goods_price.toFixed(2)}</span> &times; </span><InputNumber size="small" min={1} max={5} defaultValue={1} onChange={this.changeQty} /></div>}
                            />
                        </List.Item>
                    )}
                />
                <Row gutter={20}>
                    <Col span={12}>
                        <Button type="danger" size="small" icon="delete">清空购物车</Button>
                    </Col>
                    <Col span={12} style={{textAlign:'right'}}>
                        <div className="price">总价：<span>{totalPrice.toFixed(2)}</span></div>
                    </Col>
                </Row>
            </div>
        )
    }
}

let mapStateToProps = function (state) {
    // 需要映射什么到Cart组件的props就return什么出去
    return {
        goodslist: state.goodslist,
        totalPrice: state.goodslist.reduce((prev, item) => prev + item.goods_price * item.qty, 0)
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        add2cart() {
            dispatch({ type: 'add_to_cart', payload: { name: 'xxx', price: 998, qty: 1 } })
        }
    }
}

Cart = connect(mapStateToProps)(Cart);

export default Cart;