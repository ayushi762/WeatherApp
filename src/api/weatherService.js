import apiClient from "./apiClient";
import { getHistoricalWeatherApiUrl, getWeatherApiUrl } from "./apiConfig";

export const fetchWeather = async (lat, lon, timestamp) => {
  try {
    const response = await apiClient.get(getWeatherApiUrl(lat, lon, timestamp));
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};


export const fetchHistoricalWeather = async (lat, lon, start, end) => {
  try {
    const response = await apiClient.get(getHistoricalWeatherApiUrl(lat,lon,start,end));
    return response.data;
  } catch (error) {
    console.error("Error fetching weather history:", error);
    throw error;
  }
};

