import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5180990fb06128e0d6d3176b63f29261`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter an US location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} &deg;C</h1> : null}
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
        </div>
        {data.name ? (
          <div className="bottom">
            <div className="feels">
              <p>Feels Like</p>
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()} &deg;C</p>
              ) : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data.main ? (
                <p className="bold">{data.main.humidity} %</p>
              ) : null}
            </div>
            <div className="wind">
              <p>Wind</p>
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} km/h</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
