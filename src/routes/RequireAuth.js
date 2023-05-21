import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
     console.log("authprovi",auth)
    return (
       auth?.accessToken
                ? <Outlet />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;