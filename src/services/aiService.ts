import { Vulnerability } from "@/types/vulnerability";

export async function requestAIScan(code: string, fileName: string): Promise<Vulnerability[]> {
  // Foundational placeholder stub simulating AI scanning response
  return [
    {
      id: "vuln_01",
      title: "Hardcoded Secret Token",
      description: "An API key or secret token was found hardcoded in the source code, posing serious exposure risks.",
      severity: "critical",
      filePath: fileName,
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
      filePath: fileName,
      lineStart: 18,
      lineEnd: 18,
      originalCode: 'const user = await db.query(`SELECT * FROM users WHERE email = \'${email}\'`);',
      recommendedFix: 'const user = await db.query("SELECT * FROM users WHERE email = ?", [email]);',
      status: "open",
      category: "SQL Injection",
    },
  ];
}
