<template>
  <div class="todolist">
    <TodoForm :additem="addItem"></TodoForm>
    <TodoContent :datalist="datalist" :completeitem="completeItem" :removeitem="removeItem" ></TodoContent>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
// 引入组件
import TodoForm from "./TodoFrom.vue";
import TodoContent from "./TodoContent.vue";
export default {
  data() {
    return {
      datalist: [
        {
          content: "完成Vue团队项目",
          time: "2019-9-9",
          done: false
        }
      ]
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
    }
  }
};
</script>