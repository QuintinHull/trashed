import React from "react";
import { deleteItem } from "../../store/item";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./DeleteItemModal.css"

function Delete({singleItem}) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const item = singleItem?.type_id;

    const handleDelete = async () => {
    dispatch(deleteItem(id));
    history.push(`/type/${item}`);
  };

  const handleCancel = async () => {
      window.location.reload()
    //   history.push(`/area/${id}`)
  }

  return (
    <div className="delete_modal_container">
        <div className="delete_title">
            <div>
              Once this item is deleted, it cannot be undone.
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