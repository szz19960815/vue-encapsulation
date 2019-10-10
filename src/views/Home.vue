<template>
  <div class="home">
    <h1>This is home page</h1>
    <el-button type="primary" @click="reqGet">发送get请求</el-button>
    <el-button type="primary" @click="reqPost">发送post请求</el-button>
    <hr />
    <el-button type="primary" @click="login('name', 'pwd')">登 录</el-button>
    <hr />
    <el-button type="primary" @click="loginThen">登录后连接socket</el-button>
    <el-button type="primary" @click="loginExit">退出登录断开socket</el-button>
    <el-button type="primary" @click="send">发送消息</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data () {
    return {
    }
  },
  sockets: {
    // remessage: function (res) {
    //   console.log('remessage', res)
    // }
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
      this.$login(a, p).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    loginThen () {
      console.log('登录成功')
      this.$socket.connect()
      this.$socket.emit('connection')
    },
    loginExit () {
      console.log('退出登录')
      this.$socket.emit('disconnect', '客户端断开')
      this.$socket.disconnect()
      this.$socket.close()
    },
    send () {
      console.log('发送消息')
      this.$socket.emit('message', '客户端发送过来的消息')
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
