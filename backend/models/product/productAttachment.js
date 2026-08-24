"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ProductAttachment extends Model {
        static associate(models) {
            ProductAttachment.belongsTo(models.Product, {
                foreignKey: "product_id",
                as: "product",
            });
            ProductAttachment.belongsTo(models.Attachment, {
                foreignKey: "attachment_id",
                as: "attachment",
            });
        }
    }

    ProductAttachment.init(
        {
            product_attachment_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            product_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            attachment_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "main", // "main" or "gallery"
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            sequelize,
            modelName: "ProductAttachment",
            tableName: "product_attachments",
            timestamps: false,
            underscored: true,
        }
    );

    return ProductAttachment;
};
