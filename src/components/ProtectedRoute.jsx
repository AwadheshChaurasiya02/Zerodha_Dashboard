import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const checkAuthentication = async () => {
      try {
        const response = await axios.get(
          "https://zerodha-backend-0nbv.onrender.com/checkAuthentication",
          {
            withCredentials: true,
          }
        );

        if (isMounted) {
          setIsAuth(response.data.isAuthenticated === true);
        }
      } catch (error) {
        console.error(
          "Authentication failed:",
          error.response?.status,
          error.response?.data || error.message
        );

        if (isMounted) {
          setIsAuth(false);
        }
      }
    };

    checkAuthentication();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isAuth === null) {
    return <h3>Checking authentication...</h3>;
  }

  if (isAuth === false) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;