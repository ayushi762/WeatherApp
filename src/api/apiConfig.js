export const API_KEY = "048e83fe083b11120e1c48fcb1f70869";
export const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherApiUrl = (lat, lon, timestamp) => 
  `${API_BASE_URL}/weather?lat={lat}&lon={lon}&appid={API key}`;
//   /onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timestamp}&appid=${API_KEY}&units=metric`;

export const getLocationApiUrl = (query) => 
  `${API_BASE_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;

