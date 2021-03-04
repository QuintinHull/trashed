import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArea } from "../../store/area";

const AreaView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleArea = useSelector((state) => state.areas.area);

  useEffect(() => {
    dispatch(getArea(id));
  }, [dispatch]);

  return (
    <div>
      <div> ---- single area ---- </div>
      <div>{singleArea && singleArea.latitude}</div>
    </div>
  );
};

export default AreaView;
