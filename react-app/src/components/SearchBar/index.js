import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAreas, searchAreas } from "../../store/area";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [city, setCity] = useState("");

  //   useEffect(() => {
  //     dispatch(getAreas());
  //   }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(searchAreas(city));
    return history.push(`/locate?city=${city}`);
    // return history.push(`/search/${city}`);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="search"
          placeholder="search by city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="search__button" onClick={handleSearch}>
          go
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
