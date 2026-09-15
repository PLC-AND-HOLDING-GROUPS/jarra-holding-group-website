"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("purposes", {
            purpose_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },

            subtitle: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },

            title: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },

            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },

            quote: {
                type: Sequelize.TEXT,
                allowNull: true,
            },

            pillars: {
                type: Sequelize.JSON,
                allowNull: true,
            },

            attachment_id: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: "attachments",
                    key: "attachment_id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },

            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },

            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },

            deleted_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("purposes");
    },
};
