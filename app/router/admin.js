'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/admin/index', controller.admin.home.index);
  router.post('/admin/checkOpenId', controller.admin.home.checkLogin);
  // eslint-disable-next-line eol-last
};