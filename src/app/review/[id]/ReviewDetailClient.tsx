"use client";

import * as React from "react";
import { Review } from "@/types/review";
import { Vulnerability } from "@/types/vulnerability";
import { PageHeader } from "@/components/common/PageHeader";
import { ReviewEditor } from "@/components/review/ReviewEditor";
import { VulnerabilityCard } from "@/components/review/VulnerabilityCard";
import { RecommendationCard } from "@/components/review/RecommendationCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

interface ReviewDetailClientProps {
  review: Review;
}

export function ReviewDetailClient({ review }: ReviewDetailClientProps) {
  const [selectedFinding, setSelectedFinding] = React.useState<Vulnerability | null>(
    review.vulnerabilities[0] || null
  );

  const sampleCode = `// Scanned file: ${selectedFinding?.filePath || "source.js"}
const path = require('path');
const express = require('express');
const app = express();

${review.vulnerabilities.map(v => v.originalCode).join("\n\n")}

app.listen(3000, () => {
  console.log('App listening on port 3000');
});`;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Link href="/review" className="text-sm text-slate-400 hover:text-slate-100 flex items-center gap-1.5 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to reviews
        </Link>
      </div>

      <PageHeader
        title={review.projectName}
        description={`Audit details for review run. Score: ${review.score}/100.`}
        action={
          <Link href={`/reports/rep_${review.id}`}>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5">
              <FileText className="h-4 w-4" /> View Report
            </Button>
          </Link>
        }
      />

      {review.vulnerabilities.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 border border-border bg-slate-900/20 rounded-xl text-center">
          <CheckCircle2 className="h-10 w-10 text-emerald-400 mb-3" />
          <h3 className="text-lg font-semibold text-slate-200">No vulnerabilities detected!</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-sm">
            Sentinel AI analyzed your file and found no security risks.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Findings cards list */}
          <div className="lg:col-span-4 flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-2" role="listbox" aria-label="Security Findings">
            {review.vulnerabilities.map((vuln) => (
              <VulnerabilityCard
                key={vuln.id}
                vulnerability={vuln}
                selected={selectedFinding?.id === vuln.id}
                onClick={() => setSelectedFinding(vuln)}
              />
            ))}
          </div>

          {/* Editor and Recommendations */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <ReviewEditor
              code={sampleCode}
              filePath={selectedFinding?.filePath || "source.js"}
              highlightedLine={selectedFinding ? 6 : undefined} // Mock line highlight
            />
            {selectedFinding && (
              <RecommendationCard vulnerability={selectedFinding} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default ReviewDetailClient;
