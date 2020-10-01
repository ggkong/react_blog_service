'use strict';

/** @type Egg.EggPlugin */
exports.mysql = {
  enable: true,
  // eslint-disable-next-line comma-dangle
  package: 'egg-mysql'
// eslint-disable-next-line semi
}

// 添加配件 进行跨域
exports.cors = {
  enable: true,
  // eslint-disable-next-line comma-dangle
  package: 'egg-cors'
// eslint-disable-next-line semi
}

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
