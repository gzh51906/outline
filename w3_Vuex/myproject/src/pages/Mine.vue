<template>
    <div>
        我的
    </div>
</template>
<script>
export default {
    // props:['a','id'],
    created(){
        // console.log('a:',this.a);
        this.$route.params.id
    }
}
</script>