"use client";

import { useEffect } from "react";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[calc(100vh-10rem)] w-full items-center justify-center p-6">
      <Alert variant="error" title="Something went wrong" className="max-w-md w-full">
        <p className="mb-4">
          An unexpected error occurred while loading this page.
        </p>
        <Button variant="outline" size="sm" onClick={() => reset()}>
          Reset Page
        </Button>
      </Alert>
    </div>
  );
}
