import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test/index.vue')
    }
  ]
})

// 不需要登录就能访问的路由
// 可以是路由name，也可以是路由path，根据自己项目和习惯定义
const noLoginArr = ['home', 'test']

// 添加路由导航守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('Token')
  let userLogin = localStorage.getItem('userLogin')
  // noLoginArr.includes(to.name) 等价于 to.name === 'home' || to.name === 'adminLogin'
  if (noLoginArr.includes(to.name)) {
    next()
  } else if (!token || !userLogin) {
    // 如果跳转的路由是需要用户登录，但是没有登录的操作
    Vue.prototype.$warnMsg('请先登录')
    // 跳转登录页面
    // next('登录路由')
  } else {
    next()
  }
})

export default router
