const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        user_name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        is_admin: Sequelize.BOOLEAN,
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
        tableName: 'users',
        timestamps: true
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Posts, {
      as: 'posts',
      foreignKey: 'user_id',
    });
  }
}

module.exports = User;
