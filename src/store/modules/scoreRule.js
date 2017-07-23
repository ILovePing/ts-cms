import {
  GET_SCORERULE,
  GET_SCORERULE_FAILURE
} from '../mutation-types'
import { showMsg } from '../actions'
import api from '../../api'
const state = {
  scoreRuleList:[]
}

const actions = {
  getScoreRuleList(store){
    api.scoreRuleQry().then(res => {
        if(res.data.scoreRuleList){
          store.commit(GET_SCORERULE,res.data)
        }else{
          store.commit(GET_SCORERULE_FAILURE)
          showMsg(store,'暂无数据','success')
        }
      },res => {
        showMsg(store,res.error_msg || '获取数据失败')
      })
  }
}
const mutations = {
  [GET_SCORERULE](state , data){
    state.scoreRuleList = data.scoreRuleList
  },
  [GET_SCORERULE_FAILURE](state){
    state.scoreRuleList = [];
  }
}

export default {
  state,
  mutations,
  actions
}
