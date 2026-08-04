import { Review } from "@/types/review";
import { requestAIScan } from "./aiService";

// Local in-memory mock reviews store
const MOCK_REVIEWS: Review[] = [
  {
    id: "rev_01",
    projectName: "e-commerce-backend",
    status: "completed",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    score: 72,
    filesScanned: 12,
    vulnerabilities: [
      {
        id: "vuln_01",
        title: "Hardcoded Secret Token",
        description: "An API key or secret token was found hardcoded in the source code, posing serious exposure risks.",
        severity: "critical",
        filePath: "src/config/keys.js",
        lineStart: 4,
        lineEnd: 4,
        originalCode: 'const OPENAI_KEY = "sk-proj-abc123xyz789";',
        recommendedFix: "const OPENAI_KEY = process.env.OPENAI_API_KEY;",
        status: "open",
        category: "Secrets Exposure",
      },
      {
        id: "vuln_02",
        title: "Insecure Direct SQL Execution",
        description: "Executing SQL queries with string interpolation enables SQL injection attacks. Parameterize instead.",
        severity: "high",
        filePath: "src/db/user.js",
        lineStart: 18,
        lineEnd: 18,
        originalCode: 'const user = await db.query(`SELECT * FROM users WHERE email = \'${email}\'`);',
        recommendedFix: 'const user = await db.query("SELECT * FROM users WHERE email = ?", [email]);',
        status: "open",
        category: "SQL Injection",
      },
    ],
  },
  {
    id: "rev_02",
    projectName: "user-auth-service",
    status: "completed",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    score: 95,
    filesScanned: 5,
    vulnerabilities: [],
  },
];

export async function getReviews(): Promise<Review[]> {
  return MOCK_REVIEWS;
}

export async function getReviewById(id: string): Promise<Review | null> {
  return MOCK_REVIEWS.find((r) => r.id === id) || null;
}

export async function createReview(projectName: string, code: string, fileName: string): Promise<Review> {
  const vulnerabilities = await requestAIScan(code, fileName);
  const newReview: Review = {
    id: `rev_${Math.random().toString(36).substring(2, 9)}`,
    projectName,
    status: "completed",
    createdAt: new Date().toISOString(),
    score: vulnerabilities.length === 0 ? 100 : Math.max(0, 100 - vulnerabilities.length * 15),
    filesScanned: 1,
    vulnerabilities,
  };
  MOCK_REVIEWS.unshift(newReview);
  return newReview;
}
