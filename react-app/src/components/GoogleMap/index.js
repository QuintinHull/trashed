import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import InfoWindowComponent from "../InfoWindowComponent"
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
        defaultZoom={7.55}
        defaultCenter={{ lat: 20.8999, lng: -157.4700 }}
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
            <InfoWindowComponent selectedArea={selectedArea} />
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export const WrappedGoogleMap = withRouter(withScriptjs(withGoogleMap(GoogleMapComponent)));
