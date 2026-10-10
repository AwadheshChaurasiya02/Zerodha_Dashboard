import { useContext } from "react";
import { PortfolioContext } from "./PortfolioContext";

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};