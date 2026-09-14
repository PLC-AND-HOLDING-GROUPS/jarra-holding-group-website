"use client";

import { usePathname } from "next/navigation";
import { getPermissionsForPath } from "@/utils/routes";
import { PermissionGuard } from "./permissionGuard";

export function AdminRouteGuard({ children }: { children: React.ReactNode }) {
    const rawPathname = usePathname();
    const pathname = stripLocale(rawPathname);

    // Get the required permissions for the current route
    const requiredPermissions = getPermissionsForPath(pathname);

    // If no specific permissions are mapped, we still allow access (or could block by default)
    // Based on the user's request, we only protect mapped routes.
    if (!requiredPermissions) {
        return <>{children}</>;
    }

    return (
        <PermissionGuard 
            anyPermissions={requiredPermissions.anyPermissions}
            allPermissions={requiredPermissions.allPermissions}
            onlyPermissions={requiredPermissions.onlyPermissions}
        >
            {children}
        </PermissionGuard>
    );
}

const stripLocale = (pathname: string) => {
    const segments = pathname.split("/");
    if (segments.length > 1 && ["en", "am"].includes(segments[1])) {
        return "/" + segments.slice(2).join("/");
    }
    return pathname;
};
