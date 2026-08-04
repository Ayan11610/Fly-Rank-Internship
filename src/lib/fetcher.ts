import { ApiResponse } from "@/types/api";

export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return { success: true, data };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "An unknown error occurred",
    };
  }
}
