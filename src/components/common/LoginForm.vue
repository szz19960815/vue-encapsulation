<template>
  <section id="loginForm" :style="{width: width+'px',height: height+'px'}">
    <h2>{{title}}</h2>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="账 号：" prop="account">
        <el-input v-model="ruleForm.account" @keyup.enter.native="submitForm('ruleForm')" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密 码：" prop="password">
        <el-input type="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" autocomplete="off"></el-input>
      </el-form-item>
      <div class="btn">
        <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
        <el-button @click="resetForm('ruleForm')">清 空</el-button>
      </div>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    height: {
      type: Number,
      default: 300
    },
    width: {
      type: Number,
      default: 400
    },
    title: {
      type: String,
      default: 'Login'
    }
  },
  data () {
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$login(this.ruleForm.account, this.ruleForm.password).then(data => {
            if (data) {
              localStorage.setItem('userLogin', JSON.stringify(data))
              localStorage.setItem('Token', (data.Token))
              this.$getConfig().then(res => {
                if (res) {
                  localStorage.setItem('config', JSON.stringify(res))
                  this.$succMsg('登录成功!')
                  this.$router.push({ path: '/admin' })
                }
              })
            }
          })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
#loginForm {
  width: 500px;
  height: 400px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  padding: 20px;
  & > h2 {
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    margin: 20px 0;
  }
  .demo-ruleForm {
    width: 80%;
    margin: 0px auto;
    & > div {
      margin-bottom: 20px;
    }
    .btn {
      text-align: center;
    }
  }
}
</style>
