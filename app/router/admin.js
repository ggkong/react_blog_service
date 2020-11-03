'use strict';
module.exports = app => {
  const { router, controller } = app;
  // const adminauth = app.middleware.adminauth();
  router.get('/admin/index', controller.admin.home.index);
  router.post('/admin/checkOpenId', controller.admin.home.checkLogin);
  router.get('/admin/getTypeInfo', controller.admin.home.getTypeInfo);
  router.get('/admin/outLogin', controller.admin.home.outLogin);
  router.post('/admin/addArticle', controller.admin.home.addArticle); // 增加文章
  router.post('/admin/upDateArticle', controller.admin.home.upDateArticle); // 更新文章
  router.get('/admin/getArticleList', controller.admin.home.getArticleList);
  // eslint-disable-next-line eol-last
};