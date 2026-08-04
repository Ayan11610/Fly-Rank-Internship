"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X, User } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/upload", label: "Upload" },
    { href: "/review", label: "Reviews" },
    { href: "/reports", label: "Reports" },
    { href: "/settings", label: "Settings" },
    { href: "/health", label: "Health" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-slate-950/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-slate-100">
            <Shield className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">Sentinel AI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-slate-100 ${
                    active ? "text-slate-100 font-semibold" : "text-slate-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/profile">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 rounded-full p-2">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-slate-950 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-slate-100 font-medium py-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
export default Navbar;
