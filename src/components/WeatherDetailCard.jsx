import "../styles/todayWeatherCard.scss";

const WeatherDetailCard = (weatherData) => {
  if (!weatherData)
    return <p className="no-data">No weather data available.</p>;
  const details = [
    { label: "Humidity 💧", value: `${weatherData?.data?.humidity}%` },
    { label: "Wind Speed 🌬️", value: `${weatherData?.data?.windSpeed} m/s` },
    { label: "Pressure ⏳", value: `${weatherData?.data?.pressure} hPa` },
    {
      label: "Sunrise 🌅",
      value: new Date(weatherData?.data?.sunrise * 1000).toLocaleTimeString(),
    },
    {
      label: "Sunset 🌇",
      value: new Date(weatherData?.data?.sunset * 1000).toLocaleTimeString(),
    },
    { label: "Weather ☁️", value: weatherData?.data?.weather },
  ];

  return (
    <div className="detail-chart right">
      {details.map((item, index) => (
        <div key={index} className="weather-item">
          <span className="label">{item.label}</span>
          <span className="value">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetailCard;
