import * as React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function PageHeader({ title, description, action, className }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-border/50 mb-8", className)}>
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-100">{title}</h1>
        {description && <p className="text-sm text-slate-400 mt-1">{description}</p>}
      </div>
      {action && <div className="flex items-center gap-2">{action}</div>}
    </div>
  );
}
export default PageHeader;
