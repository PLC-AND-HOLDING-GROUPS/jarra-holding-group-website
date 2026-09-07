"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    const routesData = [
      {
        key: "home",
        path: "/",
        order: 1,
        translations: {
          en: "Home",
          am: "መነሻ",
        },
      },
      {
        key: "about",
        path: "/about",
        order: 2,
        translations: {
          en: "About",
          am: "ስለኛ",
        },
      },
      {
        key: "businesses",
        path: "/businesses",
        order: 3,
        translations: {
          en: "Businesses",
          am: "ንግዶች",
        },
        children: [
          {
            key: "overview",
            path: "/businesses/overview",
            order: 1,
            translations: {
              en: "Overview",
              am: "አጠቃላይ እይታ",
            },
          },
          {
            key: "trading",
            path: "/businesses/trading",
            order: 2,
            translations: {
              en: "Trading",
              am: "ንግድ",
            },
          },
          {
            key: "import-export",
            path: "/businesses/import-export",
            order: 3,
            translations: {
              en: "Import & Export",
              am: "አስመጪ እና ላኪ",
            },
          },
          {
            key: "warehousing",
            path: "/businesses/warehousing",
            order: 4,
            translations: {
              en: "Warehousing",
              am: "መጋዘን",
            },
          },
        ],
      },
      {
        key: "products",
        path: "/products",
        order: 4,
        translations: {
          en: "Products",
          am: "ምርቶች",
        },
      },
      {
        key: "services",
        path: "/services",
        order: 5,
        translations: {
          en: "Services",
          am: "አገልግሎቶች",
        },
      },
      {
        key: "facilities",
        path: "/facilities",
        order: 6,
        translations: {
          en: "Facilities",
          am: "መገልገያዎች",
        },
      },
      {
        key: "news",
        path: "/news",
        order: 7,
        translations: {
          en: "News",
          am: "ዜና",
        },
      },
      {
        key: "careers",
        path: "/careers",
        order: 8,
        translations: {
          en: "Careers",
          am: "ስራዎች",
        },
      },
      {
        key: "contact",
        path: "/contact",
        order: 9,
        translations: {
          en: "Contact",
          am: "እውቂያ",
        },
      },
    ];

    const routes = [];
    const translations = [];
    const allRouteIds = new Set(); // Track all created route IDs

    for (const route of routesData) {
      const routeId = uuidv4();
      allRouteIds.add(routeId);

      // ================= ROOT ROUTE =================
      routes.push({
        route_id: routeId,
        path: route.path,
        parent_id: null,
        order: route.order,
        is_active: true,
        show_in_navbar: true,
        created_at: now,
        updated_at: now,
      });

      Object.entries(route.translations).forEach(([lang, label]) => {
        translations.push({
          route_translation_id: uuidv4(),
          route_id: routeId,
          language_code: lang,
          label,
          created_at: now,
          updated_at: now,
        });
      });

      // ================= CHILD ROUTES =================
      if (route.children?.length) {
        route.children.forEach((child) => {
          const childId = uuidv4();
          allRouteIds.add(childId);

          routes.push({
            route_id: childId,
            path: child.path,
            parent_id: routeId, // This links to parent
            order: child.order,
            is_active: true,
            show_in_navbar: true,
            created_at: now,
            updated_at: now,
          });

          Object.entries(child.translations).forEach(([lang, label]) => {
            translations.push({
              route_translation_id: uuidv4(),
              route_id: childId,
              language_code: lang,
              label,
              created_at: now,
              updated_at: now,
            });
          });
        });
      }
    }

    // Clear existing data first to avoid duplicates
    await queryInterface.bulkDelete("route_translations", null, {});
    await queryInterface.bulkDelete("routes", null, {});

    // Insert fresh data
    await queryInterface.bulkInsert("routes", routes);
    await queryInterface.bulkInsert("route_translations", translations);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("route_translations", null, {});
    await queryInterface.bulkDelete("routes", null, {});
  },
};