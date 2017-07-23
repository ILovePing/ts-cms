module.exports = app => {
  app.resources('user', '/user', app.controller.user);
  app.resources('score', '/score', app.controller.user);
  app.resources('apartment', '/apartment', app.controller.apartment);
  app.resources('scoreRule', '/scoreRule', app.controller.scoreRule);
  app.post('login','/login','user.login')
  app.post('logout','/logout','user.logout')
};
