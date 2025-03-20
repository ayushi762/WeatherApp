import { useState, useEffect } from "react";
import { fetchWeather } from "../api/weatherService";
import { formatDate } from "../utils/dateFormats";

const useFetchWeather = (location) => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location) return;

    const getWeatherData = async () => {
      setLoading(true);
      try {
        const today = Math.floor(Date.now() / 1000);
        const oneYearAgo = today - 365 * 24 * 60 * 60;
        
        const data = await fetchWeather(location.lat, location.lon, oneYearAgo);
        
        const formattedData = data.hourly.map((hour) => ({
          date: formatDate(hour.dt),
          temperature: hour.temp,
        }));

        setWeatherData(formattedData);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
      setLoading(false);
    };

    getWeatherData();
  }, [location]);

  return { weatherData, loading };
};

// const useFetchWeather = (location) => {
//     return useQuery({
//       queryKey: ["weather", location],
//       queryFn: () => fetchWeather(location.lat, location.lon, Date.now()),
//       enabled: !!location, // Runs only if location is set
//       staleTime: 60000, // Cache data for 1 minute
//     });
//   };

export default useFetchWeather;
