"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.addColumn("service_overview", "cards", {
        type: Sequelize.JSON,
        allowNull: true,
      });
    } catch (e) {
      if (!e.message.includes('already exists')) throw e;
    }
  },

  async down(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("service_overview");
    if (tableInfo.cards) {
      await queryInterface.removeColumn("service_overview", "cards");
    }
  },
};
