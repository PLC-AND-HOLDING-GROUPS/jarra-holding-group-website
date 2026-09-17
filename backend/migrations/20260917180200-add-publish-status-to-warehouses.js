"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("warehouses");
    if (!tableInfo.publish_status) {
      await queryInterface.addColumn("warehouses", "publish_status", {
        type: Sequelize.STRING(50),
        defaultValue: "published",
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("warehouses");
    if (tableInfo.publish_status) {
      await queryInterface.removeColumn("warehouses", "publish_status");
    }
  },
};
