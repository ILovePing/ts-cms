module.exports = app =>{
  return class ScoreService extends app.Service {
    * update(data,options){
      const result = yield app.mysql.update('score',data,options)
      return {
        result
      }
    }
  }
}
