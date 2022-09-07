import React from "react";
import "./Search.css";

function Search({ search, onSearchChange }) {
  return (
      <nav>
          <input
            className="Search_Input"
            type="text"
            name="search"
            placeholder="Search..."
            autoComplete="off"
            value={search}
            onChange={e => onSearchChange(e.target.value)}
        
      />
    </nav>
  );
}

export default Search;