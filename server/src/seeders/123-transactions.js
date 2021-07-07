module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'Transactions',
      [
        {
          userId: 1,
          typeOperation: 'income',
          sum: 105,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          typeOperation: 'expense',
          sum: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          typeOperation: 'income',
          sum: 260,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          typeOperation: 'income',
          sum: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          typeOperation: 'expense',
          sum: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  },
};