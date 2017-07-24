module.exports = app => {
  class ScoreLogController extends app.Controller {
    * index(ctx) {
      const loglist = yield ctx.service.scorelog.list();
      ctx.body = loglist;
      ctx.status = 200;
    }
    // * create(ctx){
    //   const log = Object.assign({},ctx.request.body);
    //   const res = yield ctx.service.scorelog.insert(log);
    //   ctx.body = res;
    //   ctx.status = 201;
    // }
  }
  return ScoreLogController;
};
