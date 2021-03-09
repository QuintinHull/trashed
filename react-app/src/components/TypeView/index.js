import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../store/type";
import { NavLink } from "react-router-dom";

const TypeView = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types.all_types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="body">
      {types &&
        Object.values(types).map((type) => (
          <NavLink key={type.id} to={`type/${type.id}`}>
            <div>{type.name}</div>
          </NavLink>
        ))}
    </div>
  );
};

export default TypeView;
