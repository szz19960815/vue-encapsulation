<template>
  <div id="app" class="flex">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    // 判断是否已登录如果未登录断开连接
    this.$socket.emit('disconnect', '客户端断开')
    this.$socket.disconnect()
    this.$socket.close()
    // 获取配置项
    // this.$getConfig()
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  // min-width: 1000px;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
