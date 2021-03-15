import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchAreas } from "../../store/area";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [city, setCity] = useState("");

  // useEffect(() => {
  //   dispatch(getAreas());
  // }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchAreas(city));
    history.push(`/locate?city=${city}`);
  };

  const imagePath = process.env.NODE_ENV === "production" ? "/static" : "";

  return (
    <div>
      <form className="search_container">
        <input
          type="text"
          className="search_input"
          placeholder=" search by city.."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="search_button" onClick={handleSearch}>
          <img src={`logo_search.svg`} alt="search button"></img>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
