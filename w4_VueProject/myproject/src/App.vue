<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" :src="imgulr">
    <img alt="Vue logo" src="/img/laoxie.jpg">
    <img src="../public/img/a.jpg"/>
    <img src="/img/a.jpg"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

let goods = {
  imgurl:'wenjing.jpg'
}
export default {
  name: 'app',
  data(){
    let res = require.context('./assets',false,/\.+(jpe?g|png)$/);console.dir(res)
    let cache = {};
    res.keys().forEach(item=>{
      cache[item] = res(item)
    });
    console.log(cache,res('./'+goods.imgurl));
    return {
      // imgulr:require('./assets/'+goods.imgurl),// /img/laoxie.xxx.jpg
      imgulr:res('./'+goods.imgurl),// /img/laoxie.xxx.jpg
    }
  },
  components: {
    HelloWorld
  },
  created(){
    // data.forEach(item=>{
    //   // require.context(dir)
    //   item.imgurl = require('./assets/img'+item.imgurl)
    // })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
