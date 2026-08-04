import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
}

export function Alert({ className, variant = "info", title, children, ...props }: AlertProps) {
  const icons = {
    info: <Info className="h-5 w-5 text-sky-400" />,
    success: <CheckCircle className="h-5 w-5 text-emerald-400" />,
    warning: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
    error: <AlertCircle className="h-5 w-5 text-red-400" />,
  };

  const variants = {
    info: "border-info/20 bg-info/10 text-sky-200",
    success: "border-emerald-500/20 bg-success/10 text-emerald-200",
    warning: "border-warning/20 bg-warning/10 text-yellow-200",
    error: "border-red-500/20 bg-critical/10 text-red-200",
  };

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4 text-sm backdrop-blur-sm",
        variants[variant],
        className
      )}
      role="alert"
      {...props}
    >
      <div className="flex-shrink-0">{icons[variant]}</div>
      <div className="flex flex-col gap-1">
        {title && <span className="font-semibold text-slate-100">{title}</span>}
        <div className="text-inherit">{children}</div>
      </div>
    </div>
  );
}
export default Alert;
