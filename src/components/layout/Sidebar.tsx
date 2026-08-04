"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, UploadCloud, Eye, FileText, Settings, Heart } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/upload", label: "Upload Code", icon: UploadCloud },
    { href: "/review", label: "Reviews", icon: Eye },
    { href: "/reports", label: "Reports", icon: FileText },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/health", label: "Health Check", icon: Heart },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border bg-slate-950 p-6 gap-6 h-[calc(100vh-4rem)] sticky top-16">
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Navigation</div>
      <nav className="flex flex-col gap-1">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href || pathname?.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-900 hover:text-slate-100 ${
                active ? "bg-slate-900 text-slate-100" : "text-slate-400"
              }`}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
export default Sidebar;
