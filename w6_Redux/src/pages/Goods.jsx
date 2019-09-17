import React,{Component} from 'react';
import {Button} from 'antd';
import Api from '@/api';
import {connect} from 'react-redux'
import {changeQty,add} from '@/redux/actions/cart'

class Goods extends Component{
    state = {
        data:{}
    }
    add2cart = ()=>{
        let {goodslist,dispatch} = this.props;
        let {goods_id,goods_image,goods_price,goods_name} = this.state.data
        let goods = {
            goods_id,
            goods_name,
            goods_image,
            goods_price,
            qty:1
        }
        // 判断商品是否已经存在购物车
        // 存在：qty++
        // 不存在：add_to_cart,qty=1
        let current = goodslist.filter(item=>item.goods_id === goods_id)[0];
        if(current){
            dispatch({type:'change_qty',goods_id,qty:current.qty+1})
        }else{
            dispatch({type:'add_to_cart',payload:goods})
        }

        
    }
    buy = ()=>{
        let {history} = this.props;
        this.add2cart()
        history.push('/cart');
    }
    async componentDidMount(){
        let {id} = this.props.match.params;

        // this.props.get()

        let {datas} = await Api.get({
            act:'goods',
            op:'goods_detail',
            goods_id:id,
            key:''
        })

        console.log('datas:',datas)
        let {goods_image,goods_info} = datas;
        this.setState({
            data:{
                goods_image,
                ...goods_info,
                goods_price:goods_info.goods_price*1
            }
        })
    }
    render(){
        console.log('Goods:',this.props);
        let {data} = this.state;
        return (
            <div>
                <img src={data.goods_image}/>
                <h1>{data.goods_name}</h1>
                <p className="price"><del>{data.goods_marketprice}</del><span>{data.goods_price}</span></p>
                <Button.Group>
                    <Button size="large" icon="inbox" onClick={this.add2cart}>添加到购物车</Button>
                    <Button type="danger" size="large" icon="shopping-cart" onClick={this.buy}>购买</Button>
                </Button.Group>
            </div>
        )
    }
}
let mapStateToProps = (state)=>{
    return {
        goodslist:state.cart.goodslist
    }
}
let mapDispatchToProps = (dispatch)=>{
    // 在这里获取组件state, redux中的state
    return {
        dispatch
    }
}
Goods = connect(mapStateToProps,mapDispatchToProps)(Goods);
export default Goods;