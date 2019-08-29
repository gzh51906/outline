<template>
  <div>
    <el-tabs v-model="activCatId" @tab-click="changeCategory">
      <el-tab-pane :label="cat.gc_name" :name="cat.gc_id" v-for="cat in category" :key="cat.gc_id">
        <el-tabs tab-position="left" v-if="subCategory[activCatId]">
          <el-tab-pane
            :label="item.gc_name"
            v-for="item in subCategory[activCatId].child"
            :key="item.gc_id"
          >
          <!-- <img :src="item.gc_image" style="width:40px;"/>
          <h4>{{item.gc_name}}</h4> -->

          <!-- 命名路由 -->
          <router-view name="title"/>
          <router-view name="list"/>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      category: [],
      activCatId: "",
      subCategory: {}
    };
  },
  async created() {
    // 大分类：https://www.nanshig.com/mobile/index.php?act=goods_class
    // 小分类：https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id=256
    let {
      data: {
        datas: { class_list }
      }
    } = await this.$nanshig({
      params: {
        act: "goods_class"
      }
    });

    this.category = class_list;//256,2,1,470
    this.activCatId = class_list[0].gc_id;

    this.getCategoryData(this.activCatId);
  },
  methods: {
    async getCategoryData(id) {
      let {
        data: {
          datas: { class_list }
        }
      } = await this.$nanshig({
        params: {
          act: "goods_class",
          op: "get_child_all",
          gc_id: id
        }
      });

      let subCategory = class_list[0];

    // 以切换的tab_id作为键把数据存入subCategory
    // 以下方式添加的属性为普通属性
    // this.subCategory[this.activCatId] = subCategory;

    // 设置响应式属性
    this.$set(this.subCategory,this.activCatId,subCategory);

      console.log('subCategory:',this.subCategory);
    },
    changeCategory(currentTab) {
      let id = currentTab.name;
      this.activCatId = id;
      if(!this.subCategory[id]) this.getCategoryData(id);
    }
  }
};
</script>