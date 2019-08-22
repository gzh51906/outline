<template>
  <div class="container-fluid">
    <h1>VueCLI</h1>
    <Todolist/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todolist from './components/Todolist.vue';

export default {
  name: 'app',
  components: {
    // 注册为局部组件
    HelloWorld,
    Todolist
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
