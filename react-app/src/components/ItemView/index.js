import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypeItems } from "../../store/item";
import ItemCreate from "../ItemCreate";
import EditItemView from "../EditItemView";
import { useHistory, useParams } from "react-router-dom";

const ItemView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const typeItems = useSelector((state) => state.items.all_type_items);

  useEffect(() => {
    dispatch(getTypeItems(id));
  }, [dispatch, id]);

  return (
    <div className="body">
      {typeItems &&
        Object.values(typeItems).map((item) => (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.description}</div>
          </div>
        ))}
      <div>
        <ItemCreate />
      </div>
      <div>
        <EditItemView />
      </div>
    </div>
  );
};

export default ItemView;
