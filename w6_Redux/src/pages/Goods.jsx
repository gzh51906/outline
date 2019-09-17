import React,{Component} from 'react';
import {Button} from 'antd';
import Api from '@/api';

class Goods extends Component{
    state = {
        data:{}
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
                ...goods_info
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
                    <Button size="large" icon="inbox">添加到购物车</Button>
                    <Button type="danger" size="large" icon="shopping-cart">购买</Button>
                </Button.Group>
            </div>
        )
    }
}

// Goods = withAjax(Goods);
export default Goods;