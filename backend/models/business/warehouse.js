"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Warehouse extends Model {
        static associate(models) {
            Warehouse.hasMany(models.WarehouseImage, {
                foreignKey: "warehouse_id",
                as: "images",
                onDelete: "CASCADE",
            });
        }
    }

    Warehouse.init(
        {
            warehouse_id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            region: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            address: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            area: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            status: {
                type: DataTypes.STRING(50),
                defaultValue: "Active",
            },
            order: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            publish_status: {
                type: DataTypes.STRING(50),
                defaultValue: "published",
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
            modelName: "Warehouse",
            tableName: "warehouses",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            underscored: true,
        }
    );

    return Warehouse;
};
