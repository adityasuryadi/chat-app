import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { useAuth } from "@/contexts/AuthContext";
  import { useNavigate, NavLink } from "react-router";
  export function Navbar() {
    const auth = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        auth.logout();
        navigate('/login');
    }
    return (
      <div style={{ position: "fixed", top: 0, width: "100%" }}>
      <Menubar>
        <MenubarMenu>
          <NavLink to="/">
          <MenubarTrigger>Home</MenubarTrigger>
          </NavLink>
          <NavLink to="/chat">
          <MenubarTrigger>Chat</MenubarTrigger>
          </NavLink>
          <MenubarTrigger onClick={logout}>Logout</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      </div>
    )
  }
  