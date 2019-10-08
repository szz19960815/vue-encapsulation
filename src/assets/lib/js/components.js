import LoginForm from '../../../components/common/LoginForm.vue'

let components = {
  LoginForm
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
