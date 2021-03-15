import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../store/type";
import { NavLink } from "react-router-dom";

import "./TypeView.css";

const TypeView = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types.all_types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const imagePath = process.env.NODE_ENV === "production" ? "/static" : "";

  return (
    <div className="type_container">
      <div className="type_title">reduce waste at home</div>

      <div className="type_list">
        {types &&
          Object.values(types).map((type) => (
            <NavLink
              className="type_navlink"
              key={type.id}
              to={`type/${type.id}`}
            >
              <img src={`carousel_${type.id}.svg`} alt="category"></img>
              <div className="type_name">{type.name}</div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default TypeView;
