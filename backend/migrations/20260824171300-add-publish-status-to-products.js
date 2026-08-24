"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("products", "publish_status", {
      type: Sequelize.ENUM("draft", "published", "archived"),
      allowNull: false,
      defaultValue: "draft",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("products", "publish_status");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_products_publish_status";'
    );
  },
};
