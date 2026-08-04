import * as React from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "../ui/Button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export function EmptyState({ title, description, actionText, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-border rounded-xl bg-card/40 my-4">
      <div className="p-3 bg-slate-900 border border-border rounded-lg text-slate-400 mb-4">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-100 mb-1">{title}</h3>
      <p className="text-sm text-slate-400 max-w-sm mb-6">{description}</p>
      {actionText && onAction && (
        <Button onClick={onAction} variant="primary" size="sm">
          {actionText}
        </Button>
      )}
    </div>
  );
}
export default EmptyState;
