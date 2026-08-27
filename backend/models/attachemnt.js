"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Attachment extends Model {
    static associate(models) {

      Attachment.hasMany(models.BackgroundAttachment, {
        foreignKey: "attachment_id",
        as: "backgroundAttachments",
      });

      Attachment.hasMany(models.LeadershipAttachment, {
        foreignKey: "attachment_id",
        as: "leadershipAttachments",
      });

      Attachment.hasMany(models.PartnerAttachment, {
        foreignKey: "attachment_id",
        as: "partnerAttachments",
      });

      Attachment.hasMany(models.Slider, {
        foreignKey: "attachment_id",
        as: "sliders",
      });

      Attachment.hasMany(models.Card, {
        foreignKey: "attachment_id",
        as: "cards",
      });


      Attachment.hasMany(models.ASMAttachment, {
        foreignKey: "attachment_id",
        as: "asmAttachments",
      });

      Attachment.hasMany(models.ASMPreview, {
        foreignKey: "attachment_id",
        as: "asmPreviews",
      });

      Attachment.hasMany(models.InvestigationStrategy, {
        foreignKey: "attachment_id",
        as: "investigationStrategies",
      });


      Attachment.hasMany(models.Vacancy, {
        foreignKey: "attachment_id",
        as: "vacancies",
      });
      Attachment.hasMany(models.PageHeader, {
        foreignKey: "attachment_id",
        as: "pageHeaders",
      });
    }
  }

  Attachment.init(
    {
      attachment_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      file_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      file_path: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      file_path_thumb: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      file_path_medium: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      file_path_large: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      mime_type: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      width: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      uploaded_by: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Attachment",
      tableName: "attachments",
      timestamps: false,
      underscored: true,
    },
  );

  return Attachment;
};
