import Vue from 'vue';

import Home from '../pages/Home.vue'
import Cart from '../pages/Cart.vue'
import Login from '../pages/Login.vue'

// 路由
// 1.引入路由
import VueRouter from 'vue-router';

// 2.安装（使用）路由
Vue.use(VueRouter);

// 3. 实例化router并配置参数
let router = new VueRouter({
  // mode:'history',// 默认hash
  routes:[{
    // 当浏览器路径为/home时，渲染Home组件内容
    name:'home',
    path:'/home',
    component:Home
  },{
      // 当浏览器路径为/，重定向到/home
      path:'/',
      redirect:{name:'home'}
    //  component:Home,
  },{
      name:'cart',
    path:'/cart',
    component:Cart
  },{
      name:'login',
    path:'/login',
    component:Login
  }]
});

export default router;