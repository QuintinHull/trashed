import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteArea, getArea } from "../../store/area";
import { getAreaEvents } from "../../store/event";
import { currentUser } from "../../store/session";
import EditAreaView from "../EditAreaView";
import EventCreate from "../EventCreate";
import AreaEventView from "../AreaEventView";

const AreaView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const singleArea = useSelector((state) => state.areas.area);
  const areaEvents = useSelector((state) => state.events.all_area_events);
  const creator = useSelector((state) => state.session.user);

  // console.log(singleArea?.id);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    console.log("area view");
    dispatch(getArea(id));
  }, [dispatch, id]);

  const handleDelete = async () => {
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
      {singleArea && <AreaEventView singleArea={singleArea} />}
      {singleArea && <EventCreate singleArea={singleArea} />}
      <div> ---- delete area ---- </div>
      <button onClick={() => handleDelete(singleArea.id)}>cleaned</button>
    </div>
  );
};

export default AreaView;
