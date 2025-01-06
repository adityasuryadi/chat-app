/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiClient, handleApiError } from "@/services/apiClient";
import { ApiResponse, SuccessResponse,ErrorResponse } from "@/types/api";
import { LoginRequest, LoginResponseData } from "@/types/auth";
import {  AxiosError } from "axios";

const login = async (loginRequest: LoginRequest):Promise<ApiResponse<LoginResponseData> | ApiResponse<any>> => {
    try {
        const response = await apiClient.post<ApiResponse<LoginResponseData>>("/api/login", loginRequest);
        return {
            status: response.data.status,
            code: response.data.code,
            data: (response.data as SuccessResponse<LoginResponseData>).data,
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error as AxiosError<ErrorResponse<unknown>>;
            throw handleApiError(errorResponse);
        }
        throw error;
    }
};

export { login }