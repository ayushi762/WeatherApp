import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchHistoricalWeather } from "../api/weatherService";

const useWeatherHistoryQuery = (location, dateRange) => {
  return useQuery({
    queryKey: ["weatherHistory", location, dateRange],
    queryFn: async () => {
      const data = await fetchHistoricalWeather(
        location.lat,
        location.lon,
        dateRange.start,
        dateRange.end
      );
      return data;
    },
    enabled: !!location && !!dateRange.start && !!dateRange.end,
    staleTime: 1000 * 60 * 10,
  });
};

export default useWeatherHistoryQuery;
