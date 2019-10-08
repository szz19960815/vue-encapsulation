<template>
  <div id="app" class="flex">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    // 获取配置项
    this.$getConfig()
  }
}
</script>

<style lang="less">
#app{
  width: 100%;
  // min-width: 1000px;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
