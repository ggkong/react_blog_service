/* eslint valid-jsdoc: "off" */

'use strict';

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
  config.keys = appInfo.name + '_1598922523657_7280';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      // 关闭csrf 验证机制
      enable: false,
    },
    // eslint-disable-next-line comma-dangle
    domainWhiteList: [ '*' ]
  };
  config.cors = {
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.mysql = {
    // database configuration
    client: {
      // host
      host: '39.101.140.131',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      // eslint-disable-next-line no-trailing-spaces
      database: 'react_blog',   
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  
  // 配置 使用 mongoDB
  exports.mongoose = {
    client: {
        url: 'mongodb://39.101.162.208/test',
        options: {
            useNewUrlParser: true,
        },
    }
};

  return {
    ...config,
    ...userConfig,
  };
};
