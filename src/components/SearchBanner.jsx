import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import SearchBar from "./SearchBar";
import "../styles/searchBanner.scss";
import backgroundImage from "../assets/sunny.jpeg"; 

const SearchBanner = () => {
  const { location, setLocation } = useContext(WeatherContext);

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <h1>Weather Trends</h1>
        <p>Get real-time weather updates for any location.</p>
        <SearchBar onSelect={setLocation} />
      </div>
    </div>
  );
};

export default SearchBanner;
