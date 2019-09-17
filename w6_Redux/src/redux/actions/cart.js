/**
 * Action Creator
 */
export function add(goods){
    return {type:'add_to_cart',payload:goods}
}

export function changeQty(goods_id,qty){
    return {type:'change_qty',goods_id,qty}
}

export function clear(){
    return {type:'clear_cart'}
}

export function remove(goods_id){
    return {type:'change_qty',goods_id}
}

export default {
    add,
    changeQty,
    clear,
    remove
}