'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const adminUserSchema = new Schema({
    id: { type: Number },
    userName: { type: String },
    password: { type: String },
  });
  return mongoose.model('admin_user', adminUserSchema);
// eslint-disable-next-line eol-last
};