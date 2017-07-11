import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const routes = [{
  path: '/login',
  name: 'index',
  component: resolve => require(['@/view/Login'],resolve)
},{
  path: '/',
  name:'index',
  meta: { requiresAuth: true },
  component: resolve => require(['@/view/Index'],resolve),
  children: [{
    path: '/userConf',
    name:'userConf',
    component: resolve => require(['@/components/userConf'],resolve)
  }]
},];
export default new Router({
  routes,
  mode:'history'
})
