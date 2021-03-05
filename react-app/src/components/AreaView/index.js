import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteArea, getArea } from "../../store/area";
import EditAreaView from "../EditAreaView";

const AreaView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const singleArea = useSelector((state) => state.areas.area);
  //   console.log(singleArea);
  useEffect(() => {
    dispatch(getArea(id));
  }, [dispatch, id]);

  const handleDelete = async (id) => {
    const areaId = await id;
    dispatch(deleteArea(areaId));
    history.push(`/`);
  };

  return (
    <div>
      <div> ---- single area ---- </div>
      <div>{singleArea && singleArea.address}</div>
      <div>{singleArea && singleArea.city}</div>
      <div>{singleArea && singleArea.state}</div>
      <div>{singleArea && singleArea.zipcode}</div>
      <div>{singleArea && singleArea.description}</div>
      <EditAreaView />
      <div> ---- delete area ---- </div>
      <button onClick={() => handleDelete(singleArea.id)}>remove</button>
    </div>
  );
};

export default AreaView;
