<template>
  <el-card class="box-card">
    <el-form 
      :model="loginForm" 
      ref="loginForm"
      class="demo-ruleForm"
      :rules="rules"
    >
      <el-form-item prop="phone">
        <el-input type="text" placeholder="请输入用户名" v-model="loginForm.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" auto-complete="off"></el-input>
      </el-form-item>
      
      <el-button type="primary" @click="LoginDo">登录</el-button>
    </el-form>
  </el-card>
</template>

<script>
  import Fetch from '@/util/Fetch'
  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          phone: '',
          password: ''
        },
        rules: {
          phone: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      LoginDo () {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            this.$axios.post('/api/user/login_do', this.loginForm).then((data) => {
              console.log(data)
              this.$router.replace('/home')
            }, (error) => {
              console.dir(error)
            })
            window.localStorage.setItem('user',JSON.stringify(this.loginForm))
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
.box-card {
  width: 480px;
  position: absolute;

  // top:0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // margin: auto;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/**
  居中
**/
</style>