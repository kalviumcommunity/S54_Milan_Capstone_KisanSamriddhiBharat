import { useState } from "react";
import Search from "./weather/search/search";
import CurrentWeather from "./weather/current-weather/current-weather";
import Forecast from "./weather/forecast/forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./weather/api";
import "./App.css";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null); 

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}` 
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}` 
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="container">
    
      {currentWeather && <CurrentWeather data={currentWeather} />} 
      {forecast && <Forecast data={forecast} />}
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default Weather; 
