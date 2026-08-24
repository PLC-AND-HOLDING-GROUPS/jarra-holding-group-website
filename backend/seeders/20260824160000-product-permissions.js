"use strict";
const { v4: uuidv4 } = require("uuid");

const SUPER_ADMIN_ROLE_ID = "00000000-0000-4000-8000-000000000002";

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    const crudActions = ["create", "read", "update", "delete"];
    const resourcesWithActions = [
      { resource: "productcategory", actions: crudActions },
      { resource: "product", actions: crudActions },
      { resource: "productinquiry", actions: crudActions },
    ];

    const permissions = resourcesWithActions.flatMap((r) =>
      r.actions.map((action) => ({
        permission_id: uuidv4(),
        resource: r.resource,
        action: action,
        created_at: now,
        updated_at: now,
        is_active: true,
      }))
    );

    for (const perm of permissions) {
      try {
        await queryInterface.sequelize.query(
          `INSERT INTO permissions (permission_id, resource, action, is_active, created_at, updated_at)
           VALUES (:permission_id, :resource, :action, true, :now, :now)
           ON CONFLICT (resource, action) DO NOTHING;`,
          {
            replacements: {
              permission_id: perm.permission_id,
              resource: perm.resource,
              action: perm.action,
              now: perm.created_at,
            }
          }
        );
        
        // Find permission ID just in case it already existed
        const [rows] = await queryInterface.sequelize.query(
          `SELECT permission_id FROM permissions WHERE resource = :resource AND action = :action LIMIT 1;`,
          {
            replacements: {
              resource: perm.resource,
              action: perm.action,
            }
          }
        );
        const permId = rows?.[0]?.permission_id;
        
        if (permId) {
          const [existing] = await queryInterface.sequelize.query(
            `SELECT role_permission_id FROM role_permissions WHERE role_id = :roleId AND permission_id = :permId LIMIT 1;`,
            {
              replacements: {
                roleId: SUPER_ADMIN_ROLE_ID,
                permId: permId,
              }
            }
          );
          if (!existing?.length) {
            await queryInterface.bulkInsert("role_permissions", [
              {
                role_permission_id: uuidv4(),
                role_id: SUPER_ADMIN_ROLE_ID,
                permission_id: permId,
                is_active: true,
                created_at: now,
                updated_at: now,
              },
            ]);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  },

  async down(queryInterface, Sequelize) {
    // Optional down script
  },
};
