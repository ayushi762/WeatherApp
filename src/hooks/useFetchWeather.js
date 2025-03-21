import { useState, useEffect } from "react";
import { fetchWeather } from "../api/weatherService";
import { formatDate } from "../utils/dateFormats";


const useFetchWeather = (location) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) return;

    const getWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWeather(location.lat, location.lon);
        
        if (!data || !data.main) {
          throw new Error("Invalid weather data received");
        }

        const formattedData = {
          date: formatDate(data.dt),
          temperature: data.main.temp,
          feelsLike: data.main.feels_like,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          windSpeed: data.wind.speed,
          weather: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        };

        setWeatherData(formattedData);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, [location]);

  return { weatherData, loading, error };
};

export default useFetchWeather;
