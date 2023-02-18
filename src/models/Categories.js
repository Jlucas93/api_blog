const Sequelize = require('sequelize');

class Categories extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
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
        tableName: 'categories',
        timestamps: true
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsToMany(models.Posts, {
      through: models.PostCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
      as: 'posts',
    });
  }

}

module.exports = Categories;