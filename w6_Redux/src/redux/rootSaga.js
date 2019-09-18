/**
 * 生成器函数
 * 执行后，得到一个迭代器Iterator
    * next：调用next方法返回{value,done}
 */
import { call,apply, put, takeEvery, takeLatest,delay } from 'redux-saga/effects';
import {CHANGE_QTY,changeQty} from './actions/cart'

import Api from '@/api'

function* helloSaga(){
    yield console.log('hello saga');
}

function* getKucun({goods_id,qty}){
    // 发起请求获取库存,并与qty进行对比
    // Api.getKucun()
    const data = yield call(Api.getKucun);//
    console.log(6666,goods_id,qty)
    // 把qty与库存进行对比，qty<=库存：
    if(qty>data.data){
        qty = data.data
    }

    // yield put({type:CHANGE_QTY,goods_id,qty})
    yield put(changeQty(goods_id,qty))
}

function* rootSaga() {
    // 监听`HELLO_SAGA`动作，
    // 当组件中调用dispatch({type:'HELLO_SAGA'})时，执行helloSaga函数
    yield takeLatest("HELLO_SAGA", helloSaga);
    yield takeLatest("CHANGE_QTY_ASYNC", getKucun);
}

export default rootSaga;