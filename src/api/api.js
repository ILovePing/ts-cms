import axios from 'axios';
import qs from 'qs';
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置
//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});
export  default {
  /*
   * 获取用户列表信息
   * */
  userListQry:function (cb) {
      axios.get('/api/user').then(function (res) {
          setTimeout(()=>{
            cb(res.data)
          },300)
      });
  },
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
