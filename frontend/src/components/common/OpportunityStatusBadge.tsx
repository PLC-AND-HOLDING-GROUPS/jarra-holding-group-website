"use client";

import { Badge } from "@/components/ui/badge";
export type DisplayStatus = "open" | "closed" | "draft" | "published" | "cancelled" | "archived" | string;

export function OpportunityStatusBadge({
  displayStatus,
  dbStatus,
}: {
  displayStatus?: DisplayStatus | string;
  dbStatus?: string;
}) {
  const status = displayStatus || dbStatus || "draft";

  let variant: "default" | "destructive" | "outline" | "secondary" = "outline";
  let label = status;

  switch (status) {
    case "open":
    case "published":
      variant = "default";
      label = status === "published" ? "Published" : "Open";
      break;
    case "closed":
      variant = "secondary";
      label = "Closed";
      break;
    case "draft":
      variant = "destructive";
      label = "Draft";
      break;
    default:
      label = status.charAt(0).toUpperCase() + status.slice(1);
  }

  return <Badge variant={variant}>{label}</Badge>;
}
