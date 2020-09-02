'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.get('blog_content', {});
    console.log(result);
    this.ctx.body = result;
    // eslint-disable-next-line indent
  }
  async getArticleList() {
    const sql = 'select article.id,typeName,title,article_content,introduce,addTime,view_count from article, type where article.id=type.id';
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: result,
    };
  }
  // eslint-disable-next-line no-empty-function
  async getArticleById() {
    const id = this.ctx.params.id;
    const sql = 'select article.id,typeName,title,article_content,introduce,addTime,view_count from article, type where article.id=type.id and article.id = ' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: result,
    };
  }
}

// eslint-disable-next-line eol-last
module.exports = HomeController;