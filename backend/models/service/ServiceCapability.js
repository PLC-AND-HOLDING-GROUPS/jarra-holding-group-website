"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ServiceCapability extends Model {
        static associate(models) {
            // No associations needed currently
        }
    }

    ServiceCapability.init(
        {
            service_capability_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },

            heading: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            subheading: {
                type: DataTypes.TEXT,
                allowNull: true,
            },

            capabilities: {
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
            modelName: "ServiceCapability",
            tableName: "service_capability",
            timestamps: false,
            underscored: true,
        }
    );

    return ServiceCapability;
};
