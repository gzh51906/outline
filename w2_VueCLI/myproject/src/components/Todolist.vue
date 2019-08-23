<template>
  <div class="todolist">{{num}}
    <!-- <TodoForm :addItem="addItem"></TodoForm> -->
    <!-- 等效于：TodoForm.$on('add' ,addItem) -->
    <TodoForm ref="todoForm" v-on:add="addItem" v-bind:changenum.sync="num"></TodoForm>
    <!-- <TodoContent :datalist="datalist" :completeitem="completeItem" :removeitem="removeItem" ></TodoContent> -->
    <TodoContent :datalist="datalist"></TodoContent>
  </div>
</template>
<script>

/**
    深层次组件传参: Bus总线（利用Vue实例作为中间桥梁实现数据传输）
    * $on()   自定义事件
    * $off()  移除事件
    * $emit() 触发事件
    
    * 传输什么：idx
      * 接收方：Todolist
        * 自定义事件(放在生命周期函数中)
      * 发送方：TodoItem
        * 触发自定义事件
 */
import "bootstrap/dist/css/bootstrap.css";
// 引入组件
import TodoForm from "./TodoFrom.vue";
import TodoContent from "./TodoContent.vue";

import Bus from '../bus.js';

export default {
  data() {
    return {
      datalist: [
        {
          content: "完成Vue团队项目",
          time: "2019-9-9",
          done: false
        }
      ],

      // 测试
      num:10
    };
  },
  components: {
    TodoForm,
    TodoContent
  },
  methods: {
    addItem(content) {
      let data = {
        content,
        time: Date.now(),
        done: false
      };
      this.datalist.push(data);
    },
    removeItem(idx) {
      this.datalist.splice(idx, 1);
    },
    completeItem(idx) {
      this.datalist.forEach((item, i) => {
        if (i === idx) {
          item.done = true;
        }
      });
    },
    changeNum(){
      this.num++
    }
  },
  mounted(){


    // 自定义事件
    Bus.$on('remove',idx=>{
      this.removeItem(idx);
    })

    .$on('complete',idx=>{
      this.completeItem(idx)
    })
  }
};
</script>