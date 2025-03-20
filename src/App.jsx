import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherChart from "./components/WeatherChart";
import useFetchWeather from "./hooks/useFetchWeather";
import "./styles/main.scss";

function App() {
  const [location, setLocation] = useState(null);
  const { weatherData, loading } = useFetchWeather(location);

  return (
    <div className="container">
      <h1>Weather Trends</h1>
      <SearchBar onSelect={setLocation} />
      {loading && <p>Loading...</p>}
      {weatherData.length > 0 && <WeatherChart data={weatherData} />}
    </div>
  );
}

export default App;
