<template>
  <div>
    <h1>免费注册</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="regForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="gotoReg">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.regForm.validateField("checkPass");
        }
        callback();
      }
    };

    var checkPass = (rule, value, callback) => {
      if (value === "") {
        // 校验失败：需要往回调函数传入一个错误对象
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        //通过验证
        callback();
      }
    };

    var checkUsername = async (rule, value, callback) => {
        // 发起请求校验用户名是否已被注册
        let {data} = await this.$axios.get('http://localhost:1906/user/check',{
            params:{
                username:this.ruleForm.username
            }
        })
      if (data.code === 0) {
        callback(new Error("用户名已存在"));
      } else {
        //通过验证
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [
          { required: true, message: "必须添加密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        checkPass: [{ validator: checkPass, trigger: "blur" }],
        username: [
          { required: true, message: "必须填写用户名", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
          { validator: checkUsername, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    gotoReg() {
      this.$refs["regForm"].validate(async valid => {
        if (valid) {
            let {data} = await this.$axios.post('http://localhost:1906/user/reg',{
                username:this.ruleForm.username,
                password:this.ruleForm.pass
            })

            if(data.code === 1){
                this.$router.push("/login");
            }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>