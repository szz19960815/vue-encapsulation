# vue-encapsulation

## Project setup
```
npm install
public->static->config->env.js中修改项目名称、版本号，请求访问端口地址等
src->assets->http->http.js文件中添加2003状态下登录操作
src->assets->http->index.js文件中添加项目默认请求地址以及请求头设置
src->assers->lib->css->reset.css中修改全局重置样式
src->assers->lib->css->element.js中选择按需加载的element组件
router.js中配置路由表、导航守卫
vue.config.js中进行vue@cli3的配置
```

### 公共API调用
```
this.$login -> 登录
this.$getConfig -> 获取配置信息
this.$getUser -> 获取本地存储的用户信息
```

### 基于axios二次封装的请求方法
```
this.$post(url, params) -> post 请求
this.$get(url, params) -> get 请求
```

### 基于element-ui封装的组件调用
```
this.$loading -> Loading 组件
this.$msgbox -> MessageBox 弹窗组件
this.$alert -> MessageBox alert 组件
this.$confirm -> MessageBox confirm 组件
this.$prompt -> MessageBox prompt 组件
this.$notify -> Notification 组件
this.$message -> Message 组件
this.$errMsg -> Message error类型组件
this.$succMsg -> Message success类型组件
this.$warnMsg -> Message warining类型组件
this.$infoMsg -> Message info类型组件
```

### src目录
```
assets 依赖目录
    filters 自定义全局过滤器目录
    http axios插件配置目录
        http.js axios拦截器配置
        index.js 通用请求方法封装，请求头配置等
    img 静态图片资源
    lib 自定义插件库/第三方插件修改
        css 全局/通用性/重置样式目录
        js 第三方插件/自定义插件目录

components 组件目录
    common 通用性可服用组件
    根据页面名称，分别建立目录，存放相应页面下的特定业务组件，页面名称与目录名称一一对应

store vuex仓库目录
    index.js 定义仓库
    action.js 全局根级别的action
    mutation.js 全局根级别的mutation
    modules vuex状态分模块管理目录，名字与业务路由或页面或功能对应

views 视图目录
    Home.vue App.vue加载后的主页视图，根据需求也可以放在home目录下，视需求复杂度而定

main.js 项目初始化文件

App.vue 项目根组件文件

router.js 项目路由配置文件
```

### 自定义公共组件
```
登录组件 <login-form>
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
