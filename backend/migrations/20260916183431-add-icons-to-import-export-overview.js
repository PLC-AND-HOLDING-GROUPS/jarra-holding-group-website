'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('import_export_overview', 'export_icon', {
      type: Sequelize.STRING(50),
      allowNull: true,
      defaultValue: 'Plane'
    });
    
    await queryInterface.addColumn('import_export_overview', 'import_icon', {
      type: Sequelize.STRING(50),
      allowNull: true,
      defaultValue: 'Ship'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('import_export_overview', 'export_icon');
    await queryInterface.removeColumn('import_export_overview', 'import_icon');
  }
};
