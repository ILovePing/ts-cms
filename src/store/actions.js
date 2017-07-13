import * as types from './mutation-types'

export const showMsg = ({commit}, message,type='error') => {
  commit(types.SHOW_MSG, {message,type})
}
export const hideMsg = ({commit}) => {
  commit(types.HIDE_MSG)
}
