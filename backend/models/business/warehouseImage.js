"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class WarehouseImage extends Model {
        static associate(models) {
            WarehouseImage.belongsTo(models.Warehouse, {
                foreignKey: "warehouse_id",
                as: "warehouse",
            });
        }
    }

    WarehouseImage.init(
        {
            image_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            warehouse_id: {
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "warehouses",
                    key: "warehouse_id",
                },
                onDelete: "CASCADE",
            },
            image_url: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            order: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
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
            modelName: "WarehouseImage",
            tableName: "warehouse_images",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            underscored: true,
        }
    );

    return WarehouseImage;
};
