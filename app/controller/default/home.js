'use strict';

const { app } = require('egg-mock');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  Model = this.ctx.app.model;
  async index() {
    const result = await this.app.mysql.get('blog_content', {});
    console.log(result);
    this.ctx.body = result;
    // eslint-disable-next-line indent
  }
  async getArticleList() {
    // 获取所有的 文章列表
    // this.ctx.body = {data: this.Model.Article.find()}
    const articles = await this.Model.Article.find()
    // 在指定查询的 时候必须 要把 前面的 {} 加上 即使为空
    const types = await this.Model.Type.find({},{_id:false,id:true,typeName:true});
    articles.forEach((ArticleValue, index) => {
      types.forEach((typeValue) => {
        if (typeValue['id'] == ArticleValue['type_id']){
          ArticleValue['typeName'] = typeValue['typeName']
        }
      })
    })
    this.ctx.body = {'data':articles}
  }
  // eslint-disable-next-line no-empty-function
  async getArticleById() {
    const id = this.ctx.params.id;
    const article = await this.Model.Article.find({'Id':Number(id)},{_id:false,__v:false})
    const types = await this.Model.Type.find({},{_id:false,__v:false});
    types.forEach((value) => {
      if (article[0]['type_id'] == value['id']){
        article[0]['typeName'] = value['typeName']
      }
    })
    this.ctx.body = {
      data: article,
    };
  }

  // 获取type 列表 名称和 编号
  async getTypeInfo() {
    const types = await this.Model.Type.find({},{_id:false,__v:false})
    // const result = await this.app.mysql.select('type');
    // console.log(result);
    this.ctx.body = { data: types };
  }

  // 根据 不同的 类型获取 文章
  async getListByTypeId() {
    const type_id = this.ctx.params.type_id;
    
    const articles = await this.Model.Article.find({'type_id':Number(type_id)},{_id:false,__v:false})
    const types = await this.Model.Type.find({},{_id:false,__v:false});
    articles.forEach((ArticleValue, index) => {
      types.forEach((typeValue) => {
        if (typeValue['id'] == ArticleValue['type_id']){
          ArticleValue['typeName'] = typeValue['typeName']
        }
      })
    })

    this.ctx.body = {
      data: articles,
    };
  }

  //--------------下面的都是测试方法  就不用看了
  async addTypeTest() {
    // 访问 模型 并且 添加数据 到 模型
    // const insertData = {'id':2, 'typeName':'生活blog', 'orderNum' : 2}
    // console.log(this.ctx.app.model.Type.create(insertData))
    const result = await this.ctx.app.model.Type.find()
    console.log(result)
    this.ctx.body = result
  }
  
  async addArticleTest(){
    const Model = this.ctx.app.model;
    // console.log(Model)
    const insertData = {
        "id": 3,
        "type_id": 2,
        "title": "人生若只如初见",
        "article_content": "人生若只如初见，何事秋风悲画扇？\r\n等闲变却故人心，却道故人心易变。\r\n骊山语罢清宵半，泪雨霖铃终不怨。\r\n何如薄幸锦衣郎，比翼连枝当日愿。",
        "introduce": "人生若只如初见”这句话出自清代著名词人纳兰性德（纳兰容若）（1655－1685，满族）的《木兰花令·拟古决绝词》，意思是说“事物的结果并不像人们最初想象的那样美好，在发展的过程中往往会变化得超出人们最初的理解，没有了刚刚认识的时候的美好、淡然。那么一切停留在初次的感觉多么美妙，当时的无所挂碍，无所牵绊，一切又是那么自然。初见时的美好，结局的超乎想象，勾绘的人生，总有那么几许淡淡的遗憾和哀伤”。",
        "addTime": "20201815",
        "view_count": 1000
    };
    Model.Article.create(insertData)
  }
}

// eslint-disable-next-line eol-last
module.exports = HomeController;