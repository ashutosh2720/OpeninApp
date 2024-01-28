import { useState } from "react";
import "../../styles/navbarStyle/navbar.scss";
import { FaRegBell } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import dashboardLogo from "../../../public/image/dashboard-logo.jpg";
import { Navigation } from "./../../navigation/Navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };
  const openDrawer = () => {
    setOpen(true);
  };
  const handleNavigationClick = (index) => {
    if (index === 1) {
      closeDrawer();
    }
  };
  return (
    <div>
      {open && (
        <div id="slider" style={{ left: open ? "0px" : "-35px" }}>
          <div className="slider_logo_base_text_container">
            <img src={dashboardLogo} alt="dashboardLogo" />
            <div>Base</div>
            <IoCloseOutline className="close" onClick={closeDrawer} />
          </div>
          <div className="slider_navigation">
            {Navigation.map((item, index) => {
              return (
                <div
                  key={index}
                  className="slider_icon_title_container"
                  style={{ color: item.title === "Upload" ? "blue" : "" }}
                  onClick={() => handleNavigationClick(index)}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="navbar_container">
        <div id="responsive_navbar">
          <div className="hamburger">
          <RxHamburgerMenu onClick={openDrawer} />
          </div>
          <img src={dashboardLogo} className="dashboardLogo" alt="dashboardLogo" />
          <div>Base</div>
        </div>
        <span className="first_element">Upload CSV</span>
        <div className="icons">
          <FaRegBell />{" "}
          <img
            src="https://avatars.githubusercontent.com/u/109720375?v=4"
            alt="profile"
            className="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
