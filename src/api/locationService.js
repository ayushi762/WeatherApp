import apiClient from "./apiClient";
// import { API_KEY } from ".apiConfig";
import { getLocationApiUrl } from "./apiConfig";

export const fetchLocationSuggestions = async (query) => {
  try {
    const response = await apiClient.get(getLocationApiUrl(query));
    return response.data;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
