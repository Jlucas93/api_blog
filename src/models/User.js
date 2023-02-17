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
    });
  }
}

module.exports = User;
