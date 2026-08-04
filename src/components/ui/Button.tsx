import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "glass";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-opacity-90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-opacity-90",
      outline: "border border-border bg-transparent hover:bg-slate-800 text-slate-100",
      ghost: "hover:bg-slate-800 text-slate-100",
      danger: "bg-critical text-critical-foreground hover:bg-opacity-90",
      glass: "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-slate-100",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-11 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
