import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAreaEvents } from "../../store/event";
import { createEvent } from "../../store/event";
import { getEvents } from "../../store/event";

const EventCreate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [newEvent, setNewEvent] = useState("");

  useEffect(() => {}, [newEvent]);

  useEffect(() => {
    dispatch(getAreaEvents(id));
  }, [dispatch, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newEvent = {
      title,
      date_time: dateTime,
      description,
      areaId: id,
    };

    const addedEvent = dispatch(createEvent(newEvent));
    dispatch(getEvents());
    setNewEvent(addedEvent);
  };

  return (
    <div>
      <div>---- create event for area----</div>
      <form onSubmit={handleSubmit}>
        <label>title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>date/time: </label>
        <input
          type="datetime-local"
          required
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        ></input>
        <label>description: </label>
        <textarea
          type="text"
          required
          maxLength="250"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">create event</button>
      </form>
    </div>
  );
};

export default EventCreate;
