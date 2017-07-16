import {
  LOG_IN,
  LOG_OUT
} from '../mutation-types'
import { showMsg } from '../actions'
import api from '../../api/api'
import router from '../../router/index'
const state = {
  status:false,
  username:'',
}

const actions = {
  // getLoginStatus(store){
  //   api.userLogStatus().then((res)=>{
  //     if(res.data.status){//
  //       store.commit(LOG_IN,loginData.username)
  //     }else{
  //
  //     }
  //   })
  // },
  logIn(store,loginData){
    api.userLogin(loginData).then(res => {
        if(res.data.success){
          store.commit(LOG_IN,loginData.username)
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
  [LOG_IN](state, username){
    state.username = username
    state.status = true
    console.log(state.status)
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
