import {
  GET_APARTMENT_DICT,
  GET_APARTMENT_DICT_FAILURE
} from '../mutation-types'
import { showMsg } from '../actions'
import api from '../../api'
const state = {
  apartmentlist:[]
}

const actions = {
  getAptDict(store){
    api.apartmentQry().then(res => {
        if(res.data.apartmentlist){
          store.commit(GET_APARTMENT_DICT,res.data)
        }else{
          store.commit(GET_APARTMENT_DICT_FAILURE)
          showMsg(store,'暂无数据','success')
        }
      },res => {
        showMsg(store,res.error_msg || '获取数据失败')
      })
  }
}
const mutations = {
  [GET_APARTMENT_DICT](state , data){
    state.apartmentlist = data.apartmentlist
  },
  [GET_APARTMENT_DICT_FAILURE](state){
    state.apartmentlist = [];
  }
}

export default {
  state,
  mutations,
  actions
}
