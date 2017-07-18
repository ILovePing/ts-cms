import axios from 'axios';
import qs from 'qs';
import cookieUtil from 'js-cookie'
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置
//POST传参序列化
axios.interceptors.request.use(
    config => {
      if(config.method  === 'post'){
          config.data = qs.stringify(config.data);
      }
      if (cookieUtil.get('csrfToken') && !(/^(GET|HEAD|OPTIONS|TRACE)$/.test(config.method)) ) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
             config.headers['x-csrf-token'] = cookieUtil.get('csrfToken')
         }
      return config;
    },
    error =>{
    return Promise.reject(error);
});

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    // store.commit(types.LOGOUT);
                    // router.replace({
                    //     path: 'login',
                    //     query: {redirect: router.currentRoute.fullPath}
                    // })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });


export  default {
  /*
   * 获取用户列表信息
   * */
  userListQry() {
    return axios.get('/api/user')
  },
  userLogin(postdata){
    return axios.post('/api/login',postdata)
  },
  userLogOut(){
    return axios.post('/api/logout')
  },
  userInsert(user){
    return axios.post('/api/user',user)
  },
  userDelete(uid){
    return axios.delete('/api/user/'+uid)
  },
  userUpdate(user){
    return axios.put('/api/user/'+user.uid,user)
  }

}
