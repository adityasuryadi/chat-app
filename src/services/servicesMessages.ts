import { apiClient } from "@/services/apiClient";

const connectWebSocket =() => apiClient.post('/api/ws')

export { connectWebSocket }