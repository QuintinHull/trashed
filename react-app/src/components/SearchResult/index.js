import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { searchAreas } from "../../store/area";

const SearchResult = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { city } = queryString.parse(search);
  const searchedAreas = useSelector((state) => state.areas.searched_areas);

  useEffect(() => {
    dispatch(searchAreas(city));
  }, [dispatch, city]);

  const handleSearch = (searchedAreas) => {
    let area_array = [];
    for (let area in searchedAreas) {
      area_array.push(searchedAreas[area]);
    }
    return area_array.map((area) => (
      <div key={area && area.id}>
        <div>{area && area.id}</div>
        <div>{area && area.address}</div>
        <div>{area && area.description}</div>
      </div>
    ));
  };

  return (
    <div>
      <div>
        ----{searchedAreas && searchedAreas.length} search results for '{city}
        '----
      </div>

      <div className="search-results-container">
        {searchedAreas && searchedAreas.length === 0 && <div>no results</div>}
        {searchedAreas && handleSearch(searchedAreas)}
      </div>
    </div>
  );
};

export default SearchResult;
