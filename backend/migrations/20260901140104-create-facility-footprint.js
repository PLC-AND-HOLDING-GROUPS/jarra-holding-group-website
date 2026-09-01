"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("facility_footprint", {
      facility_footprint_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      heading: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      locations: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      card_heading: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      card_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("facility_footprint");
  },
};
