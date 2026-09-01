// config/routes.ts
export type PermissionKey = `${string}:${string}`;

export interface RouteConfig {
    path: string;
    label: string;
    icon?: string;
    permissions?: {
        anyPermissions?: PermissionKey[];
        allPermissions?: PermissionKey[];
        onlyPermissions?: PermissionKey[];
    };
    children?: RouteConfig[];
}

export const routePermissions: RouteConfig[] = [
    // ---------------- MAIN ----------------
    {
        path: "/admin/dashboard",
        label: "Dashboard",
        icon: "LayoutDashboard",
        permissions: {
            anyPermissions: ["DASHBOARD:VIEW"],
        },
    },
    {
        path: "/admin/hero-section",
        label: "Home Page",
        icon: "Image",
        permissions: {
            anyPermissions: ["HERO:READ"],
        },
    },
    {
        path: "/admin/page-headers",
        label: "Page Headers",
        icon: "Layers",
        permissions: {
            anyPermissions: ["PAGE_HEADERS:READ"],
        },
    },
    {
        path: "/admin/about",
        label: "About (Cards, Leaders...)",
        icon: "Info",
        permissions: {
            anyPermissions: ["ABOUT:READ"],
        },
    },
    {
        path: "/admin/businesses",
        label: "Businesses",
        icon: "Briefcase",
        permissions: {
            // Placeholder permission, maybe use something else later if a BUSINESSES API is added
            anyPermissions: ["SERVICES:READ"],
        },
    },
    {
        path: "/admin/services",
        label: "Services",
        icon: "Settings",
        permissions: {
            anyPermissions: ["SERVICES:READ"],
        },
    },
    {
        path: "/admin/facilities",
        label: "Facilities",
        icon: "Building",
        permissions: {
            anyPermissions: ["SERVICES:READ"],
        },
    },

    {
        path: "/admin/contacts",
        label: "Contacts",
        icon: "Phone",
        permissions: {
            anyPermissions: ["CONTACT:READ", "CONTACT_MESSAGES:READ"],
        },
    },
    {
        path: "/admin/footer",
        label: "Footer",
        icon: "Layout",
        permissions: {
            anyPermissions: ["FOOTER:READ"],
        },
    },

    // ---------------- CONTENT ----------------
    {
        path: "/admin/products",
        label: "Products",
        icon: "Briefcase",
        permissions: {
            anyPermissions: ["SERVICES:READ"],
        },
        children: [
            {
                path: "/admin/products",
                label: "All Products",
                icon: "Briefcase",
                permissions: { anyPermissions: ["SERVICES:READ"] },
            },
            {
                path: "/admin/products/categories",
                label: "Categories",
                icon: "Tag",
                permissions: { anyPermissions: ["SERVICES:READ"] },
            },
            {
                path: "/admin/products/inquiries",
                label: "Inquiries",
                icon: "MessageSquare",
                permissions: { anyPermissions: ["SERVICES:READ"] },
            },
        ],
    },
    {
        path: "/admin/careers",
        label: "Careers",
        icon: "Briefcase",
        permissions: {
            // Mapping Careers to Vacancies permission
            anyPermissions: ["VACANCIES:READ"],
        },
    },

    // ---------------- SYSTEM & USERS ----------------
    {
        path: "/admin/users",
        label: "Users & Roles",
        icon: "Users",
        permissions: {
            anyPermissions: ["USERS:READ", "ROLES:READ", "PERMISSIONS:READ"],
        },
        children: [
            {
                path: "/admin/users",
                label: "User Accounts",
                icon: "User",
                permissions: { anyPermissions: ["USERS:READ"] },
            },
            {
                path: "/admin/users/roles",
                label: "Role Management",
                icon: "ShieldCheck",
                permissions: { anyPermissions: ["ROLES:READ"] },
            },
            {
                path: "/admin/users/permissions",
                label: "Permission Management",
                icon: "Key",
                permissions: { anyPermissions: ["PERMISSIONS:READ"] },
            },
        ],
    },
    {
        path: "/admin/system",
        label: "System",
        icon: "ShieldCheck",
        permissions: {
            anyPermissions: ["AUDIT_LOGS:READ"],
        },
        children: [
            {
                path: "/admin/system/audit-logs",
                label: "Audit Logs",
                icon: "ClipboardList",
                permissions: { anyPermissions: ["AUDIT_LOGS:READ"] },
            },
        ],
    },
];

// ---------------- HELPER ----------------

// Find route (including children)
export function getPermissionsForPath(path: string) {
    for (const route of routePermissions) {
        if (route.path === path) return route.permissions;

        if (route.children) {
            const child = route.children.find((c) => c.path === path);
            if (child) return child.permissions;
        }
    }
    return undefined;
}

// Get children for tabs
export function getChildRoutes(parentPath: string) {
    return routePermissions.find((r) => r.path === parentPath)?.children || [];
}
