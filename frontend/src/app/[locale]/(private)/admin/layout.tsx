import type { Metadata } from "next";
import { NOINDEX_METADATA } from "@/lib/seo";
import { AdminRouteGuard } from "@/components/auth/AdminRouteGuard";

export const metadata: Metadata = NOINDEX_METADATA;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminRouteGuard>{children}</AdminRouteGuard>;
}
