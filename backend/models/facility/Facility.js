"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Facility extends Model {
        static associate(models) {
            // define association here
        }
    }
    
    Facility.init(
        {
            facility_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            short_description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING(255),
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
            }
        },
        {
            sequelize,
            modelName: "Facility",
            tableName: "facilities",
            timestamps: false,
            underscored: true,
        }
    );
    
    return Facility;
};
