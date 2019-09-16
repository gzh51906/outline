import React, { Component } from 'react';

import Api from '@/api';

import { List } from 'antd'

class Home extends Component {
    state = {
        goodslist: []
    }
    async componentDidMount() {
        let { datas: { goods_list: goodslist } } = await Api.get({
            act: 'goods',
            op: 'goods_list',
            keyword: '',
            page: 10,
            curpage: 1
        });

        console.log(goodslist);

        this.setState({
            goodslist
        });
    }
    goto = (id)=>{
        this.props.history.push(`/goods/${id}`)
    }
    render() {
        let {goodslist} = this.state;
        return (
            <div>
                <List
                    grid={{
                        gutter: 46,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    dataSource={goodslist}
                    renderItem={item => (
                        <List.Item onClick={this.goto.bind(this,item.goods_id)}>
                            <img src={item.goods_image_url} style={{width:'90%'}}/>
                            <h4>{item.goods_name}</h4>
                            <p className="price">
                                <del>{item.goods_marketprice}</del>
                                <span>{item.goods_price}</span></p>
                        </List.Item>
                    )}
                />

            </div>
        )
    }
}

export default Home;