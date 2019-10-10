import LoginForm from '../../../components/common/LoginForm.vue'
import XjlTransition from '../../../components/common/XjlTransition.vue'

let components = {
  LoginForm,
  XjlTransition
}

const customComponents = {
  install: function (Vue) {
    for (let key in components) {
      let name = `${key}`
      Vue.component(name, components[key])
    }
  }
}

export default customComponents
