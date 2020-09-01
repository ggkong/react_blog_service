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
    const sql = 'SELECT * FROM article';
    // const sql = 'SELECT article.id as id,' +
    // 'article.title as title,' +
    // 'article.introduce as introduce,' +
    // 'article.addTime as addTime,' +
    // 'article.view_count as view_count ,' +
    // '.type.typeName as typeName ' +
    // 'FROM article LEFT JOIN type ON article.type_id = type.Id';
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: result,
    };
  }
}

// eslint-disable-next-line eol-last
module.exports = HomeController;