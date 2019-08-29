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
            <i :class="item.icon"></i>
            {{item.text}}
            <!-- </router-link> -->
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="5" :offset="1">
        <el-row>
          <el-col :span="12" @click.native="goto('reg')">
            <i class="el-icon-s-custom"></i>
            注册
          </el-col>
          <el-col :span="12" @click.native="goto('login')">
            <i class="el-icon-user"></i>
            登录
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

import "element-ui/lib/theme-chalk/index.css";

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
  methods: {
    changeActive(index, path) {
      console.log(index, path);
      this.active = index;
    },
    goto(path){
      this.$router.push({path})
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
