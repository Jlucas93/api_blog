import Sequelize from 'sequelize'
class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        user_name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
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
        tableName: 'user',
        timestamps: true
      }
    );

    return this;
  }
}

export default User;
