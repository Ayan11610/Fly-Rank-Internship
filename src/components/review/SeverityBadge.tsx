import * as React from "react";
import { Badge } from "../ui/Badge";
import { Severity } from "@/types/vulnerability";
import { getSeverityBadgeLabel } from "@/utils/severity";

interface SeverityBadgeProps {
  severity: Severity;
  className?: string;
}

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  const map: Record<Severity, "default" | "secondary" | "critical" | "success" | "warning" | "info"> = {
    critical: "critical",
    high: "critical", // high will also map to critical styled warning badges
    medium: "warning",
    low: "info",
    info: "default",
  };

  return (
    <Badge variant={map[severity]} className={className}>
      {getSeverityBadgeLabel(severity)}
    </Badge>
  );
}
export default SeverityBadge;
