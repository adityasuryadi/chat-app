import axios from "axios";

const baseUrl = import.meta.env.VITE_MESSAGE_APP_URL
const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export { apiClient };