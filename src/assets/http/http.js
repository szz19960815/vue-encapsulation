/**
 * axios配置
 */
import axios from 'axios'
import { Loading, Message } from 'element-ui'

// axios配置
const Axios = axios.create()

// 自定义信息提示方法
const prompt = function (msg) {
  return Message({
    message: msg,
    type: 'error',
    duration: 3 * 1000,
    showClose: true
  })
}

// 响应数据中code状态码数组
// const codeArr = [0, 1000, 1001, 2000, 2001, 2002, 2003, 2004, 3000, 3001]

// loading
var loadingInstance = Loading.service({
  lock: true,
  text: '小主请稍等...',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.6)'
})
loadingInstance.close()

/**
 * http request 拦截器
 */
Axios.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({
      lock: true,
      text: '小主请稍等...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.6)'
    })
    return config
  },
  err => {
    loadingInstance.close()
    prompt('小主，请求失败了，请重新操作哦~~')
    return Promise.reject(err)
  }
)

/**
 * http response 拦截器
 */
Axios.interceptors.response.use(
  // 响应成功，得到返回对象
  res => {
    setTimeout(() => {
      loadingInstance.close()
    }, 800)
    if (res.data) {
      // 请求响应成功后根据响应体中code字段进行状态处理
      // if (codeArr.includes(res.data.code)) {
      switch (res.data.code) {
        case 0:
          // return
          break
        case 1000:
          prompt('服务器异常')
          return
        case 1001:
          prompt('系统繁忙，请稍后重试')
          return
        case 2000:
          prompt('参数错误，请检查数据')
          return
        case 2001:
          prompt(res.data.msg)
          return
        case 2002:
          prompt('请求无效或非法请求')
          return
        case 2003:
          prompt('请先登录')
          // 清除本地缓存
          localStorage.clear()
          sessionStorage.clear()
          // 下面进行跳转登录的操作
          // TODO
          return
        case 2004:
          prompt('抱歉，您没有权限进行该操作')
          return
        case 3000:
          this.$router.push({ path: '/' })
          return
        case 3001:
          prompt('用户身份已过期')
          return
        default:
          // prompt(res.data.msg)
      }
      // } else {
      //   prompt(res.data.msg)
      // }
    } else {
      prompt('数据错误，请重试...')
    }
    return Promise.resolve(res.data.data)
  },
  // 响应失败
  err => {
    loadingInstance.close()
    prompt('网络连接错误！')
    return Promise.reject(err)
  }
)

export default Axios
