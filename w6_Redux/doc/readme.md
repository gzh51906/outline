# Redux

## day6-1
* 概念
    * React
    * Flux
        * Vuex  针对Vue应用的状态管理工具
        * Redux  
        * Mobx
    * React-redux   用于连接React 和 Redux的工具

* Redux核心概念
    * Store 是一个对象
        > 一个应用只能有一个Store，store中的数据可以被直接访问，但只能通过提供的reducer进行更新
        * 创建
        ```js
            import { createStore } from 'redux';
            const store = createStore(reducer);//reducer为一个纯函数，用于设定state修改逻辑（如何修改state中的数据）
        ```
        * 方法(重要)
            * store.getState()  获取redux上的数据
            * store.dispatch(action) 操作数据
            * store.subscribe(fn) 监听数据修改
    * Reducer
        >Reducer 必须是一个纯函数，用于指定state修改逻辑，它接受当前 state 和 action 作为参数，并根据state和action的值返回新的state
        * 纯函数
        * 接收state 和 action参数
        * 返回新的state
    * Action
        >Action是一个对象，用于定义如何改变state，是用户改变 State 的唯一方式，

        * 格式：`{type:'UPDATE_CART',payload}`

* react组件更新方式
    * props修改
    * state修改
    * 强制刷新forceUpdate()