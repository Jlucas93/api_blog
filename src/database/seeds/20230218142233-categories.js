'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Tecnologia',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Entretenimento',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Esportes',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Games',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Política',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
