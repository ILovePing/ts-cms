module.exports = app => {
  class ScoreController extends app.Controller {
    * update(ctx){
      const data = ctx.request.body
      const res = yield ctx.service.score.update(data,{
        where:{uid:data.uid},
        columns:['score']
      });
      ctx.body = res;
      ctx.status = 200;
    }
  }
  return ScoreController;
};
