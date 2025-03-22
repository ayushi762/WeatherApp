export const API_KEY = "048e83fe083b11120e1c48fcb1f70869";
export const API_BASE_URL = "https://api.openweathermap.org/data/2.5";
export const MAPBOX_BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";
export const MAPBOX_API_KEY = "pk.eyJ1IjoiY2hhbmRyZXNoMTk5OCIsImEiOiJjbThpa29jMDcwZWphMmtxcmVsMTRwcGx6In0.HJFJTXMpSWv30sxBcPgfPw";
export const OPENMATEO_BASE_URL = "https://archive-api.open-meteo.com/v1";


export const getLocationApiUrl = (query) =>
    `${MAPBOX_BASE_URL}/${encodeURIComponent(query)}.json?access_token=${MAPBOX_API_KEY}&country=IN&limit=5`;


export const getWeatherApiUrl = (lat, lon, timestamp) => 
  `${API_BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

export const getHistoricalWeatherApiUrl =  (lat, lon, start, end) =>
     `${OPENMATEO_BASE_URL}/archive?latitude=${lat}&longitude=${lon}&start_date=${start}&end_date=${end}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
