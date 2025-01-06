import { ApiResponse } from './api';
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponseData {
    access_token: string;
    refresh_token:string;
}


export type LoginResponse = ApiResponse<LoginResponseData>