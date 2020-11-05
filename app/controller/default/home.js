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
    const sql = 'select article.id,typeName,title,article_content,introduce,addTime,view_count from article, type where article.type_id=type.id';
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: result,
    };
  }
  // eslint-disable-next-line no-empty-function
  async getArticleById() {
    const id = this.ctx.params.id;
    const sql = 'select article.id,article.type_id as type_id,typeName,title,article_content,introduce,addTime,view_count from article, type where article.type_id=type.id and article.id = ' + id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: result,
    };
  }

  // 获取type 列表 名称和 编号
  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    console.log(result);
    this.ctx.body = { data: result };
  }

  // 根据 不同的 类型获取 文章
  async getListByTypeId() {
    const type_id = this.ctx.params.type_id;
    const sql = 'select article.id,typeName,title,article_content,introduce, addTime,view_count from article, type where article.type_id=type.id and article.type_id = ' + type_id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: result,
    };
  }
  async search() {
    const { searchValue } = await this.ctx.request.body;
    console.log(`后台请求到的数据${searchValue}`);
    const result = await this.app.elasticsearch.search({
      index: 'article',
      body: {
        query: {
          bool: {
            should: [
              { match: {
                title: searchValue,
              } },
              { match: {
                introduce: searchValue,
              } },
              { match: {
                article_content: searchValue,
              } },
            ],
          },
        },
        highlight: {
          pre_tags: "<span style='color:red'>",
          post_tags: '</span>',
          fields: {
            title: {},
            introduce: {},
            article_content: {},
          },
        },
      },
    });
    // 返回的结果
    console.log(result.hits.hits);
    this.ctx.body = { data: result.hits.hits };
  }
}

// eslint-disable-next-line eol-last
module.exports = HomeController;