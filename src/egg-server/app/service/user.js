module.exports = app =>{
  return class UserService extends app.Service {
    * find(uid){//传入工号
      const user = yield app.mysql.get('user',{uid:uid})
      console.log(`SELECT * FROM USER WHERE uid = ${uid}`)
      return {
        user,
      };
    }
    * list(){//
      const user = yield app.mysql.select('user')
      return {
        user,
      };
    }
    * insert(user){
      const result = yield app.mysql.insert('user', user)
      // const insertSuccess = result.affectedRows === 1
      // console.log(result)
      return {
        result:result
      }
    }
    * delete(uid){
      const result = yield app.mysql.delete('user',{uid:uid})
      return {
        result:result
      }
    }
    * update(user,options){
      // let {uid,...updateRow} = user;
      // updateRow.id = uid;
      // 目前不支持对象的扩展解构语法。
      // let v = user.uid
      // delete user.uid
      // user.id = v
      const result = yield app.mysql.update('user',user,options)
      return {
        result:result
      }
    }
  }
}
