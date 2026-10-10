
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { PortfolioProvider } from "./PortfolioContext";

const Home = () => {
  return (
    <>
      <PortfolioProvider>
          <TopBar />
          <Dashboard />
      </PortfolioProvider>
    </>
  );
};

export default Home;