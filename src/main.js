// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//夹在vue框架
import axios from 'axios'//ajax请求的插件
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import store from './store'//状态管理入口


Vue.prototype.$http=axios;
Vue.use(VueAxios,axios);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
