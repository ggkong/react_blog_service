'use strict';
module.exports = app => {
  const { router, controller } = app;
  // router.get('/default/index', controller.default.home.index);
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo);
  router.get('/default/getListByTypeId/:type_id', controller.default.home.getListByTypeId);
  // eslint-disable-next-line eol-last
  router.get('/default/addTypeTest', controller.default.home.addTypeTest);
  router.get('/default/addArticleTest', controller.default.home.addArticleTest);
};