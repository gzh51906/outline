import Vue from 'vue'
import App from './App.vue'

import store from './store'

import router from './router';console.log(router)
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

// 请求拦截
axios.interceptors.request.use((config)=>{
  // Do something before request is sent
  // 显示loading

  if(!config.params){
    config.params = {}
  }
  config.params.abc = 100;

  // config.headers.Authorization = 
  return config;
}, function (error) {
  // Do something with request error
  // 关闭loading
  return Promise.reject(error);
})

// 响应拦截
axios.interceptors.response.use(function (res) {
  // Do something with response data
  // {data:{
  //     code:1,
  //     data:{authorization}
  // }}
  if(res.data.data.authorization === false){
      router.push({
        path:'/login',
        targetUrl:router.currentRoute.fullPath
      })
  }

  // 关闭loading

  // 必须返回res，确保axios请求的then方法中获取到该数据
  return res;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
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
