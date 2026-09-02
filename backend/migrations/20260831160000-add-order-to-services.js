"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.addColumn("services", "order", {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      });
    } catch (e) {
      if (!e.message.includes('already exists')) {
        throw e;
      }
    }
  },

  async down(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("services");
    if (tableInfo.order) {
      await queryInterface.removeColumn("services", "order");
    }
  },
};
