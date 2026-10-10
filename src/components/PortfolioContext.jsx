import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [positions, setPositions] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user,setUser] = useState();

const refreshPortfolio = async () => {
  try {
    const [positionRes, holdingRes, orderRes,userRes] = await Promise.all([
      axios.get("http://localhost:3002/positions",{withCredentials:true}),
      axios.get("http://localhost:3002/holdings",{withCredentials:true}),
      axios.get("http://localhost:3002/orders",{withCredentials:true}),
      axios.get("http://localhost:3002/getuser",{withCredentials:true}),
    ]);

    setPositions(positionRes.data);
    setHoldings(holdingRes.data);
    setOrders(orderRes.data);
    setUser(userRes.data.user);
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    refreshPortfolio();
  },[]);

  return (
    <PortfolioContext.Provider
      value={{
        positions,
        holdings,
        orders,
        user,
        refreshPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
