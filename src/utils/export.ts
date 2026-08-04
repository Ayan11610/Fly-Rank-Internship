import { Report } from "@/types/report";

export function exportReportAsJSON(report: Report): string {
  return JSON.stringify(report, null, 2);
}

export function exportReportAsHTML(report: Report): string {
  // Foundational stub for exporting reports as custom HTML structures.
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>Security Report - ${report.projectName}</title>
    <style>
      body { font-family: sans-serif; padding: 2rem; color: #1e293b; }
      h1 { color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }
      .meta { color: #64748b; margin-bottom: 2rem; }
      .summary { font-weight: bold; }
    </style>
  </head>
  <body>
    <h1>Security Report: ${report.projectName}</h1>
    <div class="meta">Generated on ${new Date(report.createdAt).toLocaleString()}</div>
    <p class="summary">Total Vulnerabilities Found: ${report.summary.total}</p>
  </body>
</html>
  `;
}
