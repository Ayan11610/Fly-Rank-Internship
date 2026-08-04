"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div className="md:hidden fixed inset-0 z-50 bg-slate-950 p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-100">Menu</span>
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-100" aria-label="Close menu">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lg text-slate-300 hover:text-slate-100 font-medium"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
export default MobileMenu;
