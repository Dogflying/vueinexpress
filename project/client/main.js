// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueresource from 'vue-resource'
import store from './store'
import axios from 'axios'

Vue.use(vueresource)
Vue.config.productionTip = false
Vue.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
