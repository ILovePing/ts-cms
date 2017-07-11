import * as types from './mutation-types'
import api from '../api/api'

export default {
  getUserList({commit}){
    api.userListQry((res)=>{
      commit(types.GET_USER_LIST,res);
    })
  }
};
