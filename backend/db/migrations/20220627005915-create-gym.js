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
      location: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      title: {
        type: Sequelize.STRING(55),
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.STRING(512),
        unique: true
      },
      sponsoredBy: {
        type: Sequelize.STRING(30),
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
