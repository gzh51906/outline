<template>
    <div>
        <img :src="data.goods_image"/>
        <h1>{{data.goods_name}}</h1>
        <p class="price">
            <del>{{data.goods_marketprice}}</del>
            <span>{{data.goods_promotion_price}}</span>
        </p>
        <el-button-group>
            <el-button type="warning" icon="el-icon-shopping-cart-full" @click="add2cart">添加到购物车</el-button>
            <el-button type="danger" icon="el-icon-shopping-bag-2" @click="buy">立即购买</el-button>
        </el-button-group>
    </div>
</template>
<script>

export default {
    data(){
        return {
            data:{}
        }
    },
    watch:{
        // 监听实例上的属性
        // 监听实例上的$route属性，只要$route属性有更新，则执行回调函数
        // $route:function(val, oldVal){
        //     console.log('watch:',val, oldVal)
        // },
        data(){
            
        }
    },
    created(){
        let {id} = this.$route.params;
        this.getData(id);
        

        
    },
    mounted(){
        console.log('mounted:',this.$route)
    },

    methods:{
        async getData(id){
            
            let {data:{datas:data}} = await this.$nanshig({
                params:{
                    act:'goods',
                    op:'goods_detail',
                    goods_id:id,
                    key:''
                }
            })
            this.data = {
                recommend:data.goods_commend_list,
                goods_image:data.goods_image,
                ...data.goods_info
            };
        },
        buy(){
            
            this.$router.push({name:'cart'})
        },
        add2cart(){

        }
    },

    beforeRouteUpdate(to,from,next){
        // 如果设置了路由守卫，则必须显性调用next()，否则路由无法继续
        console.log('beforeRouteUpdate',to,from,next)
        let {id} = to.params
        this.getData(id);
        next();
    }
}
</script>