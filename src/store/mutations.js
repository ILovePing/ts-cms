import * as types from './mutation-types'
export default {
  [types.GET_USER_LIST] (state,res){
      // state.userlist = res.user.map((item,i)=>{return Object.assign(item,{no:i})})
      state.userlist = res.user;
  }
};
