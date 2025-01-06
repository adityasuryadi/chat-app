import { Route, Routes } from "react-router"
import ChatApp from "@/pages/ChatPage"
import Home from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import { ProtectedRoute } from "@/routes/ProtectedRoute"
import { AuthProvider } from "@/contexts/AuthContext"

const AppRoutes = () => {
    return (
        <AuthProvider>
        <Routes>
            <Route path="/chat" element={<ProtectedRoute><ChatApp /></ProtectedRoute>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
        </Routes>
        </AuthProvider>
    )
}


export default AppRoutes