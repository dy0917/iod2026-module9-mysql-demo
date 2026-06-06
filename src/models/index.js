"use strict";
const User = require("./user"); //require the model
const Post = require("./post"); //require the model
Post.belongsTo(User);
User.hasMany(Post);

async function init() {
  await User.sync(); // sync the model
  await Post.sync(); // sync the model
  // also sync any extra models here
}

init();

module.exports = {
  User, // export the model
  Post,
  // also export any extra models here
};
