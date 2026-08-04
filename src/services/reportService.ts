import { Report } from "@/types/report";
import { getReviews } from "./reviewService";
import { generateReportFromReview } from "@/lib/reportGenerator";

export async function getReports(): Promise<Report[]> {
  const reviews = await getReviews();
  return reviews.map(generateReportFromReview);
}

export async function getReportById(id: string): Promise<Report | null> {
  const reviews = await getReviews();
  const revId = id.replace(/^rep_/, "");
  const review = reviews.find((r) => r.id === revId || r.id === id);
  return review ? generateReportFromReview(review) : null;
}
