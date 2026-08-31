"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("service_why_us");
    
    if (!tableInfo.cta_heading) {
      await queryInterface.addColumn("service_why_us", "cta_heading", {
        type: Sequelize.STRING(255),
        allowNull: true,
      });
    }
    
    if (!tableInfo.cta_subheading) {
      await queryInterface.addColumn("service_why_us", "cta_subheading", {
        type: Sequelize.TEXT,
        allowNull: true,
      });
    }
    
    if (!tableInfo.cta_buttons) {
      await queryInterface.addColumn("service_why_us", "cta_buttons", {
        type: Sequelize.JSON,
        allowNull: true,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("service_why_us");
    
    if (tableInfo.cta_heading) {
      await queryInterface.removeColumn("service_why_us", "cta_heading");
    }
    
    if (tableInfo.cta_subheading) {
      await queryInterface.removeColumn("service_why_us", "cta_subheading");
    }
    
    if (tableInfo.cta_buttons) {
      await queryInterface.removeColumn("service_why_us", "cta_buttons");
    }
  },
};
