module.exports = app => {
  app.get('/', app.controller.home.index);
  app.resources('user', '/user', app.controller.user);
  app.post('login','/login',app.middlewares.addToken(),'user.login')
};
