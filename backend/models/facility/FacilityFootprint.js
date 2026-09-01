"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class FacilityFootprint extends Model {
        static associate(models) {
            // define association here
        }
    }
    
    FacilityFootprint.init(
        {
            facility_footprint_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            heading: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            locations: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            card_heading: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            card_description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            }
        },
        {
            sequelize,
            modelName: "FacilityFootprint",
            tableName: "facility_footprint",
            timestamps: false,
            underscored: true,
        }
    );
    
    return FacilityFootprint;
};
