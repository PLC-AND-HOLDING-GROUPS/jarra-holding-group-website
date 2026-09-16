"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
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
  },

  async down(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("business_overview");

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
  }
};
