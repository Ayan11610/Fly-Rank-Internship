import { Severity } from "@/types/vulnerability";

export function getSeverityColor(severity: Severity): string {
  switch (severity) {
    case "critical":
      return "bg-critical text-critical-foreground border border-red-500/20";
    case "high":
      return "bg-orange-600/20 text-orange-400 border border-orange-500/20";
    case "medium":
      return "bg-warning/20 text-yellow-400 border border-warning/20";
    case "low":
      return "bg-info/20 text-sky-400 border border-info/20";
    case "info":
    default:
      return "bg-slate-800 text-slate-400 border border-slate-700/50";
  }
}

export function getSeverityBadgeLabel(severity: Severity): string {
  return severity.charAt(0).toUpperCase() + severity.slice(1);
}
