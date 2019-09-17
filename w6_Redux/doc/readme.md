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

* Redux梳理
    * 核心概念
        * store
            * store.dispatch(action)
        * reducer
            * 纯函数
            * 接收state & action参数
            * 返回新的State
        * action
            * 格式：`{type:'add_to_cart',payload:xxxx}`
            * 发起action： store.dispacth(action)
            ```js

            ```
        
    * 使用步骤
        1. 创建store
        ```js
            import {createStore} from 'redux';

            let store = createStore(reducer);
        ```
        2. 定义Reducer
        ```js
            let defaultState = {
                goodslist:[],
                totalPrice:0
            }
            function reducer(state=defaultState,action){
                //reducer的任务：修改state，并返回修改后的state
                switch(action.type){
                    // store.dispatch({type:'add_to_cart',payload:{id,name,price,qty}})
                    case 'add_to_cart':
                        return {
                            ...state,
                            goodslist:[action.payload,...state.goodslist]
                            // 不要直接修改state中的数据：state.goodslist.unshift(action.payload)
                        }
                    
                    default:
                        return state
                }
            }
        ```
        3. 操作state
            * 获取：store.getState()
            * 修改：store.dispatch(action)
            * 监听：store.subscribe(fn)

* react-redux
    * 是一个利用context与高阶组件连接Redux与React组件的工具
    * 原理：把redux数据作用props传入组件
    * 使用步骤
        1. 利用`<Provider/>`组件提供store
        ```js
            <Provider store={store}>
                <HashRouter>
                    <App/>
                </HashRouter>
            </Provider>
        ```
        2. 利用高阶组件`connect()()`定义传入组件的props
            * mapStateToProps
            * mapDispathToProps
* 函数柯里化

## day6-2

### 复习
* Redux
    * 核心
        * Store
            * 创建：createStore(reducer)
            * 方法
                * dispatch()    修改
                * getState()    获取
                * subscribe()   监听
        * Reducer
            * 纯函数
            * 参数
                * state
                * action
            * 操作
                * 初始化state
                * 根据action的不同实现相应操作
                * 返回一个新的state
        * Action
            * 格式：{type:'xxx'}
            * 发起action
                * store.dispatch(action)
* React-redux
    * 组件：`<Provider/>`
    * 高阶组件：`connect()()`
    * 使用步骤
        1. 利用<Provider/>提供store（原理：context）
        2. 利用`connect()()`高阶组件把store数据通过props传入组件