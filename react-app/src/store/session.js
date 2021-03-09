const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const currentUser = () => async (dispatch) => {
  const response = await fetch("/api/auth/");

  if (response.ok) {
    const user = await response.json();

    return dispatch(setUser(user));
  }
};

const sessionReducer = (state = { user: null }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SET_USER:
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
