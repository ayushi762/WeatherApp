import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  return (
    <WeatherContext.Provider value={{ location, setLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};
