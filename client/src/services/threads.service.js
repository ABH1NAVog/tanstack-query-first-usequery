// Already wired for you (this was LU 2.2's work). You do NOT need to edit this.
// Use getThreads as your queryFn — do not change its signature.
import apiClient from "./apiClient";

export async function getThreads() {
  const response = await apiClient.get("/api/threads");
  return response.data;
}
