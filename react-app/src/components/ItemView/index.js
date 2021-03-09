import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypeItems } from "../../store/item";
import ItemCreate from "../ItemCreate";
import EditItemView from "../EditItemView";
import { NavLink, useParams } from "react-router-dom";

const ItemView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const typeItems = useSelector((state) => state.items.all_type_items);

  useEffect(() => {
    dispatch(getTypeItems(id));
  }, [dispatch, id]);

  return (
    <div className="body">
      {typeItems &&
        Object.values(typeItems).map((item) => (
          <NavLink key={item.id} to={`/item/${item.id}`}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.description}</div>
          </NavLink>
        ))}
      <div>
        <ItemCreate />
      </div>
    </div>
  );
};

export default ItemView;
