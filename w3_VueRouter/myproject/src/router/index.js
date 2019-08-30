import Vue from 'vue';

import Home from '../pages/Home.vue'
import Cart from '../pages/Cart.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Discover from '../pages/Discover.vue'
import Mine from '../pages/Mine.vue'
import Goods from '../pages/Goods.vue'


// 路由
// 1.引入路由
import VueRouter from 'vue-router';

// 2.安装（使用）路由
Vue.use(VueRouter);

// 3. 实例化router并配置参数
let router = new VueRouter({
    // mode:'history',// 默认hash
    routes: [{
        // 当浏览器路径为/home时，渲染Home组件内容
        name: 'home',
        path: '/home',
        component: Home
    }, {
        // 当浏览器路径为/，重定向到/home
        path: '/',
        redirect: { name: 'home' }
        //  component:Home,
    }, {
        name: 'cart',
        path: '/cart',
        component: Cart,

        // 路由元信息
        meta: { requiresAuth: true }

        // 路由独享的守卫
        // beforeEnter(to,from,next){
        //     console.log('beforeEnter',to,from);
        //     next()
        // }
    }, {
        name: 'login',
        path: '/login',
        component: Login
    }, {
        name: 'mine',
        path: '/mine',
        component: Mine,

        meta: { requiresAuth: true }

        // 定义组件时传参
        // props:{a:100,b:200}, //等效于<Mine v-bind="{a:100,b:200}"/> => <Mine v-bind:a="100" v-bind:b="200"/>
        // props:true, // 等效于<Mine v-bind="$route.params"/>
        // props:function($route){return {}}
    }, {
        name: 'discover',
        path: '/discover',
        component: Discover
    }, {
        name: 'reg',
        path: '/reg',
        component: Reg
    }, {
        // 动态路由，id变量保存在params
        name: 'goods',
        path: '/goods/:id',
        component: Goods
    }]
});

// 路由拦截
router.beforeEach(function(to,from,next){
    console.log('beforeEach',to,from);
    // if(已登录)
    next();

    // else
    // next({
        // path:'/login',
        // query:{target:to.fullPath}
    // })
})

export default router;