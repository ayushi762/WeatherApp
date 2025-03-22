import { useState } from "react";
import { fetchLocationSuggestions } from "../api/locationService";
import "../styles/searchBar.scss";

const SearchBar = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (query.length > 2) {
      const results = await fetchLocationSuggestions(e.target.value);
      setSuggestions(results);
    }
  };

  const handleSelect = (loc) => {
    setQuery(`${loc.name}`);
    setSuggestions([]);
    onSelect(loc);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a location..."
        value={query}
        onChange={handleSearch}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((loc) => (
            <li key={loc.lat} onClick={() => handleSelect(loc)}>
              {loc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
