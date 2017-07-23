module.exports = app => {
  class ScoreRuleController extends app.Controller {
    * index(ctx) {
      const rulelist = yield ctx.service.scoreRule.list();
      ctx.body = rulelist;
      ctx.status = 200;
    }
    * create(ctx){
      const rule = Object.assign({},ctx.request.body);
      const res = yield ctx.service.scoreRule.insert(rule);
      ctx.body = res;
      ctx.status = 201;
    }
  }
  return ScoreRuleController;
};
