import { useState } from "react";
import { fetchLocationSuggestions } from "../api/locationService";
import "../styles/searchBar.scss";

const SearchBar = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = async (e) => {
    const value= e.target.value;
    setQuery(value);
      if (typingTimeout) clearTimeout(typingTimeout);

    const timeout = setTimeout(async () => {
      if (value.trim() === "") {
        setSuggestions([]); 
        return;
      }
      const results = await fetchLocationSuggestions(value);
      setSuggestions(results);
    }, 300);

    setTypingTimeout(timeout);
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
        onBlur={() => setTimeout(() => setSuggestions([]), 200)}
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
