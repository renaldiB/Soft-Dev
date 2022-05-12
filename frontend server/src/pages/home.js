const Home = () => {
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

export default Home;
