import {
  LOG_IN,
  LOG_OUT
} from '../mutation-types'
import { showMsg } from '../actions'
import api from '../../api/api'
import router from '../../router/index'
// console.log()
const state = {
  status:false,
  username:'',
}

const actions = {
  logIn(store,loginData){
    api.userLogin(loginData).then(res => {
        if(res.data.success){
          store.commit(LOG_IN,'12341')
          // showMsg(store,'登陆成功','success')
          console.log(router.push('/'));
          console.log(showMsg);
        }
      },res=>{
         showMsg(store,res.data.error_msg || '登陆接口出错')
      })
  },
  logOut(store){
    api.userLogOut().then(res => {
        if(res.data.success){
          showMsg(store,'注销成功','success')
          setTimeout(function(){
            router.replace(route.query.redirect || '/')
          },2000)
        }
      },res=>{
         showMsg(store,res.data.error_msg || '注销接口出错')
      })
  }
}
const mutations = {
  [LOG_IN](state, username){
    state.username = username
    state.status = true
  },
  [LOG_OUT](state, action){
    state.username = ''
    state.status = false
  }
}

export default {
  state,
  mutations,
  actions
}
