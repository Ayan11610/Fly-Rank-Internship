import * as React from "react";
import { File, X } from "lucide-react";

interface FilePreviewProps {
  fileName: string;
  fileSize: number;
  onClear: () => void;
  disabled?: boolean;
}

export function FilePreview({ fileName, fileSize, onClear, disabled }: FilePreviewProps) {
  const sizeInKB = (fileSize / 1024).toFixed(2);

  return (
    <div className="flex items-center justify-between p-4 border border-border bg-slate-900/60 rounded-xl my-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-900 border border-border rounded-lg text-slate-400">
          <File className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-medium text-slate-200">{fileName}</div>
          <div className="text-xs text-slate-500 mt-0.5">{sizeInKB} KB</div>
        </div>
      </div>
      <button
        type="button"
        disabled={disabled}
        onClick={onClear}
        className="rounded-md p-1.5 hover:bg-slate-800 text-slate-400 hover:text-slate-100 disabled:opacity-50 cursor-pointer transition-colors"
        aria-label="Remove file"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
export default FilePreview;
