<template>
  <div class="home">
    <el-carousel height="150px" class="recommend">
      <el-carousel-item v-for="item in recommend" :key="item.goods_id">
        <img :src="item.goods_image" @click="goto(item.goods_id)"/>
      </el-carousel-item>
    </el-carousel>
    <div v-for="type in goodslist" :key="type.title">
        <h2>{{type.title}}</h2>
        <el-row :gutter="20" class="goodslist">
            <el-col :span="12" v-for="item in type.item" :key="item.goods_id" @click.native="goto(item.goods_id)">
                <img :src="item.goods_image"/>
                <h4>{{item.goods_name}}</h4>
                <p class="price"><del>{{item.goods_price}}</del><span>{{item.goods_promotion_price}}</span></p>
            </el-col>
        </el-row>
    </div>
  </div>
</template>
<script>

export default {
    data(){
        return {
            recommend:[],
            goodslist:[]
        }
    },
    methods:{
        goto(id){
            // this.$router.push({name,query:{id:123}})
            // this.$router.push({path:'/goods/123'})
            this.$router.push({name:'goods',params:{id}})
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

        let {data} = await this.$nanshig({
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
    },
    destroyed(){
        console.log('home destroyed')
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