import React, { useEffect, useState } from "react";

const WeatherCart = ({ nowWeather }) => {
  //weather ke icon ko chnage karne k lie ..
  const [waetherIcon, setWeatherIcon] = useState("");
  //props ko recive karne k lie..
  const {
    temp,
    pressure,
    humidity,
    weathermood,
    name,
    country,
    sunset,
    speed,
  } = nowWeather;

  //converting sunset that is given in second then convert into hours and mint..
  let time = sunset;
  let date = new Date(time * 1000);
  let newTime = `${date.getHours()}:${date.getMinutes()}`;

  // now we work on change weather icon..
  // inwhich required a UseState...
  // jb bi weathermood ki value change ho then.. is lie useeffect use karen gen
  useEffect(() => {
    switch (weathermood) {
      case "Clouds":
        setWeatherIcon("wi-day-cloudy");
        break;
      case "Haze":
        setWeatherIcon("wi-fog");
        break;
      case "Clear":
        setWeatherIcon("wi-day-sunny");
        break;
      case "Mist":
        setWeatherIcon("wi-dust");
        break;

      default:
        setWeatherIcon("wi-day-sunny");
        break;
    }
  }, [weathermood]);
  return (
    <>
      <div className="outer-box">
        <div className="inner-box">
          <div className="uper-flor">
            <i className={`wi ${waetherIcon}`}></i>
          </div>

          <div className="disply-felx">
            <div className="left-portion">
              <div className="tem">
                <h1>{`${temp}°`}</h1>
              </div>
              <div className="content">
                <h3>{weathermood}</h3>
                <p>
                  {name}, {country}
                </p>
              </div>
            </div>

            <div className="rigth-portion">
              <div className="date-time">
                <h1>{new Date().toLocaleDateString()}</h1>
                <h1>{new Date().toLocaleTimeString()}</h1>
              </div>
            </div>
          </div>

          <div className="lowe-flor">
            <div className="row">
              <div className="col">
                <i className="wi wi-sunset"></i>
                <div className="pra">
                  <p>{newTime}</p>
                  <p>Sunset</p>
                </div>
              </div>

              <div className="col">
                <i className="wi wi-humidity"></i>
                <div className="pra">
                  <p>{humidity}</p>
                  <p>Humidity</p>
                </div>
              </div>

              <div className="col">
                <i className="wi wi-rain"></i>
                <div className="pra">
                  <p>{pressure}</p>
                  <p>Pressure</p>
                </div>
              </div>

              <div className="col">
                <i className="wi wi-strong-wind"></i>
                <div className="pra">
                  <p>{speed}</p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCart;
