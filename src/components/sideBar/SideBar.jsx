import "../../styles/sideBarStyle/sideBar.scss";
import { Navigation } from "../../navigation/Navigation";
import dashboardLogo from "../../../public/image/dashboard-logo.jpg";
const SideBar = () => {
  return (
    <div>
      <div className="sidebar_container">
        <div className="logo_base_text_container">
          <img src={dashboardLogo} alt="dashboardLogo" />
          <div>Base</div>
        </div>
        <div className="navigation">
          {Navigation.map((item, index) => {
            return (
              <div
                key={index}
                className="icon_title_container"
                style={{ color: item.title === "Upload" ? "blue" : "" }}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
