import { ApiResponse } from './api';
export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    fullname: string;
    password: string;
    password_confirmation: string;
}

export interface LoginResponseData {
    access_token: string;
    refresh_token:string;
}

export type LoginResponse = ApiResponse<LoginResponseData>