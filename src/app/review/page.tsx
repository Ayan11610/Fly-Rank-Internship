import * as React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, ShieldAlert, Plus, Calendar } from "lucide-react";
import { getReviews } from "@/services/reviewService";
import { formatDate } from "@/utils/formatter";

export default async function ReviewListPage() {
  const reviews = await getReviews();

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Security Reviews"
        description="Browse all completed and active code security reviews."
        action={
          <Link href="/upload">
            <Button size="sm" className="flex items-center gap-1.5">
              <Plus className="h-4 w-4" />
              New Scan
            </Button>
          </Link>
        }
      />

      {reviews.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 border border-dashed border-border rounded-xl text-center">
          <ShieldCheck className="h-10 w-10 text-slate-500 mb-3" />
          <h3 className="text-lg font-semibold text-slate-200">No scans found</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-sm mb-6">
            Run your first security scan to analyze files for structural vulnerabilities.
          </p>
          <Link href="/upload">
            <Button>Run Audit</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((rev) => {
            const hasVulnerabilities = rev.vulnerabilities.length > 0;
            return (
              <Card key={rev.id} className="hover:border-slate-800 transition-colors">
                <CardHeader className="flex flex-row items-start justify-between pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg border ${
                      hasVulnerabilities ? "bg-red-500/10 border-red-500/20 text-critical" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    }`}>
                      {hasVulnerabilities ? <ShieldAlert className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
                    </div>
                    <div>
                      <CardTitle className="text-base font-semibold text-slate-200">{rev.projectName}</CardTitle>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(rev.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={rev.status === "completed" ? "success" : "warning"}>
                    {rev.status}
                  </Badge>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-border/40 text-sm">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Security Score</span>
                      <span className={`text-base font-bold ${
                        rev.score >= 90 ? "text-emerald-400" : rev.score >= 70 ? "text-yellow-400" : "text-critical"
                      }`}>{rev.score}/100</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-xs text-slate-500">Findings</span>
                      <span className="font-semibold text-slate-200">{rev.vulnerabilities.length} Issues</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-xs text-slate-500">Files Scanned</span>
                      <span className="font-semibold text-slate-200">{rev.filesScanned}</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link href={`/review/${rev.id}`}>
                      <Button variant="outline" size="sm">
                        View Analysis
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
export const dynamic = "force-dynamic";
