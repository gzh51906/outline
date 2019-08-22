<template>
    <tr :class="{'table-success':data.done}">
        <th><input type="checkbox"/></th>
        <th>{{idx+1}}</th>
        <td>{{data.content}}</td>
        <td>{{data.time}}</td>
        <td>{{data.done?'是':'否'}}</td>
        <td>
            <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-success" @click="completeitem(idx)">完成</button>
                <button type="button" class="btn btn-outline-danger" @click="removeitem(idx)">删除</button>
            </div>
        </td>
    </tr>
</template>
<script>
export default {
    props:['data','idx','removeitem','completeitem']
}
</script>