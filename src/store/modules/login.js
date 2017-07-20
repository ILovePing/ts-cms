import {
  LOG_IN,
  LOG_OUT,
  SET_TOKEN,
  SET_NAME
} from '../mutation-types'
import { showMsg } from '../actions'
import api from '../../api'
import router from '../../router/index'
import cookieUtil from 'js-cookie'
const state = {
  status:false,
  username:cookieUtil.get('username'),
  token: cookieUtil.get('token'),
}

const actions = {
  logIn(store,loginData){
    api.userLogin(loginData).then(res => {
        if(res.data.success){
          store.commit(LOG_IN)
          store.commit(SET_NAME,loginData.username)
          store.commit(SET_TOKEN,res.data.token)
          cookieUtil.set('token',res.data.token)
          cookieUtil.set('username',loginData.username)
          showMsg(store,'登陆成功','success')
          setTimeout(()=>{
            router.replace('/')
          },2000);
        }else{
          showMsg(store,'账号或密码错误')
        }
      },res=>{
         showMsg(store,res.data.error_msg || '登陆接口出错')
      })
  },
  logOut(store){
    api.userLogOut().then(res => {
        if(res.data.success){
          store.commit(LOG_OUT)
          store.commit(SET_TOKEN,'')
          store.commit(SET_NAME,'')
          cookieUtil.remove('token')
          cookieUtil.remove('username')
          showMsg(store,'注销成功','success')
        }else{
          showMsg(store,'注销失败')
        }
      },res=>{
         showMsg(store,res.data.error_msg || '注销接口出错')
      })
  }
}
const mutations = {
  [SET_NAME](state, username){
      state.username = username
  },
  [SET_TOKEN](state, token){
      state.token = token
  },
  [LOG_IN](state){
    state.status = true
  },
  [LOG_OUT](state, action){
    state.status = false
  }
}

export default {
  state,
  mutations,
  actions
}
