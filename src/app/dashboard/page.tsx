import * as React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { RecentReviews } from "@/components/dashboard/RecentReviews";
import { StatsChart } from "@/components/dashboard/StatsChart";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Dashboard"
        description="Monitor scan statistics, active vulnerabilities, and historical reports."
        action={
          <Link href="/upload">
            <Button size="sm" className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" />
              New Scan
            </Button>
          </Link>
        }
      />
      <SummaryCards />
      <div className="grid gap-6 lg:grid-cols-3 mt-4">
        <div className="lg:col-span-2">
          <RecentReviews />
        </div>
        <div>
          <StatsChart />
        </div>
      </div>
    </div>
  );
}
export const dynamic = "force-dynamic";
