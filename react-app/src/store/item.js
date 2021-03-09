const LOAD = "item/getAllItems";
const LOAD_ONE = "item/getOneItem";
const LOAD_TYPE_ITEM = "item/getAllTypeItems";
const CREATE_ITEM = "item/createItem";
const UPDATE_ITEM = "item/updateItem";
const DELETE_ITEM = "item/deleteItem";

const getAllItems = (items) => {
  return {
    type: LOAD,
    payload: items,
  };
};

const getOneItem = (item) => {
  return {
    type: LOAD_ONE,
    payload: item,
  };
};

const getAllTypeItems = (items) => {
  return {
    type: LOAD_TYPE_ITEM,
    payload: items,
  };
};

const createNewItem = (item) => {
  return {
    type: CREATE_ITEM,
    payload: item,
  };
};

const updateOneItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: item,
  };
};

const deleteOneItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const getItems = () => async (dispatch) => {
  const response = await fetch("/api/items/");
  const items = await response.json();
  return dispatch(getAllItems(items));
};

export const getItem = (id) => async (dispatch) => {
  const response = await fetch(`/api/items/${id}`);
  const item = await response.json();
  dispatch(getOneItem(item));
  return item;
};

export const getTypeItems = (id) => async (dispatch) => {
  const response = await fetch(`/api/items/type/${id}`);
  const items = await response.json();
  return dispatch(getAllTypeItems(items));
};

export const createItem = ({ name, description, typeId }) => async (
  dispatch
) => {
  const response = await fetch(`/api/items/${typeId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
    }),
  });
  const item = await response.json();
  dispatch(createNewItem(item));
  return item;
};

export const updateItem = (itemObj) => async (dispatch) => {
  const { id, name, description } = itemObj;
  const response = await fetch(`/api/items/${id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
    }),
  });

  const item = await response.json();
  dispatch(updateOneItem(item));
  return item;
};

export const deleteItem = (id) => async (dispatch) => {
  const response = await fetch(`/api/items/delete/${id}`, {
    method: "DELETE",
  });
  dispatch(deleteOneItem(id));
  return response;
};

const initialState = {};

const itemReducer = (state = initialState, action) => {
  let newState;
  let all_items;
  switch (action.type) {
    case LOAD:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    case LOAD_ONE:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    case LOAD_TYPE_ITEM:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    case CREATE_ITEM:
      const new_item = action.payload.item;
      all_items = state.all_items;
      newState = { all_items: { ...all_items, [new_item.id]: new_item } };
      return newState;
    case UPDATE_ITEM:
      const updatedItem = action.payload.item;
      all_items = state.all_items;
      newState = { item: updatedItem };
      return newState;
    case DELETE_ITEM:
      newState = Object.assign({}, state);
      delete newState.item;
      return newState;
    default:
      return state;
  }
};

export default itemReducer;
