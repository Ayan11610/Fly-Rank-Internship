import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/common/PageHeader";
import { ReportSummary } from "@/components/reports/ReportSummary";
import { ExportButtons } from "@/components/reports/ExportButtons";
import { getReportById } from "@/services/reportService";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/utils/formatter";

interface ReportDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ReportDetailPage({ params }: ReportDetailPageProps) {
  const { id } = await params;
  const report = await getReportById(id);

  if (!report) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Link href="/reports" className="text-sm text-slate-400 hover:text-slate-100 flex items-center gap-1.5 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to reports
        </Link>
      </div>

      <PageHeader
        title={`Report: ${report.projectName}`}
        description={`Compiled summary for review run. Generated: ${formatDate(report.createdAt)}.`}
        action={<ExportButtons report={report} />}
      />

      <ReportSummary report={report} />
    </div>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
