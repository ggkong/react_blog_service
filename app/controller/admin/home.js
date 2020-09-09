/* eslint-disable key-spacing */
'use strict';
const { Controller } = require('egg');

class adminController extends Controller {
  async index() {
    this.ctx.body = 'hi blog 2';
  }

  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql = `select userName from admin_user where userName = '${userName}' and password = '${password}'`;
    console.log(sql);
    const res = await this.app.mysql.query(sql);
    console.log(res.length);
    if (res.length > 0) {
      // 若登陆成功，这回创建一个 新的openId 用来进行验证
      const openId = new Date().getTime();
      // eslint-disable-next-line quote-props
      this.ctx.session.openId = { 'openId': openId }; // 设置seesion
      // 登陆成功 更新秘钥 进行对比
      // const sql = `update admin_user set timelock = '${openId}' where userName = '${userName}'`;
      // const res = await this.app.mysql.query(sql);
      // console.log(res);
      // eslint-disable-next-line quote-props
      this.ctx.body = { 'data': 'success', 'openId' : openId };
      console.log(`this.ctx.session.openId.openId是什么${this.ctx.session.openId.openId}`);
    } else {
      // eslint-disable-next-line quote-props
      this.ctx.body = { data: 'false' };
    }
  }
  // 获取文章列表
  async getTypeInfo() {
    const resType = await this.app.mysql.select('type');
    this.ctx.body = { data: resType };
  }
  async outLogin() {
    this.ctx.session.openId = null;
    this.ctx.body = { data:'success' };

  }
  async addArticle() {
    // 得到请求体作为 参数 访问数据库
    const Article = this.ctx.request.body;
    console.log(Article);
    // TODO
    this.ctx.body = {
      isScussess: true,
    };
  }

}

module.exports = adminController;
