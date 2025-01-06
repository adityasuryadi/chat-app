import axios, { AxiosError, AxiosResponse } from "axios";
import {ErrorResponse } from '@/types/api';
const baseUrl = import.meta.env.VITE_MESSAGE_APP_URL
const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

const handleApiError = (error: AxiosError): ErrorResponse<unknown> => {
  const response = error.response as AxiosResponse<ErrorResponse<unknown>>;
    if (response?.data) {
      return {
        status: response?.data.status,
        code: response?.data.code,
        error: response?.data.error,
      }
    }
    return {
        status: "Internal Server Error",
        code: 500,
        error: {
            status: "Internal Server Error",
            code: 500,
            errors:error
        },
    };
  };

export { apiClient,handleApiError };