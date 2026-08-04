import { ApiResponse } from "@/types/api";

export async function get<T>(url: string, headers?: HeadersInit): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, { method: "GET", headers });
    const data = await res.json();
    return { 
      success: res.ok, 
      data: res.ok ? data : undefined, 
      error: !res.ok ? "GET request failed" : undefined 
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function post<T>(url: string, body: any, headers?: HeadersInit): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return { 
      success: res.ok, 
      data: res.ok ? data : undefined, 
      error: !res.ok ? "POST request failed" : undefined 
    };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
