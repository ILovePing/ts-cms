<template>
  <div id="" style="margin-top:300px;">
    <el-row>
      <el-col :span="3" :offset="6">
        <img src="../assets/logo.png" id="logoPic">
      </el-col>
      <el-col :span="6">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-col>
</el-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import api from '../api/api';
  export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' }
          ]

        }
      };
    },
    methods: {
      ...mapMutations({
        logIn: 'TOGGLE_LOG_STATUS'
      }),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            api.userLogin(this.ruleForm,(data)=>{
              if(data.success){
                this.logIn()
                this.$message({
                  message: '登录成功，即将跳转到主页',
                  type: 'success'
                });
                let that = this
                setTimeout(function(){
                  that.$router.replace(that.$route.query.redirect || '/')
                },2000)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body{
  #logoPic{
    width:100%;
    height:100%;
  }
}

</style>
