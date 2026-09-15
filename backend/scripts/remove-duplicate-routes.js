const { sequelize, Route, RouteTranslation } = require("../models");
const { Op } = require("sequelize");

async function removeDuplicates() {
    try {
        console.log("Searching for duplicate routes...");
        // Order by created_at ASC to keep the oldest routes and delete the newer duplicates
        const routes = await Route.findAll({ order: [['created_at', 'ASC']] });
        
        const seenPaths = new Set();
        const duplicateIds = [];
        
        for (const route of routes) {
            if (seenPaths.has(route.path)) {
                duplicateIds.push(route.route_id);
            } else {
                seenPaths.add(route.path);
            }
        }
        
        if (duplicateIds.length > 0) {
            console.log(`Found ${duplicateIds.length} duplicate routes. Deleting them...`);
            
            // 1. Delete translations for the duplicate routes
            await RouteTranslation.destroy({ 
                where: { route_id: duplicateIds } 
            });
            console.log("- Deleted translations for duplicates.");
            
            // 2. Delete child routes first to avoid foreign key constraint errors
            await Route.destroy({ 
                where: { 
                    route_id: duplicateIds,
                    parent_id: { [Op.ne]: null } 
                } 
            });
            console.log("- Deleted duplicate child routes.");
            
            // 3. Delete parent duplicate routes
            await Route.destroy({ 
                where: { 
                    route_id: duplicateIds,
                    parent_id: null
                } 
            });
            console.log("- Deleted duplicate parent routes.");
            
            console.log("Cleanup completed successfully!");
        } else {
            console.log("No duplicate routes found. Database is clean.");
        }
    } catch (error) {
        console.error("Error removing duplicates:", error);
    } finally {
        process.exit(0);
    }
}

removeDuplicates();
