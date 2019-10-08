import Vue from 'vue'
import http from './http'

// 配置初始请求头
let headers = {
  'headers': {
    'Content-Type': 'application/json; charset=UTF-8',
    'Token': ''
  }
}

const api = window.apiUrl || '项目配置地址'

/**
 * post请求处理
 * @param {String} url 请求地址
 * @param {Object} params 请求参数对象
 */
let post = (url, params = {}) => {
  // 定义请求头
  if (headers.headers['Token'] === '') {
    headers.headers['Token'] = localStorage.getItem('Token') || ''
  }
  headers.headers['Content-Type'] = 'application/json; charset=UTF-8'
  return http.post(api + url, params, headers)
}

/**
 * get请求处理
 * @param {String} url 请求地址
 * @param {Object} params 请求参数对象
 */
let get = (url, params) => {
  // 定义请求头
  if (headers.headers['Token'] === '') {
    headers.headers['Token'] = localStorage.getItem('Token') || ''
  }
  return http.get(api + url, { params, headers: headers.headers })
}

/**
 * 文件下载
 */

/**
 * 文件上传
 */

/**
 * 文件预览
 */

Vue.prototype.$post = post
Vue.prototype.$get = get

export {
  post,
  get
}
