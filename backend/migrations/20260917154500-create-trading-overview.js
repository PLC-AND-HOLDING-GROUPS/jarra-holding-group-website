"use strict";

const {
  createTableIfNotExists,
  dropTableIfExists,
} = require("./lib/migration-utils");

module.exports = {
  async up(queryInterface, Sequelize) {
    await createTableIfNotExists(queryInterface, "trading_overview", {
      trading_overview_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      page_header: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      hero_title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      hero_description_1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      hero_description_2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      hero_visual: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      principles: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      relationship_nodes: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      market_gap: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      customer_connection: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      big_statement: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      stats: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      trading_cycle: {
        type: Sequelize.JSON,
        allowNull: true,
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
    await dropTableIfExists(queryInterface, "trading_overview");
  },
};
