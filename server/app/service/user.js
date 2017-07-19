module.exports = app =>{
  return class UserService extends app.Service {
    * find(uid){
      const user = yield app.mysql.get('user',{uid:uid})
      return {
        user,
      };
    }
    * list(){
      const user = yield app.mysql.select('user')
      return {
        user,
      };
    }
    * insert(user){
      const result = yield app.mysql.insert('user', user)
      return {
        result
      }
    }
    * delete(uid){
      const result = yield app.mysql.delete('user',{uid:uid})
      return {
        result
      }
    }
    * update(user,options){
      const result = yield app.mysql.update('user',user,options)
      return {
        result
      }
    }
    * login(logindata){
      const result = yield this.app.mysql.get('user', logindata);
      return {
        result
      }
    }
  }
}
