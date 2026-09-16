"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("career_content", {
            career_content_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },

            // Intro Fields
            intro_title: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            intro_title_highlight: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            intro_description_1: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            intro_description_2: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            intro_image_id: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: "attachments",
                    key: "attachment_id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },
            intro_card_focus: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            intro_card_growth: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },

            // Culture Fields
            culture_top_title: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            culture_title: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            culture_title_highlight: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            culture_description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            culture_image_main_id: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: "attachments",
                    key: "attachment_id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },
            culture_image_sub_id: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: "attachments",
                    key: "attachment_id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },
            culture_features: {
                type: Sequelize.JSON,
                allowNull: true,
            },

            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("career_content");
    },
};
