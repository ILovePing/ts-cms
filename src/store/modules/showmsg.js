import {
  SHOW_MSG,
  HIDE_MSG
} from '../mutation-types'
import { Message } from 'element-ui'
//用的是element-ui的message方法，传参和api一致
const state = {
  message:{
    type: '',
    message: '',
  }
}

const mutations = {
  [SHOW_MSG](state , action){
    state.message = {...action}
    Message(state.message)
  },
  [HIDE_MSG](state, action){
    state.message = {
      type: '',
      message: '',
    }
  }
}

export default {
  state,
  mutations
}
