import * as React from "react";
import { Vulnerability } from "@/types/vulnerability";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Alert } from "../ui/Alert";
import { Terminal } from "lucide-react";

interface RecommendationCardProps {
  vulnerability: Vulnerability;
}

export function RecommendationCard({ vulnerability }: RecommendationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-100">AI Remediation Guide</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <h5 className="text-sm font-semibold text-slate-300">Description</h5>
          <p className="text-sm text-slate-400 mt-1 leading-relaxed">{vulnerability.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-sm font-semibold text-slate-300">Recommended Fix</h5>
          <div className="rounded-lg bg-slate-950 p-4 border border-border flex items-start gap-2.5 font-mono text-xs text-emerald-400 overflow-x-auto">
            <Terminal className="h-4 w-4 text-emerald-500 mt-0.5" />
            <pre>{vulnerability.recommendedFix}</pre>
          </div>
        </div>
        <Alert variant="info" className="mt-2">
          Apply the recommended fix patterns above to resolve the {vulnerability.category} flaw.
        </Alert>
      </CardContent>
    </Card>
  );
}
export default RecommendationCard;
