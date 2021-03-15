import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { getAreaEvents } from "../../store/event";
import { createEvent } from "../../store/event";

import "./EventCreate.css";

const EventCreate = ({ singleArea }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [newEvent, setNewEvent] = useState("");

  useEffect(() => {}, [newEvent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newEvent = {
      title,
      date_time: dateTime,
      description,
      areaId: id,
    };

    const addedEvent = dispatch(createEvent(newEvent));
    console.log("added event", addedEvent);
    console.log(singleArea);
    setNewEvent(addedEvent);
    // dispatch(getAreaEvents(singleArea?.id));
  };

  return (
    <div className="event_create_container">
      <form onSubmit={handleSubmit}>
        <div className="event_create_col1">
          <input
            className="event_create_input"
            type="text"
            placeholder="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="event_create_col2">
          <input
            className="event_create_input"
            type="datetime-local"
            required
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          ></input>
        </div>
        <div className="event_create_col3">
          <textarea
            className="event_create_textarea"
            type="text"
            placeholder="Leave a brief description of your event!"
            required
            // rows="4"
            // cols="40"
            maxLength="250"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="event_create_col4">
          <button type="submit">create event</button>
        </div>
      </form>
    </div>
  );
};

export default EventCreate;
