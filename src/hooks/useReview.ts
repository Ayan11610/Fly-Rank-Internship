import { useState, useEffect } from "react";
import { Review } from "@/types/review";
import { getReviews, getReviewById } from "@/services/reviewService";

export function useReview(reviewId?: string) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentReview, setCurrentReview] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      if (reviewId) {
        const rev = await getReviewById(reviewId);
        setCurrentReview(rev);
      } else {
        const list = await getReviews();
        setReviews(list);
      }
      setLoading(false);
    }
    load();
  }, [reviewId]);

  return { reviews, currentReview, loading };
}
