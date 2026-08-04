"use client";

import * as React from "react";
import { UploadCloud } from "lucide-react";
import { Button } from "../ui/Button";

interface DragDropProps {
  onFileSelect: (file: File) => void;
  disabled?: boolean;
}

export function DragDrop({ onFileSelect, disabled }: DragDropProps) {
  const [dragActive, setDragActive] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl transition-all h-64 text-center ${
        dragActive ? "border-primary bg-primary/5" : "border-border hover:border-slate-700 bg-card/40"
      } ${disabled ? "opacity-50 pointer-events-none" : ""}`}
    >
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        accept=".js,.jsx,.ts,.tsx,.py,.go"
        disabled={disabled}
      />
      <UploadCloud className="h-10 w-10 text-slate-400 mb-4" />
      <h3 className="text-lg font-semibold text-slate-200 mb-1">Drag and drop file here</h3>
      <p className="text-xs text-slate-500 mb-6">Supports .js, .ts, .py, .go files up to 50KB</p>
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={disabled}
        onClick={() => fileInputRef.current?.click()}
      >
        Choose File
      </Button>
    </div>
  );
}
export default DragDrop;
