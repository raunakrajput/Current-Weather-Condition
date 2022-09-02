import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

const App = () => {
  const [searchValue, setSearchValue] = useState("Patna");
  const [weatherInfo, setWeatherInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7e23387cc8d187111d7bb10589ff1f55`;
      const res = await fetch(baseUrl);
      const data = await res.json();
      const { name } = data;
      const { temp, humidity, pressure } = data.main;
      const { country, sunset } = data.sys;
      const { main: weathermood } = data.weather[0];

      const { speed } = data.wind;
      const { all } = data.clouds;

      const myWeatherInfo = {
        name,
        country,
        temp,
        weathermood,
        humidity,
        speed,
        all,
        pressure,
        sunset,
      };
      setWeatherInfo(myWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="search">
        <div className="location-container">
          <input
            type="search"
            placeholder="Search...."
            autoFocus
            className="input"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          ></input>
          <button className="location-button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <WeatherCard weatherInfo={weatherInfo} />
    </>
  );
};

export default App;
