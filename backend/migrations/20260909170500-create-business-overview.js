"use strict";

const {
  createTableIfNotExists,
  dropTableIfExists,
} = require("./lib/migration-utils");

module.exports = {
  async up(queryInterface, Sequelize) {
    await createTableIfNotExists(queryInterface, "business_overview", {
      business_overview_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      title_part1: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      title_part2: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      description1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      description2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      network_operations: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      page_metadata: {
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
    await dropTableIfExists(queryInterface, "business_overview");
  },
};
