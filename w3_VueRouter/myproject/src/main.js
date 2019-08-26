import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import Login from './pages/Login.vue'

// 路由
// 1.引入路由
import VueRouter from 'vue-router';

// 2.安装（使用）路由
Vue.use(VueRouter);

// 3. 实例化router并配置参数
let router = new VueRouter({
  routes:[{
    // 当浏览器路由为/home时，渲染Home组件内容
    path:'/home',
    component:Home
  },{
    path:'/cart',
    component:Cart
  },{
    path:'/login',
    component:Login
  }]
});


new Vue({
  // 4.把router实例注入到vue实例中
  router,
  render: h => h(App),
}).$mount('#app')
