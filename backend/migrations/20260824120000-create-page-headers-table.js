"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("page_headers", {
      page_header_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      page_identifier: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      icon: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      attachment_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "attachments",
          key: "attachment_id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("page_headers");
  },
};
