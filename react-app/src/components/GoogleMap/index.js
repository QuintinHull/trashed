import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import "../../../public/simpleLogo.svg";

const GoogleMapComponent = () => {
  const areas = useSelector((state) => state.areas.all_areas);
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <GoogleMap
      defaultZoom={7.5}
      defaultCenter={{ lat: 20.7984, lng: -156.3319 }}
      //   defaultOptions={{ styles: mapStyles }}
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
              url: "/simpleLogo.svg",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}
      {selectedArea && (
        <InfoWindow
          position={{ lat: selectedArea.latitude, lng: selectedArea.longitude }}
          onCloseClick={() => {
            setSelectedArea(null);
          }}
        >
          <div>{selectedArea.address}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export const WrappedGoogleMap = withScriptjs(withGoogleMap(GoogleMapComponent));