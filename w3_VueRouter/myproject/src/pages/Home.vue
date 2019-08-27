<template>
  <div class="home">
    <el-carousel height="150px" class="recommend">
      <el-carousel-item v-for="item in recommend" :key="item.goods_id">
        <img :src="item.goods_image" @click="goto('goods',item.goods_id)"/>
      </el-carousel-item>
    </el-carousel>
    <template v-for="type in goodslist">
    <h2 :key="type.title">{{type.title}}</h2>
    <el-row :gutter="20" class="goodslist" :key="type.title">
        <el-col :span="12" v-for="item in type.item" :key="item.goods_id">
            <img :src="item.goods_image"/>
            <h4>{{item.goods_name}}</h4>
            <p class="price"><del>{{item.goods_price}}</del><span>{{item.goods_promotion_price}}</span></p>
        </el-col>
    </el-row>
    </template>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            recommend:[],
            goodslist:[]
        }
    },
    methods:{
        goto(name,id){
            // this.$router.push({name,query:{id:123}})
            // this.$router.push({path:'/goods/123'})
            this.$router.push({name,params:{id}})
        }
    },
    async created(){
        // axios.get('https://www.nanshig.com/mobile/index.php',{
        //     params:{
        //         act:'index'
        //     }
        // }).then(({data})=>{
        //    console.log(data.datas);

        //     this.recommend = data.datas[1].goods.item.slice(0,4)
        // })

        let {data} = await axios.get('https://www.nanshig.com/mobile/index.php',{
            params:{
                act:'index'
            }
        });
        this.recommend = data.datas[1].goods.item.slice(0,4);

        // 数据格式化
        this.goodslist = data.datas.slice(1).map(function(item){
            return item.goods;
        });

        // [{goods:{item,title}},{goods:{item,title}}] -> [{item,title},{item,title}]
    }
};
</script>
<style>
    .recommend img{width:100%;}
    .goodslist {padding:15px;}
    .goodslist .el-col{height:370px;overflow:hidden;}
    .price del::before,.price span::before{content:'￥'}
    .price del{color:#999}
    .price span{margin-left:5px;color:#f00;}
</style>