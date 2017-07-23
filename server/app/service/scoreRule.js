module.exports = app =>{
  return class ScoreRuleService extends app.Service {
    * list(){
      const scoreRuleList = yield app.mysql.select('score_rule')
      return {
        scoreRuleList,
      }
    }
    * insert(rule){
            const ctx = this.ctx;
      const result = yield app.mysql.beginTransactionScope(function* (conn) {
        // don't commit or rollback by yourself
        yield conn.insert('score_rule', rule);
        return { success: true };
      }, ctx);
      return {
        result
      }
    }
  }
}
