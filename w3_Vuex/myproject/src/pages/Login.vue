<template>
  <div>
    <h1>用户登录</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="gotoReg">登录</el-button>
        <el-button type="text" icon="el-icon-question">忘记密码</el-button>
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
          this.$refs.loginForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        pass: "",
      },
      rules: {
        pass: [
          { required: true, message: "必须添加密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        username: [
          { required: true, message: "必须填写用户名", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    gotoReg() {
      this.$refs["loginForm"].validate(async valid => {
        if (valid) {
            // hard code
            let {data} = await this.$axios.post('http://localhost:1906/user/login',{
                username:this.ruleForm.username,
                password:this.ruleForm.pass
            });
            if(data.code === 1){
                if(this.$route.query.target){
                    this.$router.push(target);
                }else{
                    this.$router.push('/mine');
                }
            }else{
                alert('用户名或密码错误')
            }

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
}
</script>