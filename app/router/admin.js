'use strict';
module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.get('/admin/index', adminauth, controller.admin.home.index);
  router.post('/admin/checkOpenId', controller.admin.home.checkLogin);
  router.get('/admin/getTypeInfo', adminauth, controller.admin.home.getTypeInfo);
  router.get('/admin/outLogin', adminauth, controller.admin.home.outLogin);
  router.post('/admin/addArticle', adminauth, controller.admin.home.addArticle); // 增加文章
  // eslint-disable-next-line eol-last
};