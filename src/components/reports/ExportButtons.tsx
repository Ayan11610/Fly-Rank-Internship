"use client";

import * as React from "react";
import { Report } from "@/types/report";
import { Button } from "../ui/Button";
import { FileJson, FileCode } from "lucide-react";
import { exportReportAsJSON, exportReportAsHTML } from "@/utils/export";

interface ExportButtonsProps {
  report: Report;
}

export function ExportButtons({ report }: ExportButtonsProps) {
  const triggerJSONDownload = () => {
    const jsonStr = exportReportAsJSON(report);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `security-report-${report.projectName}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const triggerHTMLDownload = () => {
    const htmlStr = exportReportAsHTML(report);
    const blob = new Blob([htmlStr], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `security-report-${report.projectName}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={triggerJSONDownload} className="flex items-center gap-1.5">
        <FileJson className="h-4 w-4" />
        Export JSON
      </Button>
      <Button variant="outline" size="sm" onClick={triggerHTMLDownload} className="flex items-center gap-1.5">
        <FileCode className="h-4 w-4" />
        Export HTML
      </Button>
    </div>
  );
}
export default ExportButtons;
