import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c7bf51f65e9f2e6e240717c3f7dc5bf8";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
