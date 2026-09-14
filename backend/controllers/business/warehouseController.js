const { Warehouse, WarehouseImage, WarehousingOverview } = require("../../models");

exports.getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.findAll({
      include: [
        {
          model: WarehouseImage,
          as: "images",
          attributes: ["image_id", "image_url", "order"],
        },
      ],
      order: [
        ["order", "ASC"],
        [{ model: WarehouseImage, as: "images" }, "order", "ASC"],
      ],
    });

    res.json({
      success: true,
      data: warehouses,
    });
  } catch (error) {
    console.error("Error fetching warehouses:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.createWarehouse = async (req, res) => {
  try {
    const { name, region, city, description, address, area, status, order, publish_status } = req.body;

    const warehouse = await Warehouse.create({
      name,
      region,
      city,
      description,
      address,
      area,
      status,
      order,
      publish_status: publish_status || "published",
    });

    res.status(201).json({
      success: true,
      data: warehouse,
    });
  } catch (error) {
    console.error("Error creating warehouse:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.updateWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, region, city, description, address, area, status, order, publish_status } = req.body;

    const warehouse = await Warehouse.findByPk(id);
    if (!warehouse) {
      return res.status(404).json({ success: false, message: "Warehouse not found" });
    }

    await warehouse.update({
      name,
      region,
      city,
      description,
      address,
      area,
      status,
      order,
      publish_status: publish_status !== undefined ? publish_status : warehouse.publish_status,
    });

    res.json({
      success: true,
      data: warehouse,
    });
  } catch (error) {
    console.error("Error updating warehouse:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.deleteWarehouse = async (req, res) => {
  try {
    const { id } = req.params;

    const warehouse = await Warehouse.findByPk(id);
    if (!warehouse) {
      return res.status(404).json({ success: false, message: "Warehouse not found" });
    }

    await warehouse.destroy();

    res.json({
      success: true,
      message: "Warehouse deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting warehouse:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.addWarehouseImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { image_url, order } = req.body;

    const warehouse = await Warehouse.findByPk(id);
    if (!warehouse) {
      return res.status(404).json({ success: false, message: "Warehouse not found" });
    }

    const newImage = await WarehouseImage.create({
      warehouse_id: id,
      image_url,
      order: order || 0,
    });

    res.status(201).json({
      success: true,
      data: newImage,
    });
  } catch (error) {
    console.error("Error adding warehouse image:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.deleteWarehouseImage = async (req, res) => {
  try {
    const { imageId } = req.params;

    const image = await WarehouseImage.findByPk(imageId);
    if (!image) {
      return res.status(404).json({ success: false, message: "Image not found" });
    }

    await image.destroy();

    res.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting warehouse image:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getOverview = async (req, res) => {
  try {
    let overview = await WarehousingOverview.findOne();
    if (!overview) {
      overview = await WarehousingOverview.create({});
    }
    res.json({
      success: true,
      data: overview,
    });
  } catch (error) {
    console.error("Error fetching warehousing overview:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.updateOverview = async (req, res) => {
  try {
    const data = req.body;
    let overview = await WarehousingOverview.findOne();

    if (!overview) {
      overview = await WarehousingOverview.create(data);
    } else {
      await overview.update(data);
    }

    res.json({
      success: true,
      data: overview,
    });
  } catch (error) {
    console.error("Error updating warehousing overview:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.reorderWarehouses = async (req, res) => {
  try {
    const { warehouses } = req.body;
    
    for (const warehouse of warehouses) {
      await Warehouse.update(
        { order: warehouse.order },
        { where: { warehouse_id: warehouse.id } }
      );
    }
    
    res.json({ success: true, message: "Warehouses reordered successfully" });
  } catch (error) {
    console.error("Error reordering warehouses:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
