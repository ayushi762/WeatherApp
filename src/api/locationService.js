import apiClient from "./apiClient";
import { getLocationApiUrl } from "./apiConfig";

export const fetchLocationSuggestions = async (query) => {
  try {
    const response = await apiClient.get(getLocationApiUrl(query));
    return response.data.features.map((feature) => ({
      name: feature.place_name,
      lat: feature.geometry.coordinates[1],
      lon: feature.geometry.coordinates[0]
    }));
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
