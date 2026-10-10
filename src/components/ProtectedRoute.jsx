// import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import axios from "axios";

// const ProtectedRoute = () => {
// const [isAuth, setIsAuth] = useState(null);

// useEffect(() => {
// axios
// .get("https://zerodha-backend-0nbv.onrender.com/checkAuthentication", {
// withCredentials: true,
// headers: {
// "Cache-Control": "no-cache",
// },
// })
// .then(() => setIsAuth(true))
// .catch(() => setIsAuth(false));
// }, []);

// useEffect(() => {
// if (isAuth === false) {
// window.location.href = "https://zerodha-frontend-n9tb.onrender.com/login";
// }
// }, [isAuth]);

// if (isAuth === null || isAuth === false) {
// return <h3>Checking authentication...</h3>;
// }

// return <Outlet />;
// };

// export default ProtectedRoute;
