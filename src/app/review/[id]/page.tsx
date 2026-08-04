import * as React from "react";
import { notFound } from "next/navigation";
import { getReviewById } from "@/services/reviewService";
import { ReviewDetailClient } from "./ReviewDetailClient";

interface ReviewDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ReviewDetailPage({ params }: ReviewDetailPageProps) {
  const { id } = await params;
  const review = await getReviewById(id);

  if (!review) {
    notFound();
  }

  return <ReviewDetailClient review={review} />;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
