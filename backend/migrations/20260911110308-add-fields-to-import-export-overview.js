'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('import_export_overview', 'center_icon', { type: Sequelize.STRING(50), allowNull: true });
    await queryInterface.addColumn('import_export_overview', 'center_title', { type: Sequelize.STRING(255), allowNull: true });
    await queryInterface.addColumn('import_export_overview', 'center_subtitle', { type: Sequelize.STRING(255), allowNull: true });
    await queryInterface.addColumn('import_export_overview', 'cta_button_title', { type: Sequelize.STRING(255), allowNull: true });
    await queryInterface.addColumn('import_export_overview', 'cta_button_url', { type: Sequelize.STRING(255), allowNull: true });
    await queryInterface.addColumn('import_export_overview', 'cta_button_icon', { type: Sequelize.STRING(50), allowNull: true });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('import_export_overview', 'center_icon');
    await queryInterface.removeColumn('import_export_overview', 'center_title');
    await queryInterface.removeColumn('import_export_overview', 'center_subtitle');
    await queryInterface.removeColumn('import_export_overview', 'cta_button_title');
    await queryInterface.removeColumn('import_export_overview', 'cta_button_url');
    await queryInterface.removeColumn('import_export_overview', 'cta_button_icon');
  }
};
