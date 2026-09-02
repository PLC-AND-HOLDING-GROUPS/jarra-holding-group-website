"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Add the order column if it doesn't exist
    const tableDescription = await queryInterface.describeTable('sliders');
    if (!tableDescription.order) {
      await queryInterface.addColumn("sliders", "order", {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      });
    }

    // 2. Fetch all existing sliders ordered by created_at
    const [sliders] = await queryInterface.sequelize.query(
      'SELECT slider_id FROM sliders ORDER BY created_at ASC;'
    );

    // 3. Update each slider with a sequential order
    for (let i = 0; i < sliders.length; i++) {
      await queryInterface.sequelize.query(
        `UPDATE sliders SET "order" = ${i + 1} WHERE slider_id = '${sliders[i].slider_id}';`
      );
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("sliders", "order");
  },
};
