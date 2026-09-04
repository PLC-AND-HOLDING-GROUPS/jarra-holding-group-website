"use strict";

const {
  createTableIfNotExists,
  dropTableIfExists,
} = require("./lib/migration-utils");

module.exports = {
  async up(queryInterface, Sequelize) {
    await createTableIfNotExists(queryInterface, "certification_attachments", {
      certification_attachment_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      certification_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "certifications",
          key: "certification_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      attachment_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "attachments",
          key: "attachment_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await dropTableIfExists(queryInterface, "certification_attachments");
  },
};
