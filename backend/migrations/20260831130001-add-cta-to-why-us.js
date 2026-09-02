"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable("service_why_us");
    
    try {
      await queryInterface.addColumn("service_why_us", "cta_heading", {
        type: Sequelize.STRING(255),
        allowNull: true,
      });
    } catch (e) {
      if (!e.message.includes('already exists')) throw e;
    }

    try {
      await queryInterface.addColumn("service_why_us", "cta_subheading", {
        type: Sequelize.TEXT,
        allowNull: true,
      });
    } catch (e) {
      if (!e.message.includes('already exists')) throw e;
    }

    try {
      await queryInterface.addColumn("service_why_us", "cta_buttons", {
        type: Sequelize.JSON,
        allowNull: true,
      });
    } catch (e) {
      if (!e.message.includes('already exists')) throw e;
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
