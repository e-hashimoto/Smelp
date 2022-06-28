'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Gyms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(55),
        allowNull: false,
        unique: true
      },
      location: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1024),
        allowNull: true,
        unique: false
      },
      brandId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Brands'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Gyms');
  }
};
