import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AreaCreate from "../AreaCreate";
import { getAreas } from "../../store/area";
// import { getArea } from "../../store/area";
import { WrappedGoogleMap } from "../GoogleMap";

const HomePageComponent = () => {
  const dispatch = useDispatch();
  const areas = useSelector((state) => state.areas.all_areas);
  // const singleArea = useSelector((state) => state.areas.area);
  const apiKey = process.env.REACT_APP_GOOGLE_KEY;

  useEffect(() => {
    dispatch(getAreas());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getArea(2));
  // }, [dispatch]);

  return (
    <div className="body">
      {areas &&
        Object.values(areas).map((area) => (
          <div key={area.id}>
            <div>{area.id}</div>
            <div>{area.address}</div>
            <div>{area.description}</div>
          </div>
        ))}
      {/* <div> ---- single area ---- </div> */}
      {/* <div>{singleArea && singleArea.latitude}</div> */}
      <div>
        <AreaCreate />
      </div>
      <div>
        <WrappedGoogleMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "400px" }} />}
        />
      </div>
    </div>
  );
};

export default HomePageComponent;
