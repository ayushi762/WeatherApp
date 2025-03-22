import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api/weatherService";
import WeatherModel from "../models/weatherModel";

const useWeatherQuery = (location) => {
  return useQuery({
    queryKey: ["weather", location],
    queryFn: async () => {
      const data = await fetchWeather(location.lat, location.lon);
      return new WeatherModel(data);
    },
    enabled: !!location,
    staleTime: 1000 * 60 * 10,
  });
};

export default useWeatherQuery;
