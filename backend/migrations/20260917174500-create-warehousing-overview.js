"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("warehousing_overview", {
      warehousing_overview_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      page_subtitle: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      page_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      hero_title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      hero_image: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      hero_description_1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      hero_description_2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      page_header: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      stat_overlay: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      flow_of_goods: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      editorial_cards: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      facilities_section: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      trading_section: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      market_connection: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      agriculture_section: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      business_steps: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      visualization_nodes: {
        type: Sequelize.JSON,
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
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("warehousing_overview");
  },
};
