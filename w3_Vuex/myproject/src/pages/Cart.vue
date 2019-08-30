<template>
  <div class="cart">
    <el-row :gutter="20" v-for="item in cartlist" :key="item.goods_id">
      <el-col :span="16">
        <el-col :span="6">
            <img :src="item.goods_image" @click="goto(item.goods_id)"/>
        </el-col>
        <el-col :span="16" :offset="1">
            <h4>{{item.goods_name}}</h4>
            <p class="price"><span>{{item.goods_price}}</span></p>
            <p><el-input-number :min="1" size="mini" v-model="item.qty" @change="changeQty($event,item.goods_id)"></el-input-number></p>
        </el-col>
      </el-col>
      <el-col :span="4" :offset="4">
        <el-button type="text" icon="el-icon-delete" @click="remove(item.goods_id)">删除</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="50">
        <el-col :span="12">
            <el-button type="text" size="mini"  @click="clear">清空购物车</el-button>
        </el-col>
        <el-col :span="12">
            <el-col :span="16" class="total price">
                总计：<span>{{totalPrice.toFixed(2)}}</span> 
            </el-col>
            <el-col :span="8">
                <el-button type="danger">结 算</el-button>
            </el-col>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

export default {
    computed:{
        // cartlist(){
        //     return this.$store.state.cart.cartlist
        // },

        // 映射state.cart.cartlist
        // ...mapState(['products','totalprice']),
        // products(){
        //     return this.$store.state.products
        // }

        ...mapState({
            cartlist(state){
                return state.cart.cartlist
            }
        }),

        // totalPrice(){
        //     return this.$store.getters.totalPrice.toFixed(2)
        // }
        // 映射getters
        ...mapGetters(['totalPrice'])
      
    },
    methods:{
        // ...mapMutations(['changeQty','removeItem']),
        ...mapMutations({
            changeQty:'changeQty',
            remove:'removeItem',
            clear:function(commit,payload){
                commit('clearCart')
            }
        }),
        ...mapActions(['changeQtyAsync']),
        // changeQtyAsync(qty,id){
        //     this.$store.dispatch('changeQtyAsync',{qty,id})
        // },
        // remove(goods_id){
        //     this.$store.commit('removeItem',goods_id)
        // },
        // changeQty(qty,id){
        //     this.$store.commit('changeQty',{qty,id})
        //     // this.$store.dispatch('changeQtyAsync',{qty,id})
        //     // axios.get('http://localhost:1906/goods/kucun').then(({data})=>{
        //     //     let kucun = data.data;
        //     //     // 库存不足
        //     //     if(qty>kucun){
        //     //         qty = kucun;
        //     //     }
        //     //     this.$store.commit('changeQty',{qty,id})
        //     // })
        // },
        goto(id){
            // this.$router.push({name:'goods',params:{id}})
            this.$router.push(`/goods/${id}`)
        }
    },
  created() {
    console.log(this);
  }
};
</script>
<style scoped>
    .total{text-align:right}
    .cart img{width:100%}
</style>