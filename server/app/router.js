module.exports = app => {
  app.resources('user', '/user', app.controller.user);
  app.post('login','/login','user.login')
  app.post('logout','/logout','user.logout')
};
