import { useState, useEffect } from "react";
import { Report } from "@/types/report";
import { getReports, getReportById } from "@/services/reportService";

export function useReports(reportId?: string) {
  const [reports, setReports] = useState<Report[]>([]);
  const [currentReport, setCurrentReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      if (reportId) {
        const rep = await getReportById(reportId);
        setCurrentReport(rep);
      } else {
        const list = await getReports();
        setReports(list);
      }
      setLoading(false);
    }
    load();
  }, [reportId]);

  return { reports, currentReport, loading };
}
