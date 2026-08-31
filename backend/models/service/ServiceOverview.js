"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ServiceOverview extends Model {
        static associate(models) {
            // No associations needed currently
        }
    }

    ServiceOverview.init(
        {
            service_overview_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },

            heading: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            subheading: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },

            cards: {
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
            modelName: "ServiceOverview",
            tableName: "service_overview",
            timestamps: false,
            underscored: true,
        }
    );

    return ServiceOverview;
};
