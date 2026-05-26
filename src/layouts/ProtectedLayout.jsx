import { Navigate } from "react-router";
import CreateEvent from "../pages/CreateEvent";

export default function ProtectedLayout() {
   const isAuthenticated = !!localStorage.getItem("eventLoginToken")
    
  return isAuthenticated ? <CreateEvent /> : <Navigate to="/signin" />;
}