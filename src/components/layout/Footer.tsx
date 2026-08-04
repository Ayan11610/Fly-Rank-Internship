import * as React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-slate-950/40 py-6 text-center text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 max-w-7xl mx-auto">
        <div>&copy; {new Date().getFullYear()} Sentinel AI. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
