import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { mainSocket } from './socket/index'

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
import customComponents from './assets/lib/js/commonComponents'

// 引入socket插件
import VueSocketIo from 'vue-socket.io'

// vue全局注册依赖
Vue.use(customComponents)
Vue.use(new VueSocketIo({
  debug: true,
  connection: 'http://127.0.0.1:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutionPrefix: 'SOCKET_'
  }
}))

// 全局注册自定义过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  sockets: mainSocket,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
