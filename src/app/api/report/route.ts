import { NextResponse } from "next/server";
import { getReports } from "@/services/reportService";

export async function GET() {
  const reports = await getReports();
  return NextResponse.json({ success: true, data: reports });
}
