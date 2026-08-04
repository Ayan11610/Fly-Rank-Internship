import * as React from "react";

interface ReviewEditorProps {
  code: string;
  filePath: string;
  highlightedLine?: number;
}

export function ReviewEditor({ code, filePath, highlightedLine }: ReviewEditorProps) {
  const lines = code.split("\n");

  return (
    <div className="flex flex-col border border-border bg-slate-950 rounded-xl overflow-hidden font-mono text-sm leading-6">
      <div className="flex items-center justify-between bg-slate-900 border-b border-border px-4 py-2.5 text-xs text-slate-400">
        <span>{filePath}</span>
        <span>Read-only Mode</span>
      </div>
      <div className="overflow-x-auto p-4 flex">
        <div className="text-right text-slate-600 select-none pr-4 border-r border-border/50 flex flex-col">
          {lines.map((_, idx) => (
            <span key={idx} className={idx + 1 === highlightedLine ? "text-red-500 font-bold" : ""}>
              {idx + 1}
            </span>
          ))}
        </div>
        <pre className="pl-4 text-slate-300 flex-1 whitespace-pre">
          <code>
            {lines.map((line, idx) => (
              <div
                key={idx}
                className={idx + 1 === highlightedLine ? "bg-critical/10 text-red-300 font-medium px-1 rounded-sm -mx-1" : ""}
              >
                {line || " "}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
export default ReviewEditor;
