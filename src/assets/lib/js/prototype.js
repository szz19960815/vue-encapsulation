import Vue from 'vue'
import { post } from '@/assets/http/index.js'
import { Message } from 'element-ui'

let errMsg = (msg) => {
  return Message({
    message: msg,
    type: 'error',
    duration: 3 * 1000,
    showClose: true
  })
}

Vue.prototype.$w = window

/**
 * 登录
 * @param {string} account 登录账户用户名
 * @param {string} pwd 登录账户密码
 */
Vue.prototype.$login = (account, pwd) => {
  if (!account || account === '') {
    return errMsg('用户名不能为空')
  } else if (!pwd || pwd === '') {
    return errMsg('用户密码不能为空')
  } else {
    account = account.toString()
    pwd = pwd.toString()
    return post('/system/sign/login', { account, pwd })
  }
}

/**
 * 获取配置信息
 * @param {null} null 不需要任何参数
 */
Vue.prototype.$getConfig = () => {
  return post('/system/config/query')
}

/**
 * 获取localStorage中的用户信息
 */
Vue.prototype.$getUser = () => {
  return (JSON.parse(localStorage.getItem('userLogin'))).User
}

/**
 * 获取localStorage中的Token
 */
Vue.prototype.$getToken = () => {
  return localStorage.getItem('Token')
}
