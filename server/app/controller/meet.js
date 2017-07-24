module.exports = app => {
  class MeetController extends app.Controller {
    * index(ctx) {
      const meetlist = yield ctx.service.meet.list();
      ctx.body = meetlist;
      ctx.status = 200;
    }
    * create(ctx){
      const obj = Object.assign({},ctx.request.body);
      const res = yield ctx.service.meet.insert(obj);
      ctx.body = res;
      ctx.status = 201;
    }
  }
  return MeetController;
};
