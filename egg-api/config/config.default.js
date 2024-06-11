/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1717753706712_5468';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'mysql.sqlpub.com',
      // 端口号
      port: '3306',
      // 用户名
      user: 'zz_dev',
      // 密码
      password: 'I1yXNl5EpIaBTikg',
      // 数据库名
      database: 'zz_dev',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };


  return {
    ...config,
    ...userConfig,
  };
};
