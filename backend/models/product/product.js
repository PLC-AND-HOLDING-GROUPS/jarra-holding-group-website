"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.ProductCategory, {
                foreignKey: "category_id",
                as: "category",
            });

            Product.hasMany(models.ProductAttachment, {
                foreignKey: "product_id",
                as: "attachments",
            });

            Product.hasMany(models.ProductInquiry, {
                foreignKey: "product_id",
                as: "inquiries",
            });
        }
    }

    Product.init(
        {
            product_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            category_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            short_description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            full_description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM("Available", "Available on Request", "Inquiry Required", "Currently Unavailable"),
                defaultValue: "Available",
                allowNull: false,
            },
            specifications: {
                type: DataTypes.JSONB,
                allowNull: true,
                defaultValue: {},
            },
            applications: {
                type: DataTypes.JSONB,
                allowNull: true,
                defaultValue: [],
            },
            publish_status: {
                type: DataTypes.ENUM("draft", "published", "archived"),
                defaultValue: "draft",
                allowNull: false,
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
            modelName: "Product",
            tableName: "products",
            timestamps: false,
            underscored: true,
            paranoid: true,
        }
    );

    return Product;
};
