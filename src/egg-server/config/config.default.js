module.exports = appInfo => {
  const config = {};
  config.keys = '123123123';
  // config.view = {
  //   defaultViewEngine: 'nunjucks',
  //   mapping: {
  //     '.tpl': 'nunjucks',
  //   },
  // };
  config.middleware = [
  'robot',
  'saveSession',
  'errorHandler',

  ];
  config.errorHandler = {
    // 非 `/api/` 路径不在这里做错误处理，留给默认的 onerror 插件统一处理
    match: '/',
  };
  config.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'ts-cms',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  //去掉curd某些接口的csrf安全防范
  config.security = {
    // csrf: false
  }
  return config;
};
