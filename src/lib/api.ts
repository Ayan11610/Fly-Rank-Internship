import { ApiResponse } from "@/types/api";

export async function apiRequest<T>(
  endpoint: string,
  method = "GET",
  body?: any
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`/api/${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    return { 
      success: response.ok, 
      data: response.ok ? data : undefined, 
      error: !response.ok ? (data.message || "Request failed") : undefined 
    };
  } catch (err: any) {
    return { success: false, error: err.message || "Network error" };
  }
}
