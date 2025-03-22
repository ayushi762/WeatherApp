import { useState } from "react";
import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import SearchBar from "./SearchBar";
import WeatherChart from "./WeatherChart";
import "../styles/main.scss";
import TodayWeatherCard from "./TodayWeatherCard";
import appLogo from "../assets/appLogo.svg";
import useWeatherQuery from "../hooks/useWeatherQuery";
import useWeatherHistoryQuery from "../hooks/useWeatherHistoryQuery";
import WeatherDetailCard from "./WeatherDetailCard";
import SearchBanner from "./SearchBanner";
import Features from "./Features";

const Home = () => {
  const { location, setLocation } = useContext(WeatherContext);
  const {
    data: weatherData,
    isLoading: loading,
    error,
  } = useWeatherQuery(location);
  const [dateRange, setDateRange] = useState({
    start: "2024-03-01",
    end: "2025-03-01",
  });
  const {
    data: weatherHistoryData,
    isLoading,
    isError,
  } = useWeatherHistoryQuery(location, dateRange);

  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="container">
      <SearchBanner />
      {/* {!location && (
        <div className="empty-state">
          <p>🌤️ Enter a location to check weather trends!</p>
        </div>
      )}
      <SearchBar onSelect={setLocation} /> */}
      {!location ? (
        <Features />
      ) : (
        <div className="weather-section">
          {weatherData && (
            <div className="left-section">
              <TodayWeatherCard data={weatherData} />
            </div>
          )}
          <div className="right-section">
            <div className="tabs">
              <button
                className={activeTab === "details" ? "active" : ""}
                onClick={() => setActiveTab("details")}
              >
                🌡️ Weather Details
              </button>
              <button
                className={activeTab === "chart" ? "active" : ""}
                onClick={() => setActiveTab("chart")}
              >
                📊 Weather Chart
              </button>
            </div>

            <div className="tab-content">
              {activeTab === "chart" && (
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
                    <div className="weather-chart">
                      <WeatherChart data={weatherHistoryData} />
                    </div>
                  )}
                </div>
              )}
              {activeTab === "details" && (
                <div className="detail-chart">
                  <WeatherDetailCard data={weatherData} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
