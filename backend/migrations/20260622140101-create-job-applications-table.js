"use strict";

const {
  createTableIfNotExists,
  dropTableIfExists,
} = require("./lib/migration-utils");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await createTableIfNotExists(queryInterface, "job_applications", {
      application_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      vacancy_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "vacancies",
          key: "vacancy_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      first_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      cover_letter: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      cv_attachment_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "attachments",
          key: "attachment_id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      status: {
        type: Sequelize.ENUM("new", "reviewed", "shortlisted", "rejected", "hired"),
        allowNull: false,
        defaultValue: "new",
      },
      feedback: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await dropTableIfExists(queryInterface, "job_applications");
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_job_applications_status";'
    );
  },
};
