<template>
  <div class="home">
    <h1>This is home page</h1>
    <el-button type="primary" @click="reqGet">发送get请求</el-button>
    <el-button type="primary" @click="reqPost">发送post请求</el-button>
    <hr />
    <el-button type="primary" @click="login('name', 'pwd')">登 录</el-button>
    <hr />
    <el-button type="primary" @click="$socket()">连接socket</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data () {
    return {
      sockets: {
        connect: (res) => {
          console.log(res)
        }
      }
    }
  },
  methods: {
    reqGet () {
      this.$get('http://localhost:3000/users?id=123', { name: 'szz' })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    reqPost () {
      this.$post('http://localhost:3000/test', { id: 'userid' })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (a, p) {
      // this.$post('http://localhost:3000/users/login', {account: a, password: p}).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
      this.$login(a, p).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
