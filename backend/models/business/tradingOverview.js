"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TradingOverview extends Model {
    static associate(models) {
      // define association here if needed
    }
  }

  TradingOverview.init(
    {
      trading_overview_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      page_header: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      hero_title: {
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
      hero_visual: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      principles: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      relationship_nodes: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      market_gap: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      customer_connection: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      big_statement: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      stats: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      trading_cycle: {
        type: DataTypes.JSON,
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
      modelName: "TradingOverview",
      tableName: "trading_overview",
      timestamps: false,
      underscored: true,
      paranoid: true,
    }
  );

  return TradingOverview;
};
