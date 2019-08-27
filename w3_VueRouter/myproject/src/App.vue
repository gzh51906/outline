<template>
  <div id="app">
    <el-menu
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="changeActive"
    >
      <el-menu-item :index="item.name" v-for="item in menu" :key="item.name">
        <!-- <router-link :to="item.path" tag="div" active-class="current"> -->
        <i :class="item.icon"></i>
        {{item.text}}
        <!-- </router-link> -->
        </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);

import "element-ui/lib/theme-chalk/index.css";

export default {
  name: "app",
  data(){
    return {
      active:'home',
      menu:[{
        name:'home',
        text:'首页',
        path:'/home',
        icon:'el-icon-s-home'
      },{
        name:'cart',
        text:'购物车',
        path:'/cart',
        icon:'el-icon-shopping-cart-full'
      },{
        name:'login',
        text:'登录',
        path:'/login',
        icon:'el-icon-user'
      }]
    }
  },
  methods:{
    changeActive(index,path){
      console.log(index,path);
      this.active = index;
    }
  },
  created(){
    console.log(this.$route,this.$router);//this.$route获取当前路由信息
    this.active = this.$route.name;
  }
};
</script>

<style>
.current{color:#f00;}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
