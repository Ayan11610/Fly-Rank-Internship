import * as React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { ReportCard } from "@/components/reports/ReportCard";
import { getReports } from "@/services/reportService";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default async function ReportsHistoryPage() {
  const reports = await getReports();

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Security Reports"
        description="View and download historical audit reports in JSON or HTML formats."
      />

      {reports.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 border border-dashed border-border rounded-xl text-center bg-card/25">
          <ShieldCheck className="h-10 w-10 text-slate-500 mb-3" />
          <h3 className="text-lg font-semibold text-slate-200">No reports available</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-sm mb-6">
            Scans must be completed before downloadable summaries can be consolidated here.
          </p>
          <Link href="/upload">
            <Button>Run Audit</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      )}
    </div>
  );
}
export const dynamic = "force-dynamic";
