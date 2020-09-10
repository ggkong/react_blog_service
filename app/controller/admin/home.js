/* eslint-disable key-spacing */
'use strict';
const { Controller } = require('egg');

class adminController extends Controller {
  async index() {
    this.ctx.body = 'hi blog 2';
  }

  // 检查登陆
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

  // 退出登陆
  async outLogin() {
    this.ctx.session.openId = null;
    this.ctx.body = { data:'success' };

  }

  // 添加文章
  async addArticle() {
    // 得到请求体作为 参数 访问数据库
    const Article = this.ctx.request.body;
    console.log(Article);
    // 将数据写入数据库
    const result = await this.app.mysql.insert('article', Article);
    const insertSuccess = result.affectedRows === 1;
    console.log(`成功返回的 是什么${insertSuccess}`);
    // 查询刚存进去的  id 并且返回 给 前端
    console.log(result.insertId);
    const articleId = result.insertId;
    this.ctx.body = {
      isScussess: insertSuccess,
      // eslint-disable-next-line object-shorthand
      articleId: articleId,
    };
  }

  // 更新文章
  async upDateArticle() {
    // TODO
    // 查询请求体的 id
    console.log('jinru 更新方法');
    const Article = this.ctx.request.body;
    console.log(Article);
    const sql = `update article set type_id = ${Article.type_id} ,title = '${Article.title}' ,article_content = '${Article.article_content}' ,introduce = '${Article.introduce}' ,addTime = '${Article.addTime}' where Id = ${Article.upDateId}`;
    console.log(sql);
    const result = await this.app.mysql.query(sql);
    const updateSuccess = result.affectedRows === 1;
    // 返回给前段 已经被修改
    this.ctx.body = {
      isScussess: updateSuccess,
    };
  }

}

module.exports = adminController;
