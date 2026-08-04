import * as React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getSessionUser } from "@/lib/auth";
import { Shield, CreditCard, HardDrive } from "lucide-react";
import { formatDate } from "@/utils/formatter";

export default async function ProfilePage() {
  const user = await getSessionUser();

  if (!user) {
    return <p className="text-sm text-slate-500">Not authenticated.</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Profile"
        description="View your user details, scanning subscription, and quotas."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {/* User Card */}
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-col items-center gap-4 text-center">
            <div className="h-20 w-20 rounded-full bg-slate-900 border border-border flex items-center justify-center text-slate-400 text-3xl font-bold">
              AS
            </div>
            <div>
              <CardTitle className="text-lg font-bold text-slate-100">{user.name}</CardTitle>
              <p className="text-sm text-slate-400 mt-1">{user.email}</p>
            </div>
            <Badge variant="secondary" className="capitalize">
              {user.plan} Plan
            </Badge>
          </CardHeader>
          <CardContent className="border-t border-border/50 pt-4 flex flex-col gap-2.5 text-sm text-slate-400">
            <div className="flex justify-between">
              <span>Joined</span>
              <span className="font-semibold text-slate-200">{formatDate(user.createdAt)}</span>
            </div>
            <div className="flex justify-between">
              <span>Account Type</span>
              <span className="font-semibold text-slate-200 capitalize">{user.plan} User</span>
            </div>
          </CardContent>
        </Card>

        {/* Quotas Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-100">Quota Usage</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-300 flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-primary" /> Monthly Scans
                </span>
                <span className="font-semibold text-slate-200">14 / 100 scans</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-border/50">
                <div className="bg-primary h-full rounded-full" style={{ width: "14%" }} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-300 flex items-center gap-1.5">
                  <HardDrive className="h-4 w-4 text-secondary" /> Code Storage
                </span>
                <span className="font-semibold text-slate-200">0.24 MB / 10 MB</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-border/50">
                <div className="bg-secondary h-full rounded-full" style={{ width: "2.4%" }} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-300 flex items-center gap-1.5">
                  <CreditCard className="h-4 w-4 text-emerald-400" /> Billing Status
                </span>
                <span className="font-semibold text-emerald-400">Active (Free Tier)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export const dynamic = "force-dynamic";
