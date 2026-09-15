"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("canvases", {
      canvas_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title_prefix: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      title_highlight: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      vision_title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      vision_description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      words: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("canvases");
  },
};
