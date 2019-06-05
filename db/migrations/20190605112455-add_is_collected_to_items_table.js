module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Items',
    'is_collected',
    {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn(
    'Items',
    'is_collected',
  ),
};