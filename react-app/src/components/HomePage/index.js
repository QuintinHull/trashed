import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaCreate from "../AreaCreate";
import { getAreas } from "../../store/area";
import { WrappedGoogleMap } from "../GoogleMap";

import "./HomePage.css";

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
        <div className="home_col1_row1">
          {areas &&
            Object.values(areas).map((area) => (
              <div className="home_event_content" key={area.id}>
                <div>{area.id}</div>
                <div>{area.address}</div>
                <div>{area.description}</div>
              </div>
            ))}
        </div>
        <div className="home_col1_row2">
          <div className="home_item_content">
            <div>item carousel</div>
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
          <AreaCreate />
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
