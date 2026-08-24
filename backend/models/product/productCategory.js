"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ProductCategory extends Model {
        static associate(models) {
            ProductCategory.hasMany(models.Product, {
                foreignKey: "category_id",
                as: "products",
            });
        }
    }

    ProductCategory.init(
        {
            category_id: {
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
            description: {
                type: DataTypes.TEXT,
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
            modelName: "ProductCategory",
            tableName: "product_categories",
            timestamps: false,
            underscored: true,
            paranoid: true,
        }
    );

    return ProductCategory;
};
