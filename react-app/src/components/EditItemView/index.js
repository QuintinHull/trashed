import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getItem, updateItem } from "../../store/item";
import { useParams } from "react-router-dom";

const EditItemView = ({ singleItem }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [name, setName] = useState(singleItem?.name);
  const [description, setDescription] = useState(singleItem?.description);
  const [updatedItem, setUpdatedItem] = useState("");

  useEffect(() => {}, [updatedItem]);

  useEffect(() => {
    dispatch(getItem(id));
  }, [dispatch, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const itemId = await singleItem.id;
    const updatedItem = {
      id: itemId,
      name,
      description,
    };
    const itemWithChange = dispatch(updateItem(updatedItem));
    dispatch(getItem(itemId));
    setUpdatedItem(itemWithChange);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>description: </label>
        <textarea
          maxLength="250"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default EditItemView;
