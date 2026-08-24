"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ProductInquiry extends Model {
        static associate(models) {
            ProductInquiry.belongsTo(models.Product, {
                foreignKey: "product_id",
                as: "product",
            });
        }
    }

    ProductInquiry.init(
        {
            inquiry_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            product_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            company: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            quantity: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            message: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM("pending", "reviewed", "replied"),
                defaultValue: "pending",
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
            modelName: "ProductInquiry",
            tableName: "product_inquiries",
            timestamps: false,
            underscored: true,
            paranoid: true,
        }
    );

    return ProductInquiry;
};
