"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ImportExportOverview extends Model {
    static associate(models) {
      // define association here
    }
  }

  ImportExportOverview.init(
    {
      import_export_overview_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      page_subtitle: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      page_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      page_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      export_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      export_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      import_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      import_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      center_icon: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      center_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      center_subtitle: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      stat1_value: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      stat1_label: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      stat1_subtext: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      stat2_value: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      stat2_label: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cta_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cta_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      cta_button_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cta_button_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cta_button_icon: {
        type: DataTypes.STRING(50),
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
      modelName: "ImportExportOverview",
      tableName: "import_export_overview",
      timestamps: false,
      underscored: true,
      paranoid: true,
    }
  );

  return ImportExportOverview;
};
