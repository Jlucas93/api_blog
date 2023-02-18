const Sequelize = require('sequelize');

const dbConfig = require('../config/database')

const User = require('../models/User')
const Posts = require('../models/Posts')
const Categories = require('../models/Categories')
const PostsCategories = require('../models/PostCategories')

const models = [
  User,
  Posts,
  Categories,
  PostsCategories,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
