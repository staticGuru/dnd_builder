import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log("publicRoutes",auth);
    return (
       auth?.accessToken
                ?<Navigate to="/home" state={{ from: location }} replace />
                : <Outlet />
    );
}

export default PublicAuth;