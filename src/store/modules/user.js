import api from '../../api'
import {showMsg} from '../actions'
import {
  GET_USER_LIST,
  GET_USER_LIST_FAILURE
} from '../mutation-types'

const state = {
  userlist:[]
}

// actions
const actions = {
  getUserList(store){
    api.userListQry().then(res => {
        if(res.data.user){
          store.commit(GET_USER_LIST,res.data)
        }else{
          store.commit(GET_USER_LIST_FAILURE)
          showMsg(store,'暂无数据','success')
        }
      },res => {
        showMsg(store,res.error_msg || '获取数据失败')
      })
  }
}

const mutations = {
  [GET_USER_LIST] (state,res){
      state.userlist = res.user
  },
  [GET_USER_LIST_FAILURE] (state,res){
      state.userlist = null;
  },
}

export default {
  state,
  actions,
  mutations
}
