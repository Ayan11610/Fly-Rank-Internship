import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { ArrowRight, FileText } from "lucide-react";
import { getReviews } from "@/services/reviewService";
import { formatDate } from "@/utils/formatter";

export async function RecentReviews() {
  const reviews = await getReviews();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-semibold text-slate-100">Recent Security Reviews</CardTitle>
        <Link href="/review">
          <Button variant="ghost" size="sm" className="text-primary hover:text-slate-100 flex items-center gap-1.5">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        {reviews.length === 0 ? (
          <p className="text-sm text-slate-500">No reviews run yet.</p>
        ) : (
          <div className="divide-y divide-border">
            {reviews.slice(0, 5).map((rev) => (
              <div key={rev.id} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-900 border border-border rounded-lg text-slate-400">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">{rev.projectName}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{formatDate(rev.createdAt)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-200">{rev.score}/100</div>
                    <div className="text-xs text-slate-500 mt-0.5">Score</div>
                  </div>
                  <Link href={`/review/${rev.id}`}>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
export default RecentReviews;
