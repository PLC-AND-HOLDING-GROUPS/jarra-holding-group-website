"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ImportExportCategory extends Model {
    static associate(models) {
      // define association here
    }
  }

  ImportExportCategory.init(
    {
      category_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM('import', 'export'),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      icon: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
      modelName: "ImportExportCategory",
      tableName: "import_export_categories",
      timestamps: false,
      underscored: true,
      paranoid: true,
    }
  );

  return ImportExportCategory;
};
