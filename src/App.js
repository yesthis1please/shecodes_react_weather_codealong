import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Application</h1>
        <footer>
          This project was coded by{" "}
          <a href="https://www.instagram.com/bara_annamaria/" target="_blank">
            Annamaria Bara
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yesthis1please/shecodes_react_weather_codealong"
            target="_blank"
          >
            open sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
