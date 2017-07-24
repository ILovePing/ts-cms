module.exports = app =>{
  return class MeetService extends app.Service {
    * list(){
      const meetList = yield app.mysql.select('meet')
      return {
        meetList,
      }
    }
    * insert(obj){
      const ctx = this.ctx
      const result = yield app.mysql.beginTransactionScope(function* (conn) {
        for(let log of obj.logs){
          yield conn.insert('scorelog', log);
        }
        yield conn.insert('meet',obj.meet)
        return { success: true }
      }, ctx)
      return {
        result
      }
    }
  }
}
