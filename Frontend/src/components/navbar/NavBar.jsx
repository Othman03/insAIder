import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "../SideBarData";
import "./NavBar.css";
import logo from "../../assets/images/Advaisor.png";
import uiContext from "../../context/UiContext";
import { useContext } from "react";

const NavBar = () => {
  const { sideBar, setSideBar } = useContext(uiContext);

  const showSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div className={`logo-container ${sideBar ? "logo-active" : ""}`}>
          <img className="logo-img" src={logo} />
          <h2>InsAIder</h2>
        </div>
      </div>

      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
