import * as React from "react";
import { Report } from "@/types/report";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Terminal } from "lucide-react";
import { SeverityBadge } from "../review/SeverityBadge";

interface ReportSummaryProps {
  report: Report;
}

export function ReportSummary({ report }: ReportSummaryProps) {
  const sum = report.summary;

  const severityItems = [
    { label: "Critical", count: sum.critical, color: "text-critical" },
    { label: "High", count: sum.high, color: "text-orange-400" },
    { label: "Medium", count: sum.medium, color: "text-yellow-400" },
    { label: "Low", count: sum.low, color: "text-sky-400" },
    { label: "Info", count: sum.info, color: "text-slate-400" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-100">Report Metrics Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 grid-cols-2 sm:grid-cols-5 text-center">
          {severityItems.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-900/50 border border-border rounded-xl flex flex-col gap-1">
              <span className={`text-sm font-medium ${item.color}`}>{item.label}</span>
              <span className="text-2xl font-bold text-slate-200">{item.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-100">Findings Detail</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {report.vulnerabilities.length === 0 ? (
            <p className="text-sm text-slate-500">No vulnerabilities detected in this report.</p>
          ) : (
            report.vulnerabilities.map((vuln) => (
              <div key={vuln.id} className="p-4 border border-border bg-slate-900/20 rounded-xl flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-semibold text-slate-200">{vuln.title}</h4>
                    <span className="text-xs text-slate-500 mt-1 block">{vuln.filePath} : Line {vuln.lineStart}</span>
                  </div>
                  <SeverityBadge severity={vuln.severity} />
                </div>
                <p className="text-sm text-slate-400">{vuln.description}</p>
                <div className="rounded-lg bg-slate-950 p-3 border border-border/60 font-mono text-xs text-emerald-400 overflow-x-auto flex items-start gap-2">
                  <Terminal className="h-4 w-4 text-emerald-500 mt-0.5" />
                  <pre>{vuln.recommendedFix}</pre>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
export default ReportSummary;
