module.exports = app =>{
  return class ScoreLogService extends app.Service {
    * list(){
      const scoreLogList = yield app.mysql.select('scorelog')
      return {
        scoreLogList,
      }
    }
  }
}
