import React from "react";
import { deleteEvent } from "../../store/event";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./DeleteEventModal.css"

function Delete({singleEvent}) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const area = singleEvent?.area_id;

    const handleDelete = async () => {
    dispatch(deleteEvent(id));
    history.push(`/area/${area}`);
  };

  const handleCancel = async () => {
      window.location.reload()
    //   history.push(`/area/${id}`)
  }

  return (
    <div className="delete_modal_container">
        <div className="delete_title">
            <div>
              Once this event is deleted, it cannot be undone.
            </div>
            <div>
              Are you certain you want to continue?
            </div>
        </div>
        <div className="delete_buttons">
            <button className="delete_cancel_button" onClick={() => handleCancel(id)}>cancel</button>
            <button className="delete_confirm_button" onClick={() => handleDelete(id)}>delete</button>
        </div>
    </div>
  );
}

export default Delete;