import "./mainpage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import ErrorPage from "./errorPage";
import CGroup from "./CGroup";

const Nav = () => {
  return (
    <header>
      <h1>
        <label for="nav-toggle">
          <span>
            <i className="fa-solid fa-bars-staggered"></i>
          </span>
        </label>
        Overview
      </h1>

      <div className="search-sec">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input type="search" placeholder="Join Group..." />
      </div>

      <div className="notif-icon" data-number="4">
        <i className="fa-regular fa-bell"></i>
      </div>

      <div className="user-sec">
        <img src="pic/M logo.jpg" width="35px" height="35px" alt="" />
        <div>
          <h3>Ren</h3>
        </div>
      </div>
    </header>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <a href="" style={{ color: "#dcab18" }}>
          <h1
            style={{
              "font-family":
                "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial, sans-serif'",
            }}
          >
            Aimre
            <span className="logo">
              <div className="logo-1">
                <div className="logo-2">
                  <div className="logo-2 logo-3"></div>
                </div>
              </div>
            </span>
          </h1>
        </a>
      </div>

      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="home.html">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              <span style={{ "font-weight": "550" }}>Home</span>
            </a>
          </li>
          <li>
            <a href="CGroup.html">
              <span>
                <i className="fa-solid fa-circle-plus"></i>
              </span>
              <span style={{ "font-weight": "550" }}>Create Group</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <i className="fa-solid fa-people-group"></i>
              </span>
              <span style={{ "font-weight": "550" }}>My Group</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <i className="fa-solid fa-list-check"></i>
              </span>
              <span style={{ "font-weight": "550" }}>My Task</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <i className="fa-solid fa-scroll"></i>
              </span>
              <span style={{ "font-weight": "550" }}>My Journeys</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <i className="fa-solid fa-user-secret"></i>
              </span>
              <span style={{ "font-weight": "550" }}>Profile</span>
            </a>
          </li>
        </ul>

        <div className="footbar" style={{ "margin-top": "290px" }}>
          <li>
            <a href="">
              <span>
                <i className="fa-solid fa-gears"></i>
              </span>
              <span style={{ "font-weight": "550" }}>Settings</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>
              <span style={{ "font-weight": "550" }}>Log Out</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creategroup" element={<CGroup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainPage;
