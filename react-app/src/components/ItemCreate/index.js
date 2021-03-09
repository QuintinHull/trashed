import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createItem, getItems } from "../../store/item";
import { useParams } from "react-router-dom";

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
    dispatch(getItems());
    setNewItem(addedItem);
  };

  return (
    <div>
      <div>--- create item ---</div>
      <form onSubmit={handleSubmit}>
        <label>name: </label>
        <input
          required
          placeholder="compostable straws"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>description: </label>
        <textarea
          placeholder="tell us about this product..."
          maxLength="250"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default ItemCreate;
