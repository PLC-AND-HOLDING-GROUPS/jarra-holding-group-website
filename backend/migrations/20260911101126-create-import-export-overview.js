"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("import_export_overview", {
      import_export_overview_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      page_subtitle: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      page_title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      page_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      export_title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      export_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      import_title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      import_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      stat1_value: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      stat1_label: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      stat1_subtext: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      stat2_value: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      stat2_label: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      cta_title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      cta_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      center_icon: { type: Sequelize.STRING(50), allowNull: true },
      center_title: { type: Sequelize.STRING(255), allowNull: true },
      center_subtitle: { type: Sequelize.STRING(255), allowNull: true },
      cta_button_title: { type: Sequelize.STRING(255), allowNull: true },
      cta_button_url: { type: Sequelize.STRING(255), allowNull: true },
      cta_button_icon: { type: Sequelize.STRING(50), allowNull: true },
      created_at: {
        allowNull: false,

        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("import_export_overview");
  },
};