import React, { useState, useEffect } from "react";

const WeatherCard = ({ weatherInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    name,
    country,
    temp,
    weathermood,
    humidity,
    speed,
    sunset,
    pressure,
  } = weatherInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("bi bi-cloud");
          break;
        case "Haze":
          setWeatherState("bi bi-haze");
          break;
        case "Mist":
          setWeatherState("bi bi-cloud-fog");
          break;

        default:
          setWeatherState("bi bi-sunny");

          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let d = new Date(sec * 1000);
  let timeStr = `${d.getHours()}:${d.getMinutes()}`;

  return (
    <>
      <div className="container">
        <div className="weather-side">
          <div className="weather-gradient">
            <div className="date-container">
              <div className="date-dayname">
                <h2>
                  {new Date().toLocaleDateString("en", { weekday: "long" })}
                </h2>
                <span className="date-day">
                  {new Date().toLocaleDateString("en", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <span className="location">
                {name} , {country}
              </span>
            </div>
          </div>
          <div className="weather-container">
            <i className={`${weatherState}`}></i>

            <h3 className="weather-desc">{weathermood}</h3>
            <h1 className="weather-temp">{temp} ℃</h1>
          </div>
        </div>
        <div className="info-side">
          <div className="today-info-container"></div>

          <div className="week-container">
            <ul className="weather-list">
              <li>
                <span className="icon">
                  <i className={"bi bi-sunset"}></i>
                </span>

                <span className="info">{timeStr} PM</span>
                <span className="info">Sunset</span>
              </li>
              <li>
                <span className="icon">
                  <i className={"bi bi-water"}></i>
                </span>
                <span className="info">Humidity</span>
                <span className="info">{humidity} %</span>
              </li>
            </ul>
            <ul className="weather-list">
              <li>
                <span className="icon">
                  <i className={"bi bi-speedometer2"}></i>
                </span>
                <span className="info">Presure</span>
                <span className="info">{pressure}</span>
              </li>
              <li>
                <span className="icon">
                  <i className={"bi bi-wind"}></i>
                </span>
                <span className="info">Wind</span>
                <span className="info">{speed} km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
