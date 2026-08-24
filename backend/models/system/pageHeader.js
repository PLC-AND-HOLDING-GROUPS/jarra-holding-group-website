"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class PageHeader extends Model {
        static associate(models) {
            PageHeader.belongsTo(models.Attachment, {
                foreignKey: "attachment_id",
                as: "backgroundAttachment",
            });
        }
    }

    PageHeader.init(
        {
            page_header_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            page_identifier: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            attachment_id: {
                type: DataTypes.UUID,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: "PageHeader",
            tableName: "page_headers",
            timestamps: false,
            underscored: true,
        }
    );

    return PageHeader;
};
