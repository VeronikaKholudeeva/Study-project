import React, { useEffect, useState, componentDidMount } from "react";
const Weather = () => {
  const [weather, setWeather] = useState({});
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;
    const lat = crd.latitude;
    const lon = crd.longitude;
    // const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=ru&units=metric&APPID=5cff9596ce70a3fecd6b7ad432f06480`;
    // fetch(weatherURL)
    //   .then((res) => res.json())
    //   .then((data) => setWeather(data.list));
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  return <div className="weather"></div>;
};

export default Weather;
