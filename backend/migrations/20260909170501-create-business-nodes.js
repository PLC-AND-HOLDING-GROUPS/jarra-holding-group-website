"use strict";

const {
  createTableIfNotExists,
  dropTableIfExists,
} = require("./lib/migration-utils");

module.exports = {
  async up(queryInterface, Sequelize) {
    await createTableIfNotExists(queryInterface, "business_nodes", {
      business_node_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      id_string: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      icon: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      position_x: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      position_y: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      mobile_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await dropTableIfExists(queryInterface, "business_nodes");
  },
};
