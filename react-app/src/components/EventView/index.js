import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteEvent, getEvent } from "../../store/event";
// import EditEventView from "../EditEventView";

const EventView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  //   const handleDelete = async () => {
  //     dispatch(deletEvent(id));
  //     history.push(`/`);
  //   };

  return <div>Event View Component</div>;
};

export default EventView;
