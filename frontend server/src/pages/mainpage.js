import "./mainpage.css";

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

const Main = () => {
  return (
    <main className="main-content">
      <div className="cards">
        <div className="card-1" style={{ "background-color": "#dcab18" }}>
          <div>
            <h1>10</h1>
            <span>Groups</span>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-people-group"></i>
            </span>
          </div>
        </div>

        <div
          className="card-1"
          style={{ "background-color": "rgb(84, 48, 120)" }}
        >
          <div>
            <h1>18</h1>
            <span>Tasks</span>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-list-check"></i>
            </span>
          </div>
        </div>

        <div
          className="card-1"
          style={{ "background-color": "rgb(22, 112, 22)" }}
        >
          <div>
            <h1>4</h1>
            <span>Journeys</span>
          </div>
          <div>
            <span>
              <i className="fa-solid fa-scroll"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="list-bot">
        <div className="task">
          <div className="card">
            <div className="card-head">
              <h3>Unfinished Task</h3>
              <div className="card-body">
                <table>
                  <thead>
                    <tr>
                      <td>Group</td>
                      <td>Task</td>
                      <td>Deadlines</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Software Development</td>
                      <td>UI Design</td>
                      <td>30/04/2022</td>
                    </tr>
                    <tr>
                      <td>Mobile Programming</td>
                      <td>Make Mobile App</td>
                      <td>23/05/2022</td>
                    </tr>
                    <tr>
                      <td>Humaniora</td>
                      <td>Make Poster and Paper</td>
                      <td>08/05/2022</td>
                    </tr>
                    <tr>
                      <td>Computer Vision</td>
                      <td>Human Detection System</td>
                      <td>29/05/2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const MainPage = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <Nav />
      <Main />
    </div>
  );
};

export default MainPage;
