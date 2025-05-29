import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCart from "./WeatherCart";

const Temp = () => {
  const [inputData, setInputData] = useState("lahore");
  const [tempInfo, setTempInfo] = useState({});

  const CallData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=6d7b3b7d4ed13f2a7fef0c3745ed1e00`;

      let resPonse = await fetch(url);
      let data = await resPonse.json();
      console.log(data);

      //destructuring.... and get data weather info from data...
      const { temp, pressure, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { country, sunset } = data.sys;
      const { speed } = data.wind;

      //now we create a object to swnd the props for WeatherCart....

      const weatherInfo = {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        country,
        sunset,
        speed,
      };
      setTempInfo(weatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  // page ko refreah kiey bageer 1st time lahore bu default chall jae...
  useEffect(() => {
    CallData();
  }, []);

  return (
    <>
      <div className="sec-1">
        <div className="input">
          <input
            type="text"
            placeholder="Search..."
            className="put"
            id="Input"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button className="btn" type="submit" onClick={CallData}>
            Search
          </button>
        </div>
      </div>

      <WeatherCart nowWeather={tempInfo} />
    </>
  );
};

export default Temp;
