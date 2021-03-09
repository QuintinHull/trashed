import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEvent } from "../../store/event";
import { updateEvent } from "../../store/event";
import { useParams } from "react-router-dom";

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
    <div>
      <div>---- edit event ----</div>
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
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default EditEventView;
