const Sequelize = require('sequelize');

class PostCategories extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        category_id: Sequelize.BIGINT,
        post_id: Sequelize.BIGINT,
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
        tableName: 'postcategories',
        timestamps: true
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Posts, {
      foreignKey: 'post_id',
      as: 'post',
    });

    this.belongsTo(models.Categories, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

module.exports = PostCategories;