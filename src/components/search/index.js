import React, { useState, useContext } from "react";
import GlobalContext from '../../context/global-context';
import "./search.scss";

const Search = props => {
  const globalContext = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");

  const searchApi = (value) => {
    setSearchTerm(value);
    globalContext.fetchAllItems(value);
  }

  return (
    <div className="search">
      <div className="search__title">Search by</div>
      <div className="search__subtitle">
        Films, Characters, Species, Starships & Planets
      </div>
      <div className="search__input">
        <div className="search__icon" />
        <input
          type="text"
          placeholder="Enter a search term"
          onChange={e => searchApi(e.target.value)}
          value={searchTerm}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Search;
