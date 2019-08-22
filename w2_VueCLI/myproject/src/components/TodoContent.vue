<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col"><input type="checkbox"/>全选</th>
                <th scope="col">#</th>
                <th scope="col">待办事项</th>
                <th scope="col">完成时间</th>
                <th scope="col">是否完成</th>
                <th scope="col">操作</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr is="todo-item" v-for="(item,idx) in datalist" :data="item" :idx="idx"></tr> -->
            <!-- <TodoItem 
            v-for="(item,idx) in datalist" 
            :data="item" :idx="idx" :key="item.time" 
            :completeitem="completeitem" :removeitem="removeitem"
            /> -->

            <TodoItem 
            v-for="(item,idx) in datalist" 
            :data="item" :idx="idx" :key="item.time" 
            />
        </tbody>
    </table>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
    name:'TodoContent',
    // props:['datalist','removeitem','completeitem'],
    props:['datalist'],
    components:{
        TodoItem
    }
}
</script>