import {ADD_TO_CART,REMOVE_CART,CHANGE_QTY,CLEAR_CART} from '../actions/cart'

// Reducer
// 初始state
let defaultState = {
    goodslist:[{
        goods_id:1,
        goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/47/47_06095303389813607_360.jpg',
        goods_name:'xxxx',
        goods_price:998,
        qty:1
    },{
        goods_id:2,
        goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/47/47_06095303389813607_360.jpg',
        goods_name:'ooooo',
        goods_price:198,
        qty:5
    }],
    totalPrice:0
}

function reducer(state=defaultState,action){

    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                goodslist:[action.payload,...state.goodslist]
                // 不要直接修改state中的数据：state.goodslist.unshift(action.payload)
            }

        // action: {type:'change_qty',goods_id,qty}
        case CHANGE_QTY:
            return {
                ...state,
                goodslist:state.goodslist.map(item=>{
                    if(item.goods_id === action.goods_id){
                        item.qty = action.qty
                    }
                    return item;
                })
            }
        
        // {type:'remove_cart',goods_id}
        case REMOVE_CART:
            return {
                ...state,
                goodslist:state.goodslist.filter(item=>item.goods_id!=action.goods_id)
            }
        
        // {type:'clear_cart'}
        case CLEAR_CART:
            return {
                ...state,
                goodslist:[]
            }

        // 当所有跳转不满足时，返回初始state
        default:
            return state;
    }
}

export default reducer;