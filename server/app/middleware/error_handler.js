module.exports = () => {
  return function* (next) {
    try {
      yield next;
    } catch (err) {
      this.app.emit('error', err, this);//后台打印出错误的堆栈信息
      console.log(2222222222)
      console.log(err)
      console.log(333333333)
      const status = err.status || 500;
      // const success = false
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && this.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;
      // 从 error 对象上读出各个属性，设置到响应中
      this.body = { error };
      if (status === 422) {
        this.body.detail = err.errors;
      }
      this.status = status;
    }
  };
};
