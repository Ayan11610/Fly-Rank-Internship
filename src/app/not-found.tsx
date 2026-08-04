import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-10rem)] w-full flex-col items-center justify-center text-center p-6">
      <div className="p-4 bg-slate-900 border border-border rounded-xl text-critical mb-4">
        <ShieldAlert className="h-8 w-8" />
      </div>
      <h2 className="text-2xl font-bold text-slate-100">404 - Page Not Found</h2>
      <p className="text-sm text-slate-400 mt-2 max-w-sm mb-6">
        The security resource you are trying to access does not exist or has been archived.
      </p>
      <Link href="/dashboard">
        <Button variant="primary">Return to Dashboard</Button>
      </Link>
    </div>
  );
}
