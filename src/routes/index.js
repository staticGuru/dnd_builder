import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PublicRoutes from "./publicRoutes";


function AppRouter() {
  const { setAuth } = useAuth();
  useEffect(() => {
    var data= localStorage.getItem("user");
    if(data){
      setAuth(JSON.parse(data));
    }
  }, [])
  return (
    <Router>
      <PublicRoutes/>
    </Router>
  );
}

export default AppRouter;
