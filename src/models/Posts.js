const Sequelize = require('sequelize');

class Posts extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        message: Sequelize.STRING,
        user_id: Sequelize.BIGINT,
        likes: Sequelize.BIGINT,
        createdAt: {
          field: 'created_at',
          type: Sequelize.DATE,
        },
        updatedAt: {
          field: 'updated_at',
          type: Sequelize.DATE,
        }
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
    this.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'user',
    });

    this.belongsToMany(models.Categories, {
      through: models.PostCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
      as: 'categories'
    });

  }
}

module.exports = Posts;
