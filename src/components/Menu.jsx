
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePortfolio } from "./usePortfolio";
import {CircleUser,Mail,X} from "lucide-react";
import axios from "axios";


const Menu = () => {

  const { user } = usePortfolio();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(() => {
    const count = sessionStorage.getItem("count");
    return count === null ? 0 : Number(count);
  });

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    sessionStorage.setItem("count", String(index));
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const signout = async() => {
      let response = await axios.get("http://localhost:3002/signout");

      if(response.data.success){
        window.location.href = "http://localhost:5173/login";
      }
  }

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "32px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick(0)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              onClick={() => handleMenuClick(1)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              onClick={() => handleMenuClick(2)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              onClick={() => handleMenuClick(3)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              onClick={() => handleMenuClick(4)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/apps"
              onClick={() => handleMenuClick(5)}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

        {isProfileDropdownOpen && <Profile user={user} signout={signout} handleProfileClick={handleProfileClick}/>}

      </div>
    </div>
  );
};


const Profile = ({user,signout,handleProfileClick}) => {
  return(
    <div className="outerProfile" onClick={handleProfileClick}>
      <div style={{ display: "flex", justifyContent: "flex-end", width: "40%" }}><X onClick={handleProfileClick}/></div>

      <div className="innerProfile">
        <h1>Your Zerodha Account Details</h1>
          <div className="details">
            <p><CircleUser style={{position:"relative", top:"5px"}}/>  {user.username}</p>
            <p><Mail style={{position:"relative", top:"5px"}}/> {user.email}</p>
          </div>
          <button onClick={signout}>Logout</button>
      </div>
    </div>
  );
}


export default Menu;

