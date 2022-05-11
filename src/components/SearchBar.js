import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    setTerm("");
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="Search">Search Video here</label>
          <input
            type="text"
            placeholder="Search Videos"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
