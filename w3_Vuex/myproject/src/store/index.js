import Vue from 'vue';

// 1. 引入
import Vuex from 'vuex';

// 2. 安装（使用）
Vue.use(Vuex);


// 3. 实例化并配置参数
let store = new Vuex.Store({
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
        changeQty(state,{qty,id}){
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
    }
});



export default store;