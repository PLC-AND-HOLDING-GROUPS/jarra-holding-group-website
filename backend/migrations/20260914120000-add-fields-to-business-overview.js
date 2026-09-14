'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableInfo = await queryInterface.describeTable('business_overview');

    if (!tableInfo.network_operations) {
      await queryInterface.addColumn('business_overview', 'network_operations', {
        type: Sequelize.JSON,
        allowNull: true,
      });
    }

    if (!tableInfo.page_metadata) {
      await queryInterface.addColumn('business_overview', 'page_metadata', {
        type: Sequelize.JSON,
        allowNull: true,
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('business_overview', 'network_operations');
    await queryInterface.removeColumn('business_overview', 'page_metadata');
  }
};
