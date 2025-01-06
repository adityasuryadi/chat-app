export interface SuccessResponse<T> {
    status: string,
    data: T,
    code:number
}

export interface ErrorResponse<T> {
    status: string,
    error: T,
    code:number
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse<T>