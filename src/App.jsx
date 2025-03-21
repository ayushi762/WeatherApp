import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherChart from "./components/WeatherChart";
import useFetchWeather from "./hooks/useFetchWeather";
import useFetchWeatherHistory from "./hooks/useFetchWeatherHistory";
import "./styles/main.scss";
import TodayWeatherCard from "./components/TodayWeatherCard";
// import weatherAppLogo from "./assets/weatherAppLogo.png"
import appLogo from "./assets/appLogo.svg";

function App() {
  const [location, setLocation] = useState(null);
  const { weatherData, loading, error } = useFetchWeather(location);
  const [dateRange, setDateRange] = useState({
    start: "2024-03-01",
    end: "2025-03-01",
  });
  const {
    data: weatherHistoryData,
    isLoading,
    isError,
  } = useFetchWeatherHistory(location, dateRange);

  return (
    <div className="container">
      <div className="header">
        <img src={appLogo} alt="App Logo" width={40} height={40} />
        <h1>Weather Trends</h1>
      </div>
      {!location && (
        <div className="empty-state">
          <p>🌤️ Enter a location to check weather trends!</p>
        </div>
      )}
      <SearchBar onSelect={setLocation} />
      {loading && <p>Loading today's weather...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <div className="weather-section">
          {weatherData && (
            // <div className="today-section">
            <TodayWeatherCard data={weatherData} />
            // </div>
          )}
          <div className="chart-section">
            <div className="date-inputs">
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) =>
                  setDateRange({ ...dateRange, start: e.target.value })
                }
              />
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) =>
                  setDateRange({ ...dateRange, end: e.target.value })
                }
              />
            </div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Failed to fetch weather history data.</p>}
            {weatherHistoryData && (
              // <div className="weather-chart">
              <WeatherChart data={weatherHistoryData} />
              //  </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
