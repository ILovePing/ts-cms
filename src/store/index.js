import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import getters from './getters';
import user from './modules/user'
import showmsg from './modules/showmsg'
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules:{
    user,
    showmsg,
    login
  }
})
