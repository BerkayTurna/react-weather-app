import { useState } from "react";
import axios from "axios";

function App() {
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid=5180990fb06128e0d6d3176b63f29261
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>New York</p>
          </div>
          <div className="temp">
            <h1>24 &deg;C</h1>
            <div className="description">
              <p>Sunny</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Feels Like</p>
            <p className="bold">24 &deg;C</p>
          </div>
          <div className="humidity">
            <p>Humidity</p>
            <p className="bold">35%</p>
          </div>
          <div className="wind">
            <p>Wind</p>
            <p className="bold">4 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
