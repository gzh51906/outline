import axios from 'axios';

export default {
    state:{
        cartlist:[{
            goods_id:1,
            goods_name:'huawei Mate30 pro',
            qty:1,
            goods_price:4999
        },{
            goods_id:2,
            goods_name:'xiaomi mix3',
            qty:2,
            goods_price:2999
        }]
    },
    getters:{
        totalPrice:function(state){
            return state.cartlist.reduce(function(prev,item){
                // prev：前一次reduce的返回值
                return prev+item.goods_price*item.qty
            },0)
        }
    },

    //修改state的唯一方式：mutations
    // 触发mutation: store.commit('addItem',{})
    mutations:{
        addItem(state,goods){
            state.cartlist.push(goods)
        },
        removeItem(state,id){
            state.cartlist = state.cartlist.filter(item=>item.goods_id!=id);
        },
        changeQty(state,{qty,id}){console.log('changeQty:',qty,id)
            state.cartlist = state.cartlist.map(item=>{
                if(item.goods_id === id){
                    item.qty = qty;
                }
                return item;
            })
        },
        clearCart(state){
            state.cartlist = []
        }
    },
    actions:{
        changeQtyAsync(context,{id,qty}){
            // context：类似与store
            console.log('changeQtyAsync:',qty,id)
            // 需要向服务器获取库存信息，再修改数量
            axios.get('http://localhost:1906/goods/kucun').then(({data})=>{
                let kucun = data.data;
                // 库存不足
                if(qty>kucun){
                    qty = kucun;
                }
                context.commit('changeQty',{id,qty})
            })

            return qty;
        }
    }
}