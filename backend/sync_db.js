const { sequelize } = require("./models");

async function syncDb() {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully");
    process.exit(0);
  } catch (err) {
    console.error("Error syncing db", err);
    process.exit(1);
  }
}

syncDb();
