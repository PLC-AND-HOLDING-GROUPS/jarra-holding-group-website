"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Background extends Model {
        static associate(models) {
            // For core values only
        }
    }

    Background.init(
        {
            background_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
        },
        {
            sequelize,
            modelName: "Background",
            tableName: "backgrounds",
            timestamps: false,
            underscored: true,
        }
    );

    return Background;
};