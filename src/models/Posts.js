const Sequelize = require('sequelize');

class Posts extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        message: Sequelize.STRING,
        user_id: Sequelize.BIGINT,
        likes: Sequelize.BIGINT,
      },
      {
        sequelize,
        tableName: 'posts',
        timestamps: true
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: 'id',
      as: 'user',
    });
  }
}

module.exports = Posts;
