import { User } from "@/types/user";

export async function getSessionUser(): Promise<User | null> {
  // Simple foundational stub for fetching current authenticated session user.
  return {
    id: "user_01",
    name: "Alex Security",
    email: "alex@example.com",
    plan: "free",
    createdAt: new Date().toISOString(),
  };
}
