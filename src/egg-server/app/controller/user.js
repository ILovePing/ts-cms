module.exports = app => {
  class UserController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      const user = yield ctx.service.user.list();
      ctx.body = user;
      ctx.status = 200;
    }
    * show(){
      const ctx = this.ctx;
      const userId = ctx.params.id || 0;
      const user = yield ctx.service.user.find(userId);
      ctx.body = user;
    }
    * create(){
      const ctx = this.ctx;
      const user = Object.assign({},ctx.request.body);
      const res = yield ctx.service.user.insert(user);
      ctx.body = res;
      ctx.status = 201;
    }
    * update(){
      const ctx = this.ctx
      const user = ctx.request.body
      const res = yield ctx.service.user.update(user,{
        where:{uid:user.uid},
        columns:['username','sex','apartment','mb']
      });
      ctx.body = res;
      ctx.status = 200;
    }
    * destroy(){
      const ctx = this.ctx
      const id = ctx.params.id
      const res = yield ctx.service.user.delete(id);
      ctx.body = res;
      ctx.status = 200;
    }
  }
  return UserController;
};
