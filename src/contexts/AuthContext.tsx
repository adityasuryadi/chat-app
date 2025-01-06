import { createContext, useContext, useEffect, useState } from "react";
import { LoginResponseData } from "@/types/auth";
import { ApiResponse, ErrorResponse, SuccessResponse } from "@/types/api";
import { login as loginService } from "@/services/serviceAuth";
import { AxiosError } from "axios";
import { handleApiError } from "@/services/apiClient";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<ApiResponse<LoginResponseData | null>>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType|null>(null);

export const AuthProvider : React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
      if (localStorage.getItem("access_token") === null || localStorage.getItem("access_token") === "") {
        setIsAuthenticated(false); 
      }
    }, []);
    const login = async (email: string, password: string):Promise<ApiResponse<LoginResponseData | null>> => {
        try {
            const formData = {
                email,
                password
            }
            const response: ApiResponse<LoginResponseData> = await loginService(formData);
            const responseData = response as SuccessResponse<LoginResponseData>;
            localStorage.setItem("access_token", responseData.data.access_token); 
            localStorage.setItem("refresh_token", responseData.data.refresh_token);
            setIsAuthenticated(true);
            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorResponse = error as AxiosError<ErrorResponse<unknown>>;
                throw handleApiError(errorResponse);
            }
            throw error;
        }
    };

    const logout = () => {
        // Implement logout logic here
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };