import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaCreate from "../AreaCreate";
import { getAreas } from "../../store/area";
import { WrappedGoogleMap } from "../GoogleMap";

import TypeView from "../TypeView";
import "./HomePage.css";
import { NavLink } from "react-router-dom";

const HomePageComponent = () => {
  const dispatch = useDispatch();
  const areas = useSelector((state) => state.areas.all_areas);
  const apiKey = process.env.REACT_APP_GOOGLE_KEY;

  useEffect(() => {
    dispatch(getAreas());
  }, [dispatch]);

  return (
    <div className="home_body">
      <div className="home_column_1">
        <div className="home_area_title">trashed areas</div>
        <div className="home_col1_row1">
          {areas &&
            Object.values(areas).map((area) => (
              <div className="home_area_container" key={area.id}>
                <div className="home_area_content">
                  <div className="home_area_content_title">
                    {area.description}
                  </div>
                  <div>
                    <span className="home_area_span">location: </span>
                    {area.address}, {area.city} {area.state} {area.zipcode}
                  </div>
                  <div>
                    <span className="home_area_span">reported by: </span>
                    {area.first_name} {area.last_name}
                  </div>
                  <div className="home_area_bottom_row">
                    <div>
                      <span className="home_area_span">reported on: </span>
                      {area.created_at}
                    </div>
                    <NavLink className="home_area_nav" to={`/area/${area.id}`}>
                      details
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="home_col1_row2">
          <div className="home_item_content">
            <TypeView />
          </div>
        </div>
      </div>
      <div className="home_column_2">
        <div className="home_col2_row1">
          <WrappedGoogleMap
            className="home_map_container"
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
        <div className="home_col2_row2">
          <div className="home_area_create">
            <AreaCreate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
