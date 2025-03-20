import apiClient from "./apiClient";
import { getWeatherApiUrl } from "./apiConfig";

export const fetchWeather = async (lat, lon, timestamp) => {
  try {
    const response = await apiClient.get(getWeatherApiUrl(lat, lon, timestamp));
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
