import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { extend, ValidationProvider } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'

Vue.component('ValidationProvider', ValidationProvider)

Vue.config.productionTip = false

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
