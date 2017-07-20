module.exports = app =>{
  return class ApartmentService extends app.Service {
    * list(){
      const apartmentlist = yield app.mysql.select('apartment')
      return {
        apartmentlist,
      }
    }
  }
}
