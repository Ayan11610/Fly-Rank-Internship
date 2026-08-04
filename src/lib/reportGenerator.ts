import { Report } from "@/types/report";
import { Review } from "@/types/review";

export function generateReportFromReview(review: Review): Report {
  const severities = review.vulnerabilities.reduce(
    (acc, vuln) => {
      acc[vuln.severity] = (acc[vuln.severity] || 0) + 1;
      acc.total += 1;
      return acc;
    },
    { total: 0, critical: 0, high: 0, medium: 0, low: 0, info: 0 }
  );

  return {
    id: `rep_${review.id}`,
    reviewId: review.id,
    projectName: review.projectName,
    createdAt: new Date().toISOString(),
    summary: severities,
    vulnerabilities: review.vulnerabilities,
  };
}
