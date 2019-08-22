<template>
    <tr :class="{'table-success':data.done}">
        <th><input type="checkbox"/></th>
        <th>{{idx+1}}</th>
        <td>{{data.content}}</td>
        <td>{{data.time}}</td>
        <td>{{data.done?'是':'否'}}</td>
        <td>
            <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-success" @click="completeItem(idx)">完成</button>
                <button type="button" class="btn btn-outline-danger" @click="removeItem(idx)">删除</button>
            </div>
        </td>
    </tr>
</template>
<script>
import Bus from '../bus.js';

export default {
    // props:['data','idx','removeitem','completeitem'],
    props:['data','idx'],

    methods:{
        completeItem(idx){
            // TodoItem为发送方，需要触发接收方（TodoList）定义的事件
            Bus.$emit('complete',idx)
        },
        removeItem(idx){
            Bus.$emit('remove',idx)
        }
    }
}
</script>