"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CareerContent extends Model {
        static associate(models) {
            // Associations for attachments
            CareerContent.belongsTo(models.Attachment, {
                foreignKey: "intro_image_id",
                as: "intro_image",
            });
            CareerContent.belongsTo(models.Attachment, {
                foreignKey: "culture_image_main_id",
                as: "culture_image_main",
            });
            CareerContent.belongsTo(models.Attachment, {
                foreignKey: "culture_image_sub_id",
                as: "culture_image_sub",
            });
        }
    }

    CareerContent.init(
        {
            career_content_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },

            // Intro Fields
            intro_title: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            intro_title_highlight: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            intro_description_1: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            intro_description_2: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            intro_image_id: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: "attachments",
                    key: "attachment_id",
                },
            },
            intro_card_focus: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            intro_card_growth: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            // Culture Fields
            culture_top_title: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            culture_title: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            culture_title_highlight: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            culture_description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            culture_image_main_id: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: "attachments",
                    key: "attachment_id",
                },
            },
            culture_image_sub_id: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: "attachments",
                    key: "attachment_id",
                },
            },
            culture_features: {
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
        },
        {
            sequelize,
            modelName: "CareerContent",
            tableName: "career_content",
            timestamps: false,
            underscored: true,
        }
    );

    return CareerContent;
};
