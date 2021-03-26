import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteItem, getItem } from "../../store/item";
import DeleteItemModal from "../DeleteItemModal";
import EditItemView from "../EditItemView";

import "./SingleItemView.css"

const SingleItemView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const singleItem = useSelector((state) => state.items.item);

  useEffect(() => {
    dispatch(getItem(id));
  }, [dispatch, id]);

  // const handleDelete = async () => {
  //   dispatch(deleteItem(id));
  //   history.push(`/type/${singleItem?.type_id}`);
  // };

  return (
    <div className="single_item_container">
      <div className="single_item_row1">
        <div className="single_item_name">{singleItem && singleItem.name}</div>
        <div className="single_item_descript">{singleItem && singleItem.description}</div>
      </div>
      <div className="single_item_row2">
        {singleItem && <EditItemView singleItem={singleItem} />}
      </div>
      <div className="single_item_row3">
        <DeleteItemModal />
        {/* <button onClick={() => handleDelete(singleItem.id)}>remove</button> */}
      </div>
    </div>
  );
};

export default SingleItemView;
