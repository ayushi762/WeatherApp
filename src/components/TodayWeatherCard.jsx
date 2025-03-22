import "../styles/todayWeatherCard.scss";

const TodayWeatherCard = (weatherData) => {
  if (!weatherData)
    return <p className="no-data">No weather data available.</p>;

  return (
    <div className="weather-card">
      <h2>Weather in Your Location</h2>
      <p className="date">{weatherData.data.date}</p>
      <div className="weather-info">
        <img
          src={weatherData.data.icon}
          alt={weatherData.data.weather}
          className="weather-icon"
        />
        <p className="weather-description">{weatherData.data.weather}</p>
      </div>
      <p>
        <strong>Temperature:</strong> {weatherData.data.temperature}°C
      </p>
      <p>
        <strong>Feels Like:</strong> {weatherData.data.feelsLike}°C
      </p>
      <p>
        <strong>Humidity:</strong> {weatherData.data.humidity}%
      </p>
      <p>
        <strong>Wind Speed:</strong> {weatherData.data.windSpeed} m/s
      </p>
      <p>
        <strong>Pressure:</strong> {weatherData.data.pressure} hPa
      </p>
       <h2>{weatherData.data.location}</h2>
    </div>
  );
};

export default TodayWeatherCard;
