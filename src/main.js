import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// 按需引入element
import '@/assets/lib/js/element.js'
// 引入请求模块
import '@/assets/http/index.js'
// 引入自定义Vue.prototype方法
import '@/assets/lib/js/prototype.js'
// 引入自定义过滤器
import filters from './assets/filters/index'

// 引入重置样式文件
import './assets/lib/css/reset.css'

// 引入全局自定义组件
import customComponents from './assets/lib/js/components'
Vue.use(customComponents)

// 全局注册自定义过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
