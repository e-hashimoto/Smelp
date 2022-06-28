'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gymId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Gyms'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users'
        }
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(500),
        allowNull: false
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
    return queryInterface.dropTable('Reviews');
  }
};
