const LOAD = "area/getAllTypes";
const LOAD_ONE = "area/getOneType";

const getAllTypes = (types) => {
  return {
    type: LOAD,
    payload: types,
  };
};

const getOneType = (type) => {
  return {
    type: LOAD_ONE,
    payload: type,
  };
};

export const getTypes = () => async (dispatch) => {
  const response = await fetch("/api/types/");
  const types = await response.json();
  return dispatch(getAllTypes(types));
};

export const getType = (id) => async (dispatch) => {
  const response = await fetch(`/api/types/${id}`);
  const type = await response.json();
  dispatch(getOneType(type));
  return type;
};

const initialState = {};

const typeReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    case LOAD_ONE:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    default:
      return state;
  }
};

export default typeReducer;
