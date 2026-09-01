"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class FacilityOverview extends Model {
        static associate(models) {
            // define association here
        }
    }
    
    FacilityOverview.init(
        {
            facility_overview_id: {
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
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            list_heading: {
                type: DataTypes.STRING(255),
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
            modelName: "FacilityOverview",
            tableName: "facility_overview",
            timestamps: false,
            underscored: true,
        }
    );
    
    return FacilityOverview;
};
