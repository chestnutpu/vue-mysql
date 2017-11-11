import Vue from 'vue'
import Router from 'vue-router'


import login from '@/components/login.vue'
import index from '@/components/index.vue'
import reg from '@/components/reg.vue'












Vue.use(Router);//让router装载到框架

export default new Router({
  routes: [
    
     {
      path: '/',
      name: 'login',
      component: login
    },
      {
      path: '/index',
      name: 'index',
      component: index
    },
      {
      path: '/reg',
      name: 'reg',
      component: reg
    }

  ]
})
