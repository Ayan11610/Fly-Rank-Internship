import * as React from "react";
import Link from "next/link";
import { Report } from "@/types/report";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { formatDate } from "@/utils/formatter";
import { FileText, ShieldAlert } from "lucide-react";

interface ReportCardProps {
  report: Report;
}

export function ReportCard({ report }: ReportCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3 pb-3">
        <div className="p-2 bg-slate-900 border border-border rounded-lg text-slate-400">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <CardTitle className="text-base font-semibold text-slate-200">{report.projectName}</CardTitle>
          <p className="text-xs text-slate-500 mt-0.5">{formatDate(report.createdAt)}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldAlert className="h-4 w-4 text-critical" />
            <span>{report.summary.total} Findings</span>
          </div>
          <Link href={`/reports/${report.id}`}>
            <Button variant="outline" size="sm">
              View Report
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
export default ReportCard;
