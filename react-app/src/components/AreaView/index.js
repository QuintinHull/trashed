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

  const handleDelete = async () => {
    // const areaId = await id;
    console.log("---id--->", id);
    dispatch(deleteArea(id));
    history.push(`/`);
  };

  return (
    <div>
      <div> ---- area view ---- </div>
      <div>{singleArea && singleArea.address}</div>
      <div>{singleArea && singleArea.city}</div>
      <div>{singleArea && singleArea.state}</div>
      <div>{singleArea && singleArea.zipcode}</div>
      <div>{singleArea && singleArea.description}</div>
      {singleArea && <EditAreaView singleArea={singleArea} />}
      <div> ---- delete area ---- </div>
      <button onClick={() => handleDelete(singleArea.id)}>remove</button>
    </div>
  );
};

export default AreaView;
