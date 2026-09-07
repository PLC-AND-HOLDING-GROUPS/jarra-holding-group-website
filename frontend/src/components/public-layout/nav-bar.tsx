"use client";

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { useState, useMemo } from "react";
import { IconX } from "@tabler/icons-react";
import { usePathname, Link } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";

import { useGetRoutesQuery } from "@/redux/api/routeApi";
import type { Route, RouteTranslation } from "@/redux/types/route";

interface NavItem {
    name: string;
    link?: string;
    children?: NavItem[];
}

export default function PublicNavbar() {
    const pathname = usePathname();
    const currentLocale = useLocale();

    const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { data: routes = [] } = useGetRoutesQuery();

    const locale = currentLocale || "en";

    // =============================
    // BUILD NAV ITEMS (DYNAMIC FROM DB WITH VISIBILITY & MULTI-LANGUAGE)
    // =============================
    const navItems: NavItem[] = useMemo(() => {
        const getLabel = (translations?: RouteTranslation[]) => {
            if (!translations || translations.length === 0) return "";
            const found = translations.find((t) => t.language_code === locale)?.label;
            if (found) return found;
            const en = translations.find((t) => t.language_code === "en")?.label;
            if (en) return en;
            return translations[0]?.label || "";
        };

        // Fallback default navigation items if routes have not been seeded or DB is empty
        const fallbackNavItems: NavItem[] = [
            { name: locale === "am" ? "መነሻ" : "Home", link: "/" },
            { name: locale === "am" ? "ስለኛ" : "About", link: "/about" },
            { name: locale === "am" ? "ንግዶች" : "Businesses", link: "/businesses" },
            { name: locale === "am" ? "ምርቶች" : "Products", link: "/products" },
            { name: locale === "am" ? "አገልግሎቶች" : "Services", link: "/services" },
            { name: locale === "am" ? "መገልገያዎች" : "Facilities", link: "/facilities" },
            { name: locale === "am" ? "ዜና" : "News", link: "/news" },
            { name: locale === "am" ? "ስራዎች" : "Careers", link: "/careers" },
            { name: locale === "am" ? "እውቂያ" : "Contact", link: "/contact" },
        ];

        if (!routes || routes.length === 0) {
            return fallbackNavItems;
        }

        // Create a Set to track route IDs that have been processed as children
        const processedChildIds = new Set<string>();

        // 1. Parent routes (with children) that are active and visible in navbar
        const parentRoutes = routes.filter((route: Route) =>
            route.is_active &&
            route.show_in_navbar &&
            route.children &&
            route.children.length > 0
        );

        // Mark all child route IDs from parent routes
        parentRoutes.forEach((route: Route) => {
            route.children?.forEach((child: Route) => {
                if (child.is_active && child.show_in_navbar) {
                    processedChildIds.add(child.route_id);
                }
            });
        });

        // Build nav items from parent routes
        const navItemsFromParents: NavItem[] = parentRoutes.map((route: Route) => {
            const label = getLabel(route.translations);

            const children = (route.children || [])
                .filter((child: Route) => child.is_active && child.show_in_navbar)
                .sort((a, b) => (a.order || 0) - (b.order || 0))
                .map((child: Route) => ({
                    name: getLabel(child.translations),
                    link: child.path || "#",
                }));

            return {
                name: label,
                link: route.path || undefined,
                children: children.length > 0 ? children : undefined,
            };
        });

        // 2. Root-level routes (no parent) that are NOT already processed as children
        const rootRoutes = routes.filter((route: Route) =>
            route.is_active &&
            route.show_in_navbar &&
            !route.parent_id &&
            (!route.children || route.children.length === 0) &&
            !processedChildIds.has(route.route_id)
        );

        const navItemsFromRoots: NavItem[] = rootRoutes.map((route: Route) => ({
            name: getLabel(route.translations),
            link: route.path || "#",
        }));

        // Combine and sort by original order
        const allNavItems = [...navItemsFromParents, ...navItemsFromRoots];

        const getOrder = (item: NavItem) => {
            if (item.children) {
                const parentRoute = parentRoutes.find(r => getLabel(r.translations) === item.name);
                return parentRoute?.order ?? 999;
            } else {
                const rootRoute = rootRoutes.find(r => (r.path || "#") === item.link);
                return rootRoute?.order ?? 999;
            }
        };

        const sorted = allNavItems.sort((a, b) => (getOrder(a) - getOrder(b)));

        return sorted.length > 0 ? sorted : fallbackNavItems;
    }, [routes, locale]);

    return (
        <Navbar className="lg:py-3 z-[1000]">
            {/* ================= DESKTOP ================= */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
            </NavBody>

            {/* ================= MOBILE ================= */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    <div className="flex flex-col pb-10">
                        <div className="flex items-center justify-between mb-6">
                            <NavbarLogo />
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close navigation"
                            >
                                <IconX className="w-6 h-6 text-black dark:text-white" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            {navItems.map((item: NavItem, idx: number) => {
                                const isOpen = openMobileIndex === idx;

                                const isActive = item.link
                                    ? item.link === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(item.link)
                                    : false;

                                const parentNavClass = `flex w-full px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                                    isActive
                                        ? "text-golden-dark font-semibold bg-golden-dark20"
                                        : "text-gray-600 dark:text-neutral-300 hover:text-golden-dark hover:bg-golden-dark10"
                                }`;

                                return (
                                    <div key={idx} className="flex flex-col">
                                        {/* Top-level item */}
                                        {item.children ? (
                                            <button
                                                type="button"
                                                onClick={() => setOpenMobileIndex(isOpen ? null : idx)}
                                                className={`${parentNavClass} items-center justify-between text-left`}
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                        ) : (
                                            <Link
                                                href={item.link || "#"}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={parentNavClass}
                                            >
                                                {item.name}
                                            </Link>
                                        )}

                                        {/* Sub-menu accordion */}
                                        <AnimatePresence>
                                            {item.children && isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="ml-6 mt-1 flex flex-col gap-1 overflow-hidden"
                                                >
                                                    {item.children.map((child: NavItem, cIdx: number) => {
                                                        const isChildActive = child.link
                                                            ? child.link === "/"
                                                                ? pathname === "/"
                                                                : pathname.startsWith(child.link)
                                                            : false;

                                                        return (
                                                            <Link
                                                                key={cIdx}
                                                                href={child.link || "#"}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className={`px-3 py-2 rounded-md text-base transition-colors ${
                                                                    isChildActive
                                                                        ? "text-golden-dark font-semibold bg-golden-dark10"
                                                                        : "text-gray-600 dark:text-neutral-300 hover:text-golden-dark hover:bg-golden-dark10"
                                                                }`}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
