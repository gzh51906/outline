<template>
    <el-carousel height="150px" type="card">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="small">{{ item }}</div>
      </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* 
    局部样式（组件样式） 
    原理：
        1. 给html结构添加data-v-[hash]自定义属性
        2. 利用css属性选择器:div[data-v-xxxx]
*/
.small{
  height:100%;line-height:150px;text-align: center;
  background-color:#58bc58;
}
div{color:#ff0;}
</style>