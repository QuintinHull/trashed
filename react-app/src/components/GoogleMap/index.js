import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, withRouter } from "react-router-dom";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import mapStyles from "./mapStyles";
import { getAreas } from "../../store/area";

import "./GoogleMap.css"

const GoogleMapComponent = () => {
  const areas = useSelector((state) => state.areas.all_areas);
  const dispatch = useDispatch();
  const [selectedArea, setSelectedArea] = useState(null);

  useEffect(() => {
    dispatch(getAreas());
  }, [dispatch]);

  const iconPath = process.env.NODE_ENV === "production" ? "/static" : "";

  return (
    <div>
      <GoogleMap
        defaultZoom={7.6}
        defaultCenter={{ lat: 20.7984, lng: -157.3319 }}
        defaultOptions={{ styles: mapStyles }}
      >
        {areas &&
          Object.values(areas).map((area) => (
            <Marker
              key={area.id}
              position={{ lat: area.latitude, lng: area.longitude }}
              onClick={() => {
                setSelectedArea(area);
              }}
              icon={{
                url: `${iconPath}/simpleLogo.svg`,
                scaledSize: new window.google.maps.Size(35, 35),
              }}
            />
          ))}
        {selectedArea && (
          <InfoWindow
            className="info_window_container"
            position={{ lat: selectedArea.latitude, lng: selectedArea.longitude }}
            onCloseClick={() => {
              setSelectedArea(null);
            }}
          >
            <div className="info_window_body">
              <div className="info_window_col1">
                <img src={`${iconPath}/simpleLogo.svg`}></img>
              </div>
              <div className="info_window_col2">
                <div className="i_w_col2_row1">
                  <div>{selectedArea.address}</div>
                </div>
                <div className="i_w_col2_row2">
                  <div><span>reported on: </span>{selectedArea.created_at}</div>
                </div>
                <div className="i_w_col2_row3">
                  <div><span>reported by: </span>{selectedArea.first_name} {selectedArea.last_name}</div>
                  {/* <Link className="info_window_link" to={`/area/${selectedArea.id}`}>details</Link> */}
                </div>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export const WrappedGoogleMap = withRouter(withScriptjs(withGoogleMap(GoogleMapComponent)));
