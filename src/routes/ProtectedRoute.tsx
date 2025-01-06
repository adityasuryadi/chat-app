import { useAuth } from "@/contexts/AuthContext";
import { Navigate,useLocation } from "react-router";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();
    console.log(auth.isAuthenticated)
    if (localStorage.getItem("refresh_token") === null || localStorage.getItem("refresh_token") === "") {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return <>{children}</>;
};
