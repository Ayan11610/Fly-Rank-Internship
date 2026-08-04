import { Vulnerability } from "./vulnerability";

export interface Report {
  id: string;
  reviewId: string;
  projectName: string;
  createdAt: string;
  summary: {
    total: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
    info: number;
  };
  vulnerabilities: Vulnerability[];
}
