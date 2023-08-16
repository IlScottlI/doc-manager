import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { extend, ValidationProvider } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'
import router from "./router";
import store from "./store";
import VueTreeList from "vue-tree-list";

Vue.component('ValidationProvider', ValidationProvider)
Vue.use(VueTreeList)
Vue.config.productionTip = false

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
