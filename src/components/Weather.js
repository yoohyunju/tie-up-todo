import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;

  const onGeoOk = (position) => {
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(lon, lat, url)

    axios.get(url).then(responseData =>{
      const data = responseData.data;
      setWeather({
        id: data.weather[0].id,
        temp: data.main.temp,
        weather: data.weather[0].main,
        location: data.name
      })
    });
  }

  const onGeoError = () => {
    alert("현재 위치를 찾을 수 없습니다.");
  }

  // getCurrentPosition(success, error) : 장치의 현재 위치를 가져옴
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

  return (
    <div>
      <div>온도: {weather.temp} °C</div>
      <div>날씨: {weather.weather}</div>
      <div>위치: {weather.location}</div>
    </div>
  );
}

export default Weather;