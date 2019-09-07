<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-menu
          :default-active="active"
          class="el-menu-demo"
          mode="horizontal"
          router
          @select="changeActive"
        >
          <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">
            <!-- <router-link :to="item.path" tag="div" active-class="current"> -->
              <el-badge :value="cartlenth" class="item" v-if="item.name=='cart'">
              <i :class="item.icon"></i>
              {{item.text}}
              </el-badge>
              <template v-else>
                <i :class="item.icon"></i>
                {{item.text}}
              </template>
            <!-- </router-link> -->
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-row v-if="logined">
          <el-col :span="12" @click.native="goto('reg')">
            <i class="el-icon-s-custom"></i>
            注册
          </el-col>
          <el-col :span="12" @click.native="goto('login')">
            <i class="el-icon-user"></i>
            登录
          </el-col>
        </el-row>
        <el-row v-else>
          <el-col :span="12" :offset="12">
            <el-button type="text" icon="el-icon-switch-button" @click="logout">退出</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);

// import "element-ui/lib/theme-chalk/index.css";
// import upload from 'element-ui/packages/upload'
// import 'element-ui/lib/upload.css'

import { Row, Col,Menu,MenuItem } from 'element-ui';
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);

export default {
  name: "app",
  data() {
    return {
      active: "/home",
      menu: [
        {
          name: "home",
          text: "首页",
          path: "/home",
          icon: "el-icon-s-home"
        },
        {
          name: "cart",
          text: "购物车",
          path: "/cart",
          icon: "el-icon-shopping-cart-full"
        },
        {
          name: "discover",
          text: "发现",
          path: "/discover",
          icon: "el-icon-search"
        },
        {
          name: "mine",
          text: "我的",
          path: "/mine",
          icon: "el-icon-user-solid"
        }
      ]
    };
  },
  computed:{
    cartlenth(){
      // return this.$store.state.cartlist.length;

      // 模块化后：
      console.log(this.$store)
      return this.$store.state.cart.cartlist.length;
    },
    logined(){
      return !this.$store.state.common.authorization;//''->false
    }
  },
  methods: {
    changeActive(index, path) {
      console.log(index, path);
      this.active = index;
    },
    goto(path){
      this.$router.push({path})
    },
    logout(){
      this.$store.commit('logout');

      if(this.$route.meta.requiresAuth){
        this.$router.push({
          path:'/login',
          query:{targetUrl:this.$route.fullPath}
        })
      }
    }
  },
  created() {
    console.log(this.$route, this.$router); //this.$route获取当前路由信息
    this.active = this.$route.path;
  }
};
</script>

<style>
.current {
  color: #f00;
}
</style>
