<template>
  <div class="cart">
    <el-row :gutter="20" v-for="item in cartlist" :key="item.goods_id">
      <el-col :span="16">
        <el-col :span="6">
            <img :src="item.goods_image"/>
        </el-col>
        <el-col :span="16" :offset="1">
            <h4>{{item.goods_name}}</h4>
            <p class="price"><span>{{item.goods_price}}</span></p>
            <p><el-input-number :min="1" :max="5" size="mini" :value="item.qty" @change="changeQty($event,item.goods_id)"></el-input-number></p>
        </el-col>
      </el-col>
      <el-col :span="4" :offset="4">
        <el-button type="text" icon="el-icon-delete" @click="remove(item.goods_id)">删除</el-button>
      </el-col>
    </el-row>
    <div class="total price">总计：<span>{{totalPrice}}</span></div>
  </div>
</template>
<script>
export default {
    computed:{
        cartlist(){
            return this.$store.state.cartlist
        },
        totalPrice(){
            return this.$store.getters.totalPrice.toFixed(2)
        }
    },
    methods:{
        remove(goods_id){
            this.$store.commit('removeItem',goods_id)
        },
        changeQty(qty,id){
            // console.log(a,b)
            this.$store.commit('changeQty',{qty,id})
        }
    },
  created() {
    console.log(this.$store);
  }
};
</script>
<style scoped>
    .total{text-align:right}
    .cart img{width:100%}
</style>