import * as React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ShieldCheck } from "lucide-react";

async function getHealth() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch health check todo.");
  }

  return res.json();
}

export default async function HealthPage() {
  const data = await getHealth();

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Health Check"
        description="Verify system status and data fetching pipelines."
      />

      <div className="max-w-xl mx-auto w-full">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <CardTitle className="text-lg font-semibold text-slate-100">API Connection Status</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="text-sm text-slate-400">
              Fetched data dynamically from the placeholder API to test server-side fetch capabilities:
            </div>
            <div className="rounded-lg bg-slate-950 p-4 border border-border overflow-x-auto font-mono text-xs text-sky-400">
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
              <span>●</span>
              <span>Health check validation passed successfully (Server-Side).</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
