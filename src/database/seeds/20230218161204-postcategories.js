'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        category_id: 4,
        post_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        post_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 1,
        post_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
