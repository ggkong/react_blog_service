'use strict';
// eslint-disable-next-line no-unused-vars
module.exports = options => {
  return async function adminauth(ctx, next) {
    // 如果出现undefined 显然是没有带着session 对象的
    console.log(`CTX 中的SESSION是${ctx.session.openId}`);
    if (ctx.session.openId) {
      await next();
    } else {
      console.log(`session 里面到底是什么${ctx.session.openId}`);
      ctx.body = { data: '没有登录' };
    }
  };
};
