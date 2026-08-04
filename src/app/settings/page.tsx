"use client";

import * as React from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";

export default function SettingsPage() {
  const [model, setModel] = React.useState("gemini-1.5");
  const [minSeverity, setMinSeverity] = React.useState("medium");
  const [apiKey, setApiKey] = React.useState("");
  const [saved, setSaved] = React.useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Settings"
        description="Configure your scanning rules, AI providers, and alert parameters."
      />

      <div className="max-w-xl mx-auto w-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-100">Scan Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-300">AI Model Provider</label>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="flex h-10 w-full rounded-lg border border-border bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all"
                >
                  <option value="gemini-1.5">Gemini 1.5 Flash (Default)</option>
                  <option value="openai-gpt4">OpenAI GPT-4o</option>
                  <option value="claude-3">Anthropic Claude 3.5 Sonnet</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-300">Minimum Reporting Severity</label>
                <select
                  value={minSeverity}
                  onChange={(e) => setMinSeverity(e.target.value)}
                  className="flex h-10 w-full rounded-lg border border-border bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all"
                >
                  <option value="critical">Critical Only</option>
                  <option value="high">High & Above</option>
                  <option value="medium">Medium & Above</option>
                  <option value="low">Report All Issues</option>
                </select>
              </div>

              <Input
                label="Custom API Key (Optional)"
                type="password"
                placeholder="Leave blank to use default workspace key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />

              {saved && (
                <Alert variant="success" title="Settings Saved">
                  Your scan configurations have been updated successfully.
                </Alert>
              )}

              <Button type="submit" className="w-full">
                Save Preferences
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
