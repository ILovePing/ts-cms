import axios from 'axios';
import qs from 'qs';
import {getCsrfToken} from '../util/cookie'
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置
//POST传参序列化
axios.interceptors.request.use(
    config => {
      if(config.method  === 'post'){
          config.data = qs.stringify(config.data);
      }
      if (getCsrfToken() && !(/^(GET|HEAD|OPTIONS|TRACE)$/.test(config.method)) ) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
             config.headers['x-csrf-token'] = getCsrfToken();
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
  // userLogStatus(){
  //   return axios.get('/api/logstatus')
  // },
  userInsert:function(user,cb){
    axios.post('/api/user',user).then(function (res) {
        setTimeout(()=>{
          console.log(res)
          cb(res.data)
        },300)

    });
  },
  userDelete:function(uid,cb){
    axios.delete('/api/user/'+uid).then(function (res) {
        setTimeout(()=>{
          console.log(res)
          cb(res.data)
        },300)
    });
  },
  userUpdate:function(user,cb){
    axios.put('/api/user/'+user.uid,user).then(function (res) {
        setTimeout(()=>{
          console.log(res)
          cb(res.data)
        },300)

    });
  }

}
