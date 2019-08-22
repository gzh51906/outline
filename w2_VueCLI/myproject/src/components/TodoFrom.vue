<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" ref="keyword" v-model.trim="keyword" @keyup.13="add" placeholder="Recipient's username" />
        <div class="input-group-append">
            <button class="btn btn-success" type="button" @click="add">添加</button>
        </div>
    </div>
</template>
<script>
export default {
    props:['addItem'],
    data(){
        return {
            keyword:''
        }
    },
    methods:{
        add(){
            // this.addItem(this.keyword);
            this.$emit('add',this.keyword) 

            // 清空并获得焦点
            this.keyword = '';
            this.$refs.keyword.focus();

            this.$emit('update:changenum',100)
        }
    }
}
</script>