import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { List, Avatar, InputNumber, Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
import {clear,remove,changeQty} from '@/redux/actions/cart'
import allCreator from '@/redux/actions/cart';

import '@/style/common.scss';

class Cart extends Component {
    // changeQty = (goods_id,qty)=>{console.log(goods_id,qty)
    //     let {dispatch} = this.props;

    //     dispatch({type:'change_qty',goods_id,qty})
    // }
    render() {
        console.log(this.props)
        let { goodslist, totalPrice, clearCart, removeCart, changeQty } = this.props;
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={goodslist}
                    renderItem={item => {
                        // <Button size="small" ghost shape="circle" icon="delete" type="danger" onClick={()=>{
                        //     dispatch({type:'remove_cart',goods_id:item.goods_id});
                        // }}></Button>
                        return <List.Item
                            actions={[<Button
                                size="small"
                                ghost
                                shape="circle"
                                icon="delete"
                                type="danger"
                                onClick={removeCart.bind(this, item.goods_id)}
                            ></Button>]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.goods_image} />}
                                title={item.goods_name}
                                description={<div>
                                    <span className="price">
                                        <span>{item.goods_price.toFixed(2)}</span>
                                        &times;
                                    </span>
                                    <InputNumber
                                        size="small"
                                        min={1}
                                        max={5}
                                        value={item.qty}
                                        defaultValue={1}
                                        onChange={changeQty.bind(null, item.goods_id)}
                                    /></div>}
                            />
                        </List.Item>
                    }
                    }
                />
                <Row gutter={20}>
                    <Col span={12}>
                        {/* <Button type="danger" size="small" icon="delete" onClick={()=>{
                            dispatch({type:'clear_cart'})
                        }}>清空购物车</Button> */}

                        <Button type="danger" size="small" icon="delete" onClick={clearCart}>清空购物车</Button>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <div className="price">总价：<span>{totalPrice.toFixed(2)}</span></div>
                    </Col>
                </Row>
            </div>
        )
    }
}

let mapStateToProps = function (state) {
    let { goodslist } = state.cart;
    // 需要映射什么到Cart组件的props就return什么出去
    return {
        goodslist,
        totalPrice: goodslist.reduce((prev, item) => prev + item.goods_price * item.qty, 0)
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        changeQty(goods_id, qty) {
            // dispatch({ type: 'change_qty', goods_id, qty })
            dispatch(changeQty(goods_id,qty))
        },
        removeCart(goods_id) {
            // dispatch({ type: 'remove_cart', goods_id });
            dispatch(remove(goods_id));
        },
        clearCart() {
            // dispatch({ type: 'clear_cart' })
            dispatch(clear())
        }
    }

    // 把actions/cart.js中 export default的所有属性作为props传入Cart组件
    // return bindActionCreators(allCreator,dispatch)
}

Cart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default Cart;