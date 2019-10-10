<template>
  <section id="test">
    <div class="box">
      <h2>登录模态框组件：</h2>
      <login-form></login-form>
    </div>
    <div class="box">
      <h2>过度动画组件：</h2>
      <el-button style="margin-bottom : 10px;" @click="()=>{this.show = !this.show}">测试</el-button>
      <div>
        <xjl-transition type="fade-in-linear">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </xjl-transition>
        <xjl-transition type="fade-in">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </xjl-transition>
        <xjl-transition type="zoom-in-center">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </xjl-transition>
        <xjl-transition type="zoom-in-top">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </xjl-transition>
        <xjl-transition type="zoom-in-bottom">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </xjl-transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style  lang="less" scoped>
#test {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  .box {
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 20px;
    h2 {
      font-weight: normal;
      margin-bottom: 10px;
    }
    &>div{
      display: flex;
      min-height: 100px;
      flex-wrap: wrap;
    }
    .transition-box {
      margin-bottom: 10px;
      width: 200px;
      height: 100px;
      border-radius: 4px;
      background-color: #409eff;
      text-align: center;
      color: #fff;
      padding: 40px 20px;
      box-sizing: border-box;
      margin-right: 20px;
    }
  }
}
</style>
