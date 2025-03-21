import { useState, useEffect } from "react";
import { fetchHistoricalWeather } from "../api/weatherService";

const useFetchWeatherHistory = (location, dateRange) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (!location || !dateRange.start || !dateRange.end) return;
  
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const weatherData = await fetchHistoricalWeather(
            location.lat,
            location.lon,
            dateRange.start,
            dateRange.end
          );
          setData(weatherData);
        } catch (err) {
          setError(err.message || "Failed to fetch weather data.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [location, dateRange]);
  
    return { data, loading, error };
  };

export default useFetchWeatherHistory;