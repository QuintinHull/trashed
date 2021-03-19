import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEvent } from "../../store/event";
import { updateEvent } from "../../store/event";
import { useParams } from "react-router-dom";

import "./EditEventView.css"

const EditEventView = ({ singleEvent }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [title, setTitle] = useState(singleEvent?.title);
  const [dateTime, setDateTime] = useState(singleEvent?.dateTime);
  const [description, setDescription] = useState(singleEvent?.description);
  const [updatedEvent, setUpdatedEvent] = useState("");

  useEffect(() => {}, [updatedEvent]);

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventId = await singleEvent.id;
    const updatedEvent = {
      id: eventId,
      title,
      date_time: dateTime,
      description,
    };
    const eventWithChange = dispatch(updateEvent(updatedEvent));
    dispatch(getEvent(eventId));
    setUpdatedEvent(eventWithChange);
  };

  if (!singleEvent) {
    return null;
  }

  return (
    <div className="edit_event_container">
      <form onSubmit={handleSubmit}>
        <div className="event_edit_col1">
          <input
            className="edit_event_title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="event_edit_col2">
          <input
            className="edit_event_date"
            type="datetime-local"
            required
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          ></input>
        </div>
        <div className="event_edit_col3">
          <textarea
            className="edit_event_descript"
            type="text"
            required
            maxLength="250"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="event_edit_col4">
          <div className="edit_event_button_title">edit your event:</div>
          <button className="edit_event_button" type="submit">update</button>
        </div>
      </form>
    </div>
  );
};

export default EditEventView;
