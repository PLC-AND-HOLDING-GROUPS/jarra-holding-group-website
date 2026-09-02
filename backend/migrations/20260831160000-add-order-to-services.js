"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const { addColumnIfNotExists } = require("./lib/migration-utils");
    await addColumnIfNotExists(queryInterface, "services", "order", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
  },

  async down(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("services");
    if (tableInfo.order) {
      await queryInterface.removeColumn("services", "order");
    }
  },
};
