import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAreaEvents } from "../../store/event";

import "./AreaEventView.css";

const AreaEventView = ({ singleArea }) => {
  const dispatch = useDispatch();
  // console.log(singleArea.id);

  const areaEvents = useSelector((state) => state.events.all_area_events);

  useEffect(() => {
    dispatch(getAreaEvents(singleArea?.id));
  }, [dispatch, singleArea.id]);

  return (
    <div>
      {/* <div className="area_events_title">upcoming events</div> */}
      <div className="area_events_content">
        {areaEvents &&
          Object.values(areaEvents).map((event) => (
            <div className="area_events_card" key={event.id}>
              <div className="area_events_card_title">{event.title}</div>
              <div>{event.description}</div>
              <div>
                <span className="area_event_span">event date: </span>
                {event.date_time}
              </div>
              <div>
                <div className="area_event_bottom_row">
                  <div>
                    <span className="area_event_span">reported by: </span>
                    {event.first_name} {event.last_name}
                  </div>
                  <NavLink
                    className="area_event_link"
                    to={`/event/${event.id}`}
                  >
                    details
                  </NavLink>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AreaEventView;
