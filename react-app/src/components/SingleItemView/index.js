import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteItem, getItem } from "../../store/item";
import EditItemView from "../EditItemView";

const SingleItemView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const singleItem = useSelector((state) => state.items.item);

  useEffect(() => {
    dispatch(getItem(id));
  }, [dispatch, id]);

  const handleDelete = async () => {
    dispatch(deleteItem(id));
    history.push(`/type/${singleItem?.type_id}`);
  };

  return (
    <div>
      <div> ---- single item view ---- </div>
      <div>{singleItem && singleItem.name}</div>
      <div>{singleItem && singleItem.description}</div>
      {singleItem && <EditItemView singleItem={singleItem} />}
      <div> ---- delete item ---- </div>
      <button onClick={() => handleDelete(singleItem.id)}>remove</button>
    </div>
  );
};

export default SingleItemView;
