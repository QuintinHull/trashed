import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteArea, getArea } from "../../store/area";
// import { getAreaEvents } from "../../store/event";
import { currentUser } from "../../store/session";
import EditAreaView from "../EditAreaView";
import EventCreate from "../EventCreate";
import AreaEventView from "../AreaEventView";

import "./AreaView.css";

const AreaView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const singleArea = useSelector((state) => state.areas.area);
  // const areaEvents = useSelector((state) => state.events.all_area_events);
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
    <div className="area_view_container">
      <div className="area_view_title">
        {singleArea && singleArea.address}, {singleArea && singleArea.city}{" "}
        {singleArea && singleArea.state} {singleArea && singleArea.zipcode}
      </div>
      <div className="area_view_row1">
        <div className="a_v_row1_col1">
          <div>
            <span className="area_view_span">address: </span>
            {singleArea && singleArea.address}
          </div>
          <div>
            <span className="area_view_span">city: </span>
            {singleArea && singleArea.city}
          </div>
          <div>
            <span className="area_view_span">state: </span>
            {singleArea && singleArea.state}
          </div>
          <div>
            <span className="area_view_span">zipcode: </span>
            {singleArea && singleArea.zipcode}
          </div>
          <div>
            <span className="area_view_span">reported by: </span>
            {singleArea && singleArea.first_name}{" "}
            {singleArea && singleArea.last_name}
          </div>
          <div>
            <span className="area_view_span">reported on: </span>
            {singleArea && singleArea.created_at}
          </div>
          <div>
            <span className="area_view_span">description: </span>
            {singleArea && singleArea.description}
          </div>
        </div>
        <div className="a_v_row1_col2">
          <div className="a_v_col2_row1">
            <div className="area_events_title">upcoming events</div>
          </div>
          <div className="a_v_col2_row_2">
            <div className="area_events_scrollable">
              {singleArea && <AreaEventView singleArea={singleArea} />}
            </div>
          </div>
        </div>
      </div>
      <div className="area_view_row2">
        {singleArea && <EventCreate singleArea={singleArea} />}
      </div>
      { creator && creator.id === singleArea.user_id && 
          <div className="area_view_row3">
          {singleArea && <EditAreaView singleArea={singleArea} />}
        </div>
      }
      <div className="area_view_row4">
        {/* <div className="area_delete_button_title">remove this area by marking it clean:</div> */}
        <button className="area_delete_button" onClick={() => handleDelete(singleArea.id)}>CLEANED</button>
      </div>
    </div>
  );
};

export default AreaView;
