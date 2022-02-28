'use strict';

const { ForeignKeyConstraintError } = require("sequelize/dist");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('unreads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER,
        ForeignKey: true
      },
      username: {
        type: Sequelize.STRING
      },
      seen: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('unreads');
  }
};