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
  config.keys = appInfo.name + '_1644213409240_4345';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.mongoose = {
    client: {
      url: 'mongodb://sun-fe-cli.yemaoz.cn/sun-fe-cli',
      options: {
        useUnifiedTopology: true,
        useCreateIndex: true,
        user: 'admin',
        pass: '1234567890987654321',
        auth: { authSource: 'admin' },
      },
      plugins: [],
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
