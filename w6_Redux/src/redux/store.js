import { createStore } from 'redux';

// Reducer
// 初始state
let defaultState = {
    goodslist:[],
    totalPrice:998
}

function reducer(state=defaultState,action){
    console.log(state,action)
    switch(action.type){
        case 'change_total_price':
            return {
                ...state,
                totalPrice:action.price
            }

        // 当所有跳转不满足时，返回初始state
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;