/* eslint-disable key-spacing */
'use strict';
const { Controller } = require('egg');

class adminController extends Controller {
  Model = this.ctx.app.model;
  async index() {
    this.ctx.body = 'hi blog 2';
  }

  // 检查登陆
  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    console.log('进入检查方法')
    const result =await this.Model.AdminUser.find({'userName':userName, 'password':password},{_id:false, Id:false, __v:false});
    console.log(`result 的 length 是${result.length}`);
    console.log(result)
    if (result.length > 0) {
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
    const types = await this.Model.Type.find();
    console.log(types)
    // const resType = await this.app.mysql.select('type');
    this.ctx.body = { data: types };
  }

  // 退出登陆
  async outLogin() {
    this.ctx.session.openId = null;
    this.ctx.body = { data:'success' };
  }

  // 添加文章
  async addArticle() {
    // 把所有的 id 都查询 出来
    const articleIds =await this.Model.Article.find({},{Id:true,_id:false})
    const Idlist = new Array()
    articleIds.forEach((value) => {
      Idlist.push(Number(value['Id']))
    });
    console.log(Idlist)  // 准备 使用大 Id
    // 随机生成生成一个Id 且Id 不在list 中
    const randomid = Math.round(Math.random()*10000)
    while (randomid in Idlist) {
      console.log('重新生成Id号');
      randomid = Math.round(Math.random()*10000);
    }
    // 得到请求体作为 参数 访问数据库
    const Article = this.ctx.request.body;
    Article['Id'] = randomid;
    console.log(Article);
    
    const Mongoresult = this.Model.Article.create(Article)
    console.log(Mongoresult)
    if (Mongoresult != null){
      console.log('插入成功')
    }
    // 将数据写入数据库
    // const result = await this.app.mysql.insert('article', Article);
    // console.log(result)
    // const insertSuccess = result.affectedRows === 1;
    // console.log(`成功返回的 是什么${insertSuccess}`);
    // 查询刚存进去的  id 并且返回 给 前端
    // console.log(result.insertId);
    // const articleId = result.insertId;
    const articleId = randomid;
    this.ctx.body = {
      // 这里存在 弊端 可能会出错
      isScussess: true,
      // eslint-disable-next-line object-shorthand
      articleId: articleId,
    };
  }

  // 更新文章
  async upDateArticle() {
    // TODO
    // 查询请求体的 id
    console.log('进入 更新方法');
    const Article = this.ctx.request.body;
    console.log(Article);
    console.log(Article.upDateId);
    const updateSuccess = true;
    await this.Model.Article.update({'Id': Article.upDateId},{'title': Article.title, 'article_content': Article.article_content, 'introduce':Article.introduce, 'addTime': Article.addTime, 'type_id': Article.type_id},(err, raw) => {
      if (err) {
        console.log(err)
        updateSuccess = false;
      }
      else {
        console.log(`row 是 ${raw}`);
        
      }
    })

    // const sql = `update article set type_id = ${Article.type_id} ,title = '${Article.title}' ,article_content = '${Article.article_content}' ,introduce = '${Article.introduce}' ,addTime = '${Article.addTime}' where Id = ${Article.upDateId}`;
    // console.log(sql);
    // const result = await this.app.mysql.query(sql);
    // const updateSuccess = result.affectedRows === 1;
    // 返回给前段 已经被修改
    
    this.ctx.body = {
      isScussess: updateSuccess,
    };
  }
  
  async addUserTest() {
    console.log('aaa')
    const Model = this.ctx.app.model;
    Model.AdminUser.create({'Id':1,'userName':'kongge','password':'123456'});
    Model.AdminUser.create({'Id':2,'userName':'admin','password':'123456'});
    
    // this.ctx.body = userModel
  }
  

}

module.exports = adminController;
