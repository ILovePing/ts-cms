import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import user from './modules/user'
import showmsg from './modules/showmsg'
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules:{
    user,
    showmsg,
    login
  }
})
