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
    <div class="box">
      <h2>模态弹窗组件：</h2>
      <el-button style="margin-bottom : 10px;" @click="dialogShow = !dialogShow">测试</el-button>
      <xjl-dialog
        :show.sync="dialogShow"
        title="测试标题"
        :center="true"
        :fullScreen="false"
        :footer="true"
        width="80%"
      >
        <div>123</div>
      </xjl-dialog>
    </div>
    <div class="box loadingTestBox">
      <h2>Loading组件：</h2>
      <el-button type="warning" @click="testLoading">测试loading</el-button>
    </div>
    <div class="box">
      <h2>表格组件：</h2>
      <xjl-table
        :table="table"
        border
        height
        :headerStyle="{fontWeight: '400 !important', color: 'red', fontSize: '16px'}"
      ></xjl-table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      show: true,
      dialogShow: false,
      table: {
        column: [
          { title: '日期', name: 'date', width: '', minWdith: '', filter: 'formatDateD', btn: [], align: 'center' },
          { title: '姓名', name: 'name', width: '', minWdith: '', filter: '', btn: [], align: '' },
          { title: '地址', name: 'address', width: '', minWdith: '', filter: '', btn: [], align: '' },
          { title: '操作',
            name: '',
            width: '',
            minWdith: '',
            filter: '',
            btn: [
              { type: 'primary', label: '查看', size: 'mini', callback: this.tableCall },
              { type: 'danger', label: '删除', size: 'small', callback: this.tableCall }
            ],
            align: '' }
        ],
        list: [{
          date: 1571105211,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: 1571105211,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: 1571105211,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: 1571105211,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  },
  methods: {
    testLoading () {
      // 全屏loading
      // this.$loading()
      // setTimeout(() => {
      //   this.$loading().close()
      // }, 1000)
      let demoLoading = this.$createLoading({
        target: '.loadingTestBox',
        fullcreen: false,
        lock: false,
        text: 'wait a moment',
        background: 'yellow'
      })
      setTimeout(() => {
        demoLoading.close()
      }, 3000)
    },
    tableCall (a, b) {
      console.log('这是表格的回调', a, b)
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
    & > div {
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
