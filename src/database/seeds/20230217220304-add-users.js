'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        user_name: 'admin',
        email: 'admin@admin.com',
        password: '123456',
        is_admin: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'User',
        user_name: 'user',
        email: 'user@user.com',
        password: '123456',
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
