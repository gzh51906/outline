<template>
  <div class="search mt-5">
    <h4><slot name="title" :username="username" :password="true"></slot></h4>
    <div class="input-group">
      <input type="search" class="form-control" v-model="keyword" />
      <div class="input-group-append">
        <!-- <button class="btn btn-danger" type="button">{{buttonText}}</button> -->
        <button class="btn btn-danger" type="button"><slot a="10" b="20"/></button>
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in result" :key="item">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
    props:{
        buttonText:String,
        data:{
            type: Array,
            required: true,  // 必填
            // default:()=>[]
        }
    },
    data(){
        return {
            keyword:'',
            username:'laoxie'
        }
    },
    computed:{
        result(){
            return this.data.filter(item=>{
                // return item.indexOf(this.keyword)>=0
                return item.includes(this.keyword)
            })
        }
    }
};
</script>
<style>
</style>