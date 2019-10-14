# 组件类型 Components

## 登录模态框组件 <login-form></login-form>
### 属性
| 属性名 | 可选值 | 是否必填 | 默认值 | 类型 | 说明 |
| :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| height | - | false | 300 | Number | 模态框高度 |
| width | - | false | 400 | Number | 模态框宽度 |
| title | - | false | Login | String | 表单标题 |


## 过渡动画组件 <xjl-transition></xjl-transition>
### 属性
| 属性名 | 可选值 | 是否必填 | 默认值 | 类型 | 说明 |
| :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| type | fade-in,fade-in-linear,zoom-in-center,zoom-in-top,zoom-in-bottom | false | - | String | 过渡动画类型 |


## 模态弹窗组件 <xjl-dialog></xjl-dialog>
### 属性
| 属性名 | 可选值 | 是否必填 | 默认值 | 类型 | 说明 |
| :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| title | any | false | - | String | 模态弹窗标题 |
| show | true/false | true | false | Boolean | 弹框是否显示，只支持.sync形式绑定 |
| width | any | false | 50% | String | 弹窗基于可视化区域宽度 |
| fullScreen | true/false | false | false | Boolean | 是否为全屏弹窗 |
| center | true/false | false | false | Boolean | 标题栏和底部是否居中对齐 |


# 服务类型 Components
## loading 加载组件
### $createLoading(options)
```
通过this.$createLoading(options)调用，返回生成loading的实例
```
| 参数 | 类型 | 默认值 | 是否必填 | 说明 |
| :-----: | :-----: | :-----: | :-----: | :-----: |
| target | object/string | document.body | false | loading覆盖对象 |
| fullscreen | boolean | true | false | 是否覆盖可视化区域 |
| lock | boolean | false | false | loading时是否可以滚动 |
| text | string | - | false | loading图标下的文案 |
| background | string | white | false | 遮罩层背景色 |
