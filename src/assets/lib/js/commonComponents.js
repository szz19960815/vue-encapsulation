import LoginForm from '../../../components/common/LoginForm.vue'
import XjlTransition from '../../../components/common/XjlTransition.vue'
import XjlDialog from '../../../components/common/XjlDialog.vue'
import XjlTable from '../../../components/common/XjlTable.vue'

let components = {
  LoginForm,
  XjlTransition,
  XjlDialog,
  XjlTable
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
