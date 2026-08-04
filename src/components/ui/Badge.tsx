import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "critical" | "success" | "warning" | "info";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border transition-colors focus:outline-none";

  const variants = {
    default: "border-transparent bg-slate-800 text-slate-100",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    critical: "border-red-500/20 bg-critical/20 text-red-400",
    success: "border-emerald-500/20 bg-success/20 text-emerald-400",
    warning: "border-warning/20 bg-warning/20 text-yellow-400",
    info: "border-info/20 bg-info/20 text-sky-400",
  };

  return <span className={cn(baseStyles, variants[variant], className)} {...props} />;
}
export default Badge;
