import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { ShieldAlert, CheckCircle2, FileCode2, Award } from "lucide-react";

export function SummaryCards() {
  const cards = [
    { title: "Total Scans", value: "14", description: "+2 this week", icon: FileCode2, color: "text-sky-400" },
    { title: "Critical Issues", value: "2", description: "Require immediate fix", icon: ShieldAlert, color: "text-critical" },
    { title: "Resolved Findings", value: "8", description: "Fixed via AI recommendations", icon: CheckCircle2, color: "text-emerald-400" },
    { title: "Avg Security Score", value: "84/100", description: "B+ rating", icon: Award, color: "text-yellow-400" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">{card.title}</CardTitle>
              <Icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-100">{card.value}</div>
              <p className="text-xs text-slate-500 mt-1">{card.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
export default SummaryCards;
