import * as React from "react";
import { Vulnerability } from "@/types/vulnerability";
import { SeverityBadge } from "./SeverityBadge";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface FindingsTableProps {
  findings: Vulnerability[];
  onSelectFinding?: (finding: Vulnerability) => void;
}

export function FindingsTable({ findings, onSelectFinding }: FindingsTableProps) {
  return (
    <div className="w-full overflow-x-auto border border-border rounded-xl bg-card">
      <table className="w-full text-left text-sm border-collapse">
        <thead className="bg-slate-900/60 border-b border-border text-slate-400 text-xs font-semibold uppercase">
          <tr>
            <th className="p-4">Title</th>
            <th className="p-4">Category</th>
            <th className="p-4">Severity</th>
            <th className="p-4">Line</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60 text-slate-300">
          {findings.length === 0 ? (
            <tr>
              <td colSpan={6} className="p-8 text-center text-slate-500">
                No vulnerabilities detected.
              </td>
            </tr>
          ) : (
            findings.map((f) => (
              <tr key={f.id} className="hover:bg-slate-900/30 transition-colors">
                <td className="p-4 font-medium text-slate-200">{f.title}</td>
                <td className="p-4 text-xs text-slate-400">{f.category}</td>
                <td className="p-4">
                  <SeverityBadge severity={f.severity} />
                </td>
                <td className="p-4 text-xs font-mono">{f.lineStart}</td>
                <td className="p-4">
                  <Badge variant={f.status === "open" ? "warning" : "success"}>
                    {f.status}
                  </Badge>
                </td>
                <td className="p-4 text-right">
                  <Button variant="outline" size="sm" onClick={() => onSelectFinding?.(f)}>
                    View
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
export default FindingsTable;
