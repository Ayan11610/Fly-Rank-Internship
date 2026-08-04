"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function Tabs({ value, onValueChange, children, className }: TabsProps) {
  // Simple layout container passing down active tab parameters via React clone
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeValue: value, onValueChange } as any);
    }
    return child;
  });

  return <div className={cn("w-full", className)}>{childrenWithProps}</div>;
}

interface TabsListProps {
  activeValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ activeValue, onValueChange, children, className }: TabsListProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeValue, onClick: onValueChange } as any);
    }
    return child;
  });

  return (
    <div className={cn("inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 p-1 text-slate-400 border border-border/50", className)}>
      {childrenWithProps}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  activeValue?: string;
  onClick?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function TabsTrigger({ value, activeValue, onClick, children, className }: TabsTriggerProps) {
  const isActive = value === activeValue;
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        isActive
          ? "bg-slate-800 text-slate-100 shadow-sm"
          : "hover:bg-slate-950/50 hover:text-slate-200",
        className
      )}
      onClick={() => onClick && onClick(value)}
      role="tab"
      aria-selected={isActive}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  activeValue?: string;
  children: React.ReactNode;
  className?: string;
}

export function TabsContent({ value, activeValue, children, className }: TabsContentProps) {
  if (value !== activeValue) return null;
  return (
    <div className={cn("mt-2 focus-visible:outline-none", className)} role="tabpanel">
      {children}
    </div>
  );
}
