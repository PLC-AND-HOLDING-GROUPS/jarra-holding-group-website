"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("service_overview");
    if (!tableInfo.cards) {
      await queryInterface.addColumn("service_overview", "cards", {
        type: Sequelize.JSON,
        allowNull: true,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("service_overview");
    if (tableInfo.cards) {
      await queryInterface.removeColumn("service_overview", "cards");
    }
  },
};
