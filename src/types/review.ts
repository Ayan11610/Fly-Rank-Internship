import { Vulnerability } from "./vulnerability";

export interface CodeFile {
  path: string;
  content: string;
  language: string;
}

export interface Review {
  id: string;
  projectName: string;
  status: "pending" | "scanning" | "completed" | "failed";
  createdAt: string;
  score: number;
  filesScanned: number;
  vulnerabilities: Vulnerability[];
}
