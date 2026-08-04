import { NextResponse } from "next/server";
import { getReviews } from "@/services/reviewService";

export async function GET() {
  const reviews = await getReviews();
  return NextResponse.json({ success: true, data: reviews });
}
