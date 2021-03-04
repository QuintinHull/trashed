import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAreas } from "../../store/area";
import { getArea } from "../../store/area";

const HomePageComponent = () => {
  const dispatch = useDispatch();
  const areas = useSelector((state) => state.areas.all_areas);
  const singleArea = useSelector((state) => state.areas["1"]);

  useEffect(() => {
    dispatch(getAreas());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getArea(1));
  }, [dispatch]);

  return (
    <div className="body">
      {areas &&
        Object.values(areas).map((area) => (
          <div>
            <div>{area.id}</div>
            <div>{area.address}</div>
            <div>{area.description}</div>
          </div>
        ))}
      <div> single area </div>
      <div>{singleArea && singleArea.area.address}</div>
    </div>
  );
};

export default HomePageComponent;
