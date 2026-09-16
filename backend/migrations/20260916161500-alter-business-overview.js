"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("business_overview");

    // Add missing columns
    if (!tableInfo.business_data) {
      await queryInterface.addColumn("business_overview", "business_data", {
        type: Sequelize.JSON,
        allowNull: true,
      });
    }
    if (!tableInfo.business_categories) {
      await queryInterface.addColumn("business_overview", "business_categories", {
        type: Sequelize.JSON,
        allowNull: true,
      });
    }
    if (!tableInfo.key_metrics) {
      await queryInterface.addColumn("business_overview", "key_metrics", {
        type: Sequelize.JSON,
        allowNull: true,
      });
    }
    if (!tableInfo.operations_data) {
      await queryInterface.addColumn("business_overview", "operations_data", {
        type: Sequelize.JSON,
        allowNull: true,
      });
    }
    if (!tableInfo.quick_stats) {
      await queryInterface.addColumn("business_overview", "quick_stats", {
        type: Sequelize.JSON,
        allowNull: true,
      });
    }

    // Drop old columns if they exist
    if (tableInfo.title_part1) {
      await queryInterface.removeColumn("business_overview", "title_part1");
    }
    if (tableInfo.title_part2) {
      await queryInterface.removeColumn("business_overview", "title_part2");
    }
    if (tableInfo.description1) {
      await queryInterface.removeColumn("business_overview", "description1");
    }
    if (tableInfo.description2) {
      await queryInterface.removeColumn("business_overview", "description2");
    }
  },

  async down(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("business_overview");

    if (!tableInfo.title_part1) {
      await queryInterface.addColumn("business_overview", "title_part1", {
        type: Sequelize.STRING(255),
        allowNull: true,
      });
    }
    if (!tableInfo.title_part2) {
      await queryInterface.addColumn("business_overview", "title_part2", {
        type: Sequelize.STRING(255),
        allowNull: true,
      });
    }
    if (!tableInfo.description1) {
      await queryInterface.addColumn("business_overview", "description1", {
        type: Sequelize.TEXT,
        allowNull: true,
      });
    }
    if (!tableInfo.description2) {
      await queryInterface.addColumn("business_overview", "description2", {
        type: Sequelize.TEXT,
        allowNull: true,
      });
    }

    if (tableInfo.business_data) {
      await queryInterface.removeColumn("business_overview", "business_data");
    }
    if (tableInfo.business_categories) {
      await queryInterface.removeColumn("business_overview", "business_categories");
    }
    if (tableInfo.key_metrics) {
      await queryInterface.removeColumn("business_overview", "key_metrics");
    }
    if (tableInfo.operations_data) {
      await queryInterface.removeColumn("business_overview", "operations_data");
    }
    if (tableInfo.quick_stats) {
      await queryInterface.removeColumn("business_overview", "quick_stats");
    }
  }
};
