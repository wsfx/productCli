// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import BaseComponents from './util/BaseComponents'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.use(ElementUI)
Vue.use(BaseComponents)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
