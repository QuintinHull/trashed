import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import queryString from "query-string";
import { searchAreas } from "../../store/area";

import "./SearchResult.css"

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
      <div className="search_results_card" key={area && area.id}>
        <div className="s_r_card_info">
          <div className="s_r_card_title">{area && area.description}</div>
          <div>
            <span className="search_result_span">location: </span>
            {area && area.address} {area && area.city}, {area && area.state} {area && area.zipcode}
          </div>
          <div>
            <span className="search_result_span">reported by: </span>
            {area && area.first_name} {area && area.last_name}
          </div>
          <div className="s_r_bottom_row">
            <div>
              <span className="search_result_span">reported on: </span>
              {area.created_at}
            </div>
            <NavLink className="search_result_nav" to={`/area/${area.id}`}>
              details
            </NavLink>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="search_results_container">
      <div className="search_results_title">
        {searchedAreas && searchedAreas.length} search results for '{city}'
      </div>
      <div className="search_results_body">
        {searchedAreas && handleSearch(searchedAreas)}
      </div>
    </div>
  );
};

export default SearchResult;
