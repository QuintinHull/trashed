import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypeItems } from "../../store/item";
import ItemCreate from "../ItemCreate";
// import EditItemView from "../EditItemView";
import { NavLink, useParams } from "react-router-dom";

import "./ItemView.css"

const ItemView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const typeItems = useSelector((state) => state.items.all_type_items);
  // const creator = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getTypeItems(id));
  }, [dispatch, id]);

  const imagePath = process.env.NODE_ENV === "production" ? "/static" : "";

  return (
    <div className="item_container">
      <div className="item_row1">
        <div className="item_col1">
          <div className="item_image">
            <img src={`${imagePath}/carousel_${id}.svg`} alt="type image"></img>
          </div>
        </div>
        <div className="item_col2">
          <div className="item_content">
            {typeItems &&
              Object.values(typeItems).map((item) => (
                <div className="item_card" key={item.id}>
                  <div><span className="item_span">item: </span>{item.name}</div>
                  <div><span className="item_span">tip: </span>{item.description}</div>
                  <div className="item_bottom_row">
                    <div>
                      <span className="item_span">author: </span>
                      {item.first_name} {item.last_name}
                    </div>
                    <NavLink className="type_link" key={item.id} to={`/item/${item.id}`}>
                      edit
                    </NavLink>
                  </div>  
                  <hr></hr>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="item_row2">
        <ItemCreate />
      </div>
    </div>
  );
};

export default ItemView;
