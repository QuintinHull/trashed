import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createItem, getTypeItems } from "../../store/item";
import { useParams } from "react-router-dom";

import "./ItemCreate.css"

const ItemCreate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [newItem, setNewItem] = useState("");

  useEffect(() => {}, [newItem]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newItem = {
      name,
      description,
      typeId: id,
    };

    const addedItem = dispatch(createItem(newItem));
    setNewItem(addedItem);
    dispatch(getTypeItems(id));
  };

  return (
    <div className="item_create_container">
      <form onSubmit={handleSubmit}>
        <div className="item_create_col1">
          <input
            className="item_create_title"
            required
            placeholder="item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="item_create_col2">
          <textarea
            className="item_create_descript"
            placeholder="leave a brief description about this tip..."
            maxLength="250"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="item_create_col3">
          <div className="item_create_button_title">create a tip:</div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default ItemCreate;
