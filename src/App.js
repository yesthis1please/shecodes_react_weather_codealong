import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Application</h1>
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/bara_annamaria/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Annamaria Bara
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yesthis1please/shecodes_react_weather_codealong"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
