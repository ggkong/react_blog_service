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
    const sql = `select userName from admin_user where userName = ${userName} and password = ${password}`;
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      // 登陆成功
      const openId = new Date().getTime();
      // eslint-disable-next-line quote-props
      this.ctx.session.openId = { 'openId': openId }; // 设置seesion
      // eslint-disable-next-line quote-props
      this.ctx.body = { 'data': 'success', 'openId' : openId };
    } else {
      // eslint-disable-next-line quote-props
      this.ctx.body = { data: 'false' };
    }
  }
}

module.exports = adminController;
