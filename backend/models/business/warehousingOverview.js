"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class WarehousingOverview extends Model {
    static associate(models) {
      // define association here if needed
    }
  }

  WarehousingOverview.init(
    {
      warehousing_overview_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      page_subtitle: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      page_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      hero_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      hero_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      hero_description_1: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      hero_description_2: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      page_header: {
        type: DataTypes.JSON,
        allowNull: true,
        // Expected structure: { icon, subtitle, description }
      },
      stat_overlay: {
        type: DataTypes.JSON,
        allowNull: true,
        // Expected structure: { title, value, label, description }
      },
      flow_of_goods: {
        type: DataTypes.JSON,
        allowNull: true,
        // Expected structure: { title, description, icon, features: [{ title, description, icon }] }
      },
      editorial_cards: {
        type: DataTypes.JSON,
        allowNull: true,
        // Expected structure: [{ small_title, title, description }]
      },
      facilities_section: {
        type: DataTypes.JSON,
        allowNull: true,
        // Expected structure: { small_title, title, description, stat_description }
      },
      // Deprecated fields (kept for backward compatibility during migration)
      trading_section: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      market_connection: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      agriculture_section: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      business_steps: {
        type: DataTypes.JSON,
        allowNull: true,
        // Expected structure: [{ num, title, desc }]
      },
      visualization_nodes: {
        type: DataTypes.JSON,
        allowNull: true,
        // Expected structure: [{ title, active }]
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
      modelName: "WarehousingOverview",
      tableName: "warehousing_overview",
      timestamps: false,
      underscored: true,
      paranoid: true,
    }
  );

  return WarehousingOverview;
};
