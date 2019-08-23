<template>
  <div class="container-fluid">
    <h1>VueCLI</h1>
    <Eleme/>
    <el-date-picker
      v-model="today"
      format="yyyy/M/d"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
     
    <Todolist/>

    <!-- <MySearch buttonText="查询" :data="city"/>
    <MySearch buttonText="搜索" :data="web"/> -->
    <MySearch :data="city">
      <template v-slot:default="scope">查询{{scope}}</template>
      <template v-slot:title="mycity">中国热门城市{{mycity.username}}</template>
    </MySearch>
    <MySearch :data="web">
      <template v-slot:title>h5大前端所学知识</template>
      搜索
    </MySearch>

     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todolist from './components/Todolist.vue';
import MySearch from './components/Search.vue';
import Eleme from './components/Eleme.vue';

export default {
  name: 'app',
  data(){
    return {
      city:['北京','上海','广州','东莞','深圳','武汉','钦州'],
      web:['html','css','javascript','nodejs','php','mongodb','mysql'],
      today:'2019-08-23'
    }
  },
  components: {
    // 注册为局部组件
    Eleme,
    Todolist,
    MySearch
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
