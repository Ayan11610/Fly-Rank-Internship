import { useState } from "react";
import { uploadFile } from "@/services/uploadService";

export function useUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const performUpload = async (file: File) => {
    setUploading(true);
    setProgress(10);
    setError(null);
    try {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 90 ? 90 : prev + 20));
      }, 100);

      const result = await uploadFile(file);
      clearInterval(interval);
      setProgress(100);
      setUploading(false);
      return result;
    } catch (err: any) {
      setError(err.message || "Upload failed");
      setUploading(false);
      return { success: false, error: err.message };
    }
  };

  return { uploading, progress, error, performUpload };
}
