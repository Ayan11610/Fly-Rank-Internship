import * as React from "react";

interface UploadProgressProps {
  progress: number;
  statusText?: string;
}

export function UploadProgress({ progress, statusText = "Uploading file..." }: UploadProgressProps) {
  return (
    <div className="flex flex-col p-4 border border-border bg-slate-900/60 rounded-xl my-4 gap-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-300">{statusText}</span>
        <span className="font-semibold text-slate-100">{progress}%</span>
      </div>
      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-border/50">
        <div
          className="bg-primary h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
export default UploadProgress;
