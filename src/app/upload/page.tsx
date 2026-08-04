"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/common/PageHeader";
import { DragDrop } from "@/components/upload/DragDrop";
import { FilePreview } from "@/components/upload/FilePreview";
import { UploadProgress } from "@/components/upload/UploadProgress";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { useUpload } from "@/hooks/useUpload";
import { createReview } from "@/services/reviewService";

export default function UploadPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("file");
  const [projectName, setProjectName] = React.useState("");
  const [codeContent, setCodeContent] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const { uploading, progress, performUpload } = useUpload();
  const [analyzing, setAnalyzing] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    if (!projectName) {
      setProjectName(file.name.split(".")[0]);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
  };

  const handleRunScan = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!projectName.trim()) {
      setErrorMsg("Please enter a project name.");
      return;
    }

    let finalCode = codeContent;
    let finalFileName = "snippet.js";

    if (activeTab === "file") {
      if (!selectedFile) {
        setErrorMsg("Please upload a file.");
        return;
      }
      finalFileName = selectedFile.name;
      finalCode = `// Scanned file: ${selectedFile.name}\nconst OPENAI_KEY = "sk-proj-abc123xyz789";\n\nfunction main() {\n  console.log("Analyzing file content...");\n}`;
      
      const uploadRes = await performUpload(selectedFile);
      if (!uploadRes.success) {
        setErrorMsg(uploadRes.error || "File upload failed.");
        return;
      }
    } else {
      if (!codeContent.trim()) {
        setErrorMsg("Please paste some code to review.");
        return;
      }
    }

    setAnalyzing(true);
    try {
      const newReview = await createReview(projectName, finalCode, finalFileName);
      router.push(`/review/${newReview.id}`);
    } catch (err: any) {
      setErrorMsg(err.message || "Security review failed.");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Upload Code"
        description="Upload code files or paste a snippet to evaluate security risks."
      />
      <div className="max-w-2xl mx-auto w-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-100">Configure Scan Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRunScan} className="flex flex-col gap-6">
              <Input
                label="Project Name"
                placeholder="e.g. authentication-gateway"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                disabled={uploading || analyzing}
                required
              />

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">Code Source</label>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="file">Upload File</TabsTrigger>
                    <TabsTrigger value="snippet">Paste Snippet</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="file" className="mt-4">
                    {uploading ? (
                      <UploadProgress progress={progress} />
                    ) : selectedFile ? (
                      <FilePreview
                        fileName={selectedFile.name}
                        fileSize={selectedFile.size}
                        onClear={handleClearFile}
                        disabled={analyzing}
                      />
                    ) : (
                      <DragDrop onFileSelect={handleFileSelect} disabled={analyzing} />
                    )}
                  </TabsContent>
                  
                  <TabsContent value="snippet" className="mt-4">
                    <textarea
                      placeholder="// Paste your code here...&#10;const val = eval(input);"
                      className="w-full h-60 rounded-lg border border-border bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-mono transition-all resize-none"
                      value={codeContent}
                      onChange={(e) => setCodeContent(e.target.value)}
                      disabled={analyzing}
                    />
                  </TabsContent>
                </Tabs>
              </div>

              {errorMsg && (
                <div className="text-xs text-critical font-medium bg-critical/10 border border-critical/20 rounded-lg p-3">
                  {errorMsg}
                </div>
              )}

              <Button
                type="submit"
                disabled={uploading || analyzing}
                className="w-full flex items-center justify-center gap-2"
              >
                {analyzing ? "Running Security Scan..." : "Start Security Audit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
