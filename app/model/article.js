/* eslint-disable eol-last */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    id: { type: Number },
    type_id: { type: Number },
    title: { type: String },
    article_content: { type: String },
    introduce: { type: String },
    addTime: { type: String },
    view_count: { type: Number },
    typeName: { type: String },
    Id: { type: String }
  });
  return mongoose.model('article', ArticleSchema);
};