"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CertificationAttachment extends Model {
    static associate(models) {
      CertificationAttachment.belongsTo(models.Certification, {
        foreignKey: "certification_id",
        as: "certification",
        onDelete: "CASCADE",
      });

      CertificationAttachment.belongsTo(models.Attachment, {
        foreignKey: "attachment_id",
        as: "attachment",
      });
    }
  }

  CertificationAttachment.init(
    {
      certification_attachment_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      certification_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      attachment_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CertificationAttachment",
      tableName: "certification_attachments",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: false,
    }
  );

  return CertificationAttachment;
};
