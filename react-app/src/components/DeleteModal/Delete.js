import React, { useState } from "react";
import { deleteArea } from "../../store/area";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./DeleteModal.css"

function Delete() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = async () => {
    dispatch(deleteArea(id));
    history.push(`/`);
  };

  const handleCancel = async () => {
      window.location.reload()
    //   history.push(`/area/${id}`)
  }

  return (
    <div className="delete_modal_container">
        <div className="delete_title">
            Once this area is deleted, it cannot be undone. Are you certain you want to continue?
        </div>
        <div className="delete_buttons">
            <button className="delete_cancel_button" onClick={() => handleCancel(id)}>cancel</button>
            <button className="delete_confirm_button" onClick={() => handleDelete(id)}>delete</button>
        </div>
    </div>
  );
}

export default Delete;