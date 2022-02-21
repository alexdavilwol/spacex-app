import logo from "./logo.svg";
import "./App.css";
import React from "react";

const API_URL = "https://api.spaceXdata.com/v3/launches?limit=100";

function App() {
//function fetchMissionsHandler() {
  //fetch(API_URL).then;
//}

  return (
    <React.Fragment>
      <h2>Spacex Launch Programs</h2>
      <div>
        <h2>Filters</h2>
        <section>
          <h3>Launch Year</h3>
          <button>year button</button>
        </section>
        <section>
          <h2>Successful Launch</h2>
          <button>true or false button</button>
        </section>
        <section>
          <h2>Successful Landing</h2>
          <button>true or false button</button>
        </section>
      </div>

      <div>Missions</div>
    </React.Fragment>
  );
}

export default App;
