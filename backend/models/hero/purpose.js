"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Purpose extends Model {
        static associate(models) {
            Purpose.belongsTo(models.Attachment, {
                foreignKey: "attachment_id",
                as: "attachment",
            });
        }
    }

    Purpose.init(
        {
            purpose_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },

            subtitle: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            title: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },

            quote: {
                type: DataTypes.TEXT,
                allowNull: true,
            },

            pillars: {
                type: DataTypes.JSON, // stores array of pillars { title, description, icon }
                allowNull: true,
            },

            attachment_id: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: "attachments",
                    key: "attachment_id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
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
            modelName: "Purpose",
            tableName: "purposes",
            timestamps: false,
            underscored: true,
        }
    );

    return Purpose;
};
