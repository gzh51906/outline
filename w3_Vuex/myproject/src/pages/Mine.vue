<template>
    <div>
        头像上传
        <input type="file" ref="file" multiple>
        <button @click="upload">上传</button>

        <el-upload
        class="avatar-uploader"
        action="http://localhost:1906/upload/touxiang"
        :show-file-list="false"
        name="touxiang"
        >
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
        <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
</template>
<script>
import Vue from 'vue'
import {Upload} from 'element-ui'
Vue.use(Upload.name,Upload)

export default {
    // props:['a','id'],
    created(){
        // console.log('a:',this.a);
        this.$route.params.id
    },
    methods:{
        async upload(){
            /**
             *  formData
             */
            let mydata = new FormData();

            // mydata.set('username','laoxie');
            // mydata.set('_id','xxxxx');
            // mydata.set('touxiang',this.$refs.file.files[0])

            // console.dir(this.$refs.file);
            // let {data} = await this.$axios.post('http://localhost:1906/upload/touxiang',mydata);
            
            // console.log(data);

            // 获取所有图片：this.$refs.file.files

            // mydata.set('goods',this.$refs.file.files);
            for(let i=0;i<this.$refs.file.files.length;i++){
                mydata.append('goods',this.$refs.file.files[i])
            }
            let {data} = await this.$axios.post('http://localhost:1906/upload/goods',mydata);
            console.log(data)
        }
    }
}
</script>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>