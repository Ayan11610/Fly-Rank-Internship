import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";

export function StatsChart() {
  const chartData = [
    { label: "Critical", count: 2, color: "bg-critical" },
    { label: "High", count: 4, color: "bg-orange-500" },
    { label: "Medium", count: 7, color: "bg-warning" },
    { label: "Low", count: 12, color: "bg-info" },
    { label: "Info", count: 15, color: "bg-slate-500" },
  ];

  const maxCount = Math.max(...chartData.map((d) => d.count));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-100">Vulnerabilities by Severity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {chartData.map((data, idx) => {
          const percent = `${(data.count / maxCount) * 100}%`;
          return (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium text-slate-400">{data.label}</div>
              <div className="flex-1 h-6 bg-slate-900 rounded-md overflow-hidden relative border border-border/50">
                <div
                  className={`h-full ${data.color} rounded-l-md transition-all duration-500`}
                  style={{ width: percent }}
                />
              </div>
              <div className="w-8 text-right text-sm font-semibold text-slate-200">{data.count}</div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
export default StatsChart;
