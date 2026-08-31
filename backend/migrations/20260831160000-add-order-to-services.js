"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("services");
    if (!tableInfo.order) {
      await queryInterface.addColumn("services", "order", {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("services");
    if (tableInfo.order) {
      await queryInterface.removeColumn("services", "order");
    }
  },
};
