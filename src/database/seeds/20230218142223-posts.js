'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'Hogwarts Legacy',
        message: 'Jogo baseado em Harry Potter foi lançado',
        user_id: 1,
        likes: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'O chatGPT',
        message: 'Esse post é referente a nova IA, ChatGPT',
        user_id: 1,
        likes: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Google anuncia nova IA',
        message: 'Google anuncia a IA chamada Bard, seria o novo concorrente do chatGPT?',
        user_id: 2,
        likes: 27,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('posts', null, {});

  }
};
