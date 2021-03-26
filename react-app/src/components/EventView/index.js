import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEvent } from "../../store/event";
import DeleteEventModal from "../DeleteEventModal";
import EditEventView from "../EditEventView";

import "./EventView.css"

const EventView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();
  const singleEvent = useSelector((state) => state.events.event);
  // console.log(singleEvent);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  // const handleDelete = async () => {
  //   dispatch(deleteEvent(id));
  //   history.push(`/area/${singleEvent?.area_id}`);
  // };

  return (
    <div className="event_view_container">

      <div className="event_view_title">{singleEvent && singleEvent.title}</div>
      <div className="event_view_row1">
        <div className="event_view_descript">{singleEvent && singleEvent.description}</div>
        <div className="event_view_date">{singleEvent && singleEvent.date_time}</div>

      </div>
      <div className="event_view_row2">
        {singleEvent && <EditEventView singleEvent={singleEvent} />}

      </div>
      <div className="event_view_row3">
        {singleEvent && <DeleteEventModal singleEvent={singleEvent} />}
        {/* <button className="event_delete_button" onClick={() => handleDelete(singleEvent.id)}>remove</button> */}
      </div>
    </div>
  );
};

export default EventView;
