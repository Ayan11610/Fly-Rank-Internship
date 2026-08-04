import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Shield, Zap, RefreshCw, ChevronRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-12 py-6">
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center text-center gap-6 py-12 px-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-border/80 text-xs font-semibold text-primary">
          <Zap className="h-3 w-3 fill-current" />
          <span>Next-Generation Static Analysis</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-none">
          AI-Powered Code <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Security Reviews
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-400 max-w-xl">
          Upload code or paste snippets to instantly identify flaws, analyze structural vulnerabilities, and generate precise remediation code suggestions using AI.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link href="/upload">
            <Button variant="primary" size="lg" className="flex items-center gap-2">
              Start Scan <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto w-full px-4">
        <Card className="hover:border-slate-800 transition-colors">
          <CardContent className="pt-6 flex flex-col gap-3">
            <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-critical w-fit">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">Vulnerability Audits</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Detect credentials exposures, injection weaknesses, parsing limits, and critical AST security flaws.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-slate-800 transition-colors">
          <CardContent className="pt-6 flex flex-col gap-3">
            <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-lg text-primary w-fit">
              <RefreshCw className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">AI Remediation</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Generate safe code recommendations instantly, comparing vulnerable snippets side-by-side.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-slate-800 transition-colors">
          <CardContent className="pt-6 flex flex-col gap-3">
            <div className="p-2.5 bg-secondary/10 border border-secondary/20 rounded-lg text-secondary-foreground w-fit">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">Exportable Formats</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Compile detailed reviews into clean HTML templates or structured JSON formats for reporting.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
