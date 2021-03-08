import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [location, setLocation] = useState("");

  const areas = useSelector((state) => state.spots.all_areas);

  const updateLocation = (event) => setLocation(event.target.value);

  useEffect(() => {
    dispatch(getAreas());
  }, [dispatch]);

  const executeSearch = (e) => {
    dispatch(searchAreas(location));
    return history.push(`/locate?city=${location}`);
  };

  return (
    <div>
      <form onSubmit={executeSearch}>
        <label>search for trash</label>
        <input value={location} onChange={updateLocation}></input>
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default SearchBar;
