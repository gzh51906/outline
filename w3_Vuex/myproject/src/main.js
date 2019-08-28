import Vue from 'vue'
import App from './App.vue'

import store from './store'

import router from './router'
import axios from 'axios';

Vue.config.productionTip = false

// baseURL：axios所有的请求都基于这个路径发起 
// axios.defaults.baseURL = 'https://www.nanshig.com/mobile/index.php'

// 利用axios实例（axios.create()）实现个性化配置
// 以下instance功能与axios一致
const nanshig = axios.create({
  // 默认配置
  baseURL: 'https://www.nanshig.com/mobile/index.php'
});


// 把axios写入Vue原型，方便子组件调用
Vue.prototype.$axios = axios;
Vue.prototype.$nanshig = nanshig;

new Vue({
  // 4.把router实例注入到vue实例中
  router,

  // 4. 把store注入Vue实例
  store,
  render: h => h(App),
}).$mount('#app')
