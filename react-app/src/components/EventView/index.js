import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteEvent, getEvent } from "../../store/event";
import EditEventView from "../EditEventView";

const EventView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const singleEvent = useSelector((state) => state.events.event);
  console.log(singleEvent);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  const handleDelete = async () => {
    dispatch(deleteEvent(id));
    history.push(`/area/${singleEvent?.area_id}`);
  };

  return (
    <div>
      <div> ---- single event view ---- </div>
      <div>{singleEvent && singleEvent.title}</div>
      <div>{singleEvent && singleEvent.date_time}</div>
      <div>{singleEvent && singleEvent.description}</div>
      {singleEvent && <EditEventView singleEvent={singleEvent} />}
      <div> ---- delete event ---- </div>
      <button onClick={() => handleDelete(singleEvent.id)}>remove</button>
    </div>
  );
};

export default EventView;
