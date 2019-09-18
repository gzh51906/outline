/**
 * Action Creator
 */
export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_QTY = 'CHANGE_QTY';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_CART = 'REMOVE_CART';

export function add(goods){
    return {type:ADD_TO_CART,payload:goods}
}

export function changeQty(goods_id,qty){
    return {type:CHANGE_QTY,goods_id,qty}
}

export function clear(){
    return {type:CLEAR_CART}
}

export function remove(goods_id){
    return {type:REMOVE_CART,goods_id}
}

export default {
    add,
    changeQty,
    clear,
    remove
}