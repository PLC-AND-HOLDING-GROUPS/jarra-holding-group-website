"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Canvas extends Model {
        static associate(models) {
            // No associations needed currently
        }
    }

    Canvas.init(
        {
            canvas_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },

            title_prefix: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            title_highlight: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },

            vision_title: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            vision_description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },

            words: {
                type: DataTypes.JSON, // mapping positions to word values
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
            modelName: "Canvas",
            tableName: "canvases",
            timestamps: false,
            underscored: true,
        }
    );

    return Canvas;
};
