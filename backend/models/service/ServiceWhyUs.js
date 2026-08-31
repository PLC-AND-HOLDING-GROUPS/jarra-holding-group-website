"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ServiceWhyUs extends Model {
        static associate(models) {
            // No associations needed currently
        }
    }

    ServiceWhyUs.init(
        {
            service_why_us_id: {
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

            points: {
                type: DataTypes.JSON,
                allowNull: true,
            },

            cta_heading: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            cta_subheading: {
                type: DataTypes.TEXT,
                allowNull: true,
            },

            cta_buttons: {
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
            modelName: "ServiceWhyUs",
            tableName: "service_why_us",
            timestamps: false,
            underscored: true,
        }
    );

    return ServiceWhyUs;
};
