module.exports = app =>{
  return class UserService extends app.Service {
    * find(uid){
      const user = yield app.mysql.get('user',{uid:uid})
      return {
        user,
      };
    }
    * list(){
      const user = yield app.mysql.query(`select * from user
        inner join score on score.uid = user.uid
        inner join apartment on apartment.apartmentId = user.apartmentId
        where user.outFlag = 0 order by createTime asc`)
      return {
        user,
      }
    }
    * insert(user){
      const ctx = this.ctx;
      const result = yield app.mysql.beginTransactionScope(function* (conn) {
        // don't commit or rollback by yourself
        yield conn.insert('user', user);
        yield conn.insert('score', {uid:user.uid});
        return { success: true };
      }, ctx);
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
