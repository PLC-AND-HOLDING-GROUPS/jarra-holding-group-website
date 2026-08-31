"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ServiceExperience extends Model {
        static associate(models) {
            // No associations needed currently
        }
    }

    ServiceExperience.init(
        {
            service_experience_id: {
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

            steps: {
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
            modelName: "ServiceExperience",
            tableName: "service_experience",
            timestamps: false,
            underscored: true,
        }
    );

    return ServiceExperience;
};
