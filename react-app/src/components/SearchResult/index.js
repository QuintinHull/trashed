import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { searchAreas } from "../../store/area";

const SearchResult = () => {
  const dispatch = useDispatch();
  // const { city } = useParams();
  //   const location = useLocation();
  const { search } = useLocation();
  const { city } = queryString.parse(search);
  //   console.log(city);
  console.log(city);

  // const searchedAreas = useSelector((state) => state.areas.searched_areas);

  //   useEffect(() => {
  //     dispatch(searchAreas(city));
  //   }, [dispatch, city]);

  // const handleSearch = (searchedAreas) => {
  //   let area_obj = [];
  //   for (let area in searchedAreas) {
  //     area_obj.push(searchAreas[area]);
  //   }
  //   return area_obj.map((area) => (
  //     <div key={area.id}>
  //       <div>{area.id}</div>
  //       <div>{area.address}</div>
  //       <div>{area.description}</div>
  //     </div>
  //   ));
  // };

  return (
    <div>
      <div>----search results----</div>

      <div className="search-results-container">
        {/* {searchedAreas && searchedAreas.length === 0 && <div>no results</div>}
        {handleSearch(searchedAreas)} */}
      </div>
    </div>
  );
};

export default SearchResult;
