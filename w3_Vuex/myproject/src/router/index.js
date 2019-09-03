import Vue from 'vue';
import axios from 'axios';



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
    mode:'history',// 默认hash
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
        component: Discover,

        // 嵌套路由
        // children:[
        //     // 路径为 /discover/shuangzhuang 时，渲染shuangzhuang组件
        //     {
        //         name: 'sz',
        //         path: 'shangzhuang',
        //         // component: shuangzhuang

        //         // 命名路由
        //         components:{
        //             title:shangzhuangTile,
        //             list:shangzhuang
        //         }
        //     },
        //     {
        //         name: 'xz',
        //         path: 'xiazhuang',
        //         component: xiazhuang

                    // meta:{requiresAuth:true}
        //     }
        // ]
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
    console.log('beforeEach',to);

    // 判断目标路由是否需要登录权限
    // if(to.meta.requiresAuth){
    if(to.matched.some(item=>item.meta.requiresAuth)){
        // 判断是否已登录
        let authorization = localStorage.getItem('Authorization');
        if(authorization){
            // 发起校验
            axios.get('http://localhost:1906/verify',{
                headers:{
                    Authorization:authorization
                }
            }).then(res=>{
                window.console.log('then',res)
            })
            next();
        }else{
            next({
                path:'/login',
                query:{targetUrl:to.fullPath}
            })
        }
    }else{
        next();
    }

    
    

    
})


export default router;