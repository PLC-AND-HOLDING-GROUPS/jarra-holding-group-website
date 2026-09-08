"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class JobApplication extends Model {
    static associate(models) {
      JobApplication.belongsTo(models.Vacancy, {
        foreignKey: "vacancy_id",
        as: "vacancy",
      });
      JobApplication.belongsTo(models.Attachment, {
        foreignKey: "cv_attachment_id",
        as: "cv_attachment",
      });
    }
  }

  JobApplication.init(
    {
      application_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      vacancy_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      cover_letter: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      cv_attachment_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("new", "reviewed", "shortlisted", "rejected", "hired"),
        allowNull: false,
        defaultValue: "new",
      },
      feedback: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "JobApplication",
      tableName: "job_applications",
      timestamps: false,
      underscored: true,
      paranoid: true,
    }
  );

  return JobApplication;
};
