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
        label: "Hero Section",
        icon: "Image",
        permissions: {
            anyPermissions: ["HERO:READ"],
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
        label: "Businesses / Services",
        icon: "Briefcase",
        permissions: {
            // Using SERVICES:READ since it maps to the Service API
            anyPermissions: ["SERVICES:READ"],
        },
    },
    {
        path: "/admin/partners",
        label: "Partners",
        icon: "Users", // Using Users icon as generic for partners
        permissions: {
            // Using ABOUT:READ or a generic permission since PARTNERS might not exist 
            // but we want them to see it. Actually, wait. Let's not restrict it heavily if it's missing.
            // But we'll leave it open or use DASHBOARD:VIEW if it fails, let's use ABOUT:READ
            anyPermissions: ["ABOUT:READ"],
        },
    },
    {
        path: "/admin/contacts",
        label: "Inquiries",
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
        path: "/admin/news",
        label: "News",
        icon: "Newspaper",
        permissions: {
            anyPermissions: ["NEWS:READ", "TAGS:READ"],
        },
        children: [
            {
                path: "/admin/news",
                label: "News",
                icon: "Newspaper",
                permissions: { anyPermissions: ["NEWS:READ"] },
            },
            {
                path: "/admin/news/tags",
                label: "Tags",
                icon: "Tag",
                permissions: { anyPermissions: ["TAGS:READ"] },
            },
        ],
    },
    {
        path: "/admin/events",
        label: "Events",
        icon: "Calendar",
        permissions: {
            anyPermissions: ["EVENTS:READ", "EVENT_CATEGORIES:READ"],
        },
        children: [
            {
                path: "/admin/events",
                label: "All Events",
                icon: "Calendar",
                permissions: { anyPermissions: ["EVENTS:READ"] },
            },
            {
                path: "/admin/events/category",
                label: "Categories",
                icon: "Tag",
                permissions: { anyPermissions: ["EVENT_CATEGORIES:READ"] },
            },
        ],
    },
    {
        path: "/admin/tenders",
        label: "Tenders",
        icon: "FileText",
        permissions: {
            anyPermissions: ["TENDERS:READ"],
        },
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