import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAreaEvents } from "../../store/event";

const AreaEventView = ({ singleArea }) => {
  const dispatch = useDispatch();
  const areaEvents = useSelector((state) => state.events.all_area_events);

  useEffect(() => {
    dispatch(getAreaEvents(singleArea?.id));
  }, [dispatch]);

  return (
    <div>
      <div>---- events for area ----</div>
      {areaEvents &&
        Object.values(areaEvents).map((event) => (
          <div key={event.id}>
            <div>{event.title}</div>
            <div>{event.date_time}</div>
            <div>{event.description}</div>
            <div>----</div>
          </div>
        ))}
    </div>
  );
};

export default AreaEventView;
