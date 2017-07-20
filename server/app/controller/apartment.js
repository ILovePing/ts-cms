module.exports = app => {
  class ApartmentController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      const apartmentlist = yield ctx.service.apartment.list();
      ctx.body = apartmentlist;
      ctx.status = 200;
    }
  }
  return ApartmentController;
};
