class WeatherModel {
  constructor(data) {
    this.date = new Date(data?.dt * 1000).toLocaleDateString();
    this.location = data?.name;
    this.temperature = data?.main?.temp;
    this.feelsLike = data?.main?.feels_like;
    this.humidity = data?.main.humidity;
    this.pressure = data?.main?.pressure;
    this.windSpeed = data?.wind?.speed;
    this.sunrise = data?.sys?.sunrise;
    this.sunset = data?.sys?.sunset;
    this.weather = data?.weather[0]?.main;
    this.groundLevel = data?.main?.grnd_level;
    this.seaLevel = data?.main?.sea_level;
    this.icon = `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`;
  }
}

export default WeatherModel;
