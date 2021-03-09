const LOAD = "event/getAllEvents";
const LOAD_AREA_EVENT = "event/getAllAreaEvents";
const LOAD_ONE = "event/getOneEvent";
const CREATE_EVENT = "event/createEvent";
const UPDATE_EVENT = "event/updateEvent";
const DELETE_EVENT = "event/deleteEvent";

const getAllEvents = (events) => {
  return {
    type: LOAD,
    payload: events,
  };
};

const getOneEvent = (event) => {
  return {
    type: LOAD_ONE,
    payload: event,
  };
};

const getAllAreaEvents = (events) => {
  return {
    type: LOAD_AREA_EVENT,
    payload: events,
  };
};

const createNewEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
};

const updateOneEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  };
};

const deleteOneEvent = (id) => {
  return {
    type: DELETE_EVENT,
    payload: id,
  };
};

export const getEvents = () => async (dispatch) => {
  const response = await fetch("/api/events/");
  const events = await response.json();
  return dispatch(getAllEvents(events));
};

export const getEvent = (id) => async (dispatch) => {
  const response = await fetch(`/api/events/${id}`);
  const event = await response.json();
  dispatch(getOneEvent(event));
  return event;
};

export const getAreaEvents = (id) => async (dispatch) => {
  const response = await fetch(`/api/events/area/${id}`);
  const events = await response.json();
  return dispatch(getAllAreaEvents(events));
};

export const createEvent = ({
  title,
  date_time,
  description,
  areaId,
}) => async (dispatch) => {
  // console.log("title", title);
  // console.log("date_time", typeof date_time);
  // console.log("description", description);
  // console.log("areaId", areaId);
  const response = await fetch(`/api/events/${areaId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      date_time,
      description,
    }),
  });
  const event = await response.json();
  dispatch(createNewEvent(event));
  return event;
};

export const updateEvent = (eventObj) => async (dispatch) => {
  const { id, title, date_time, description } = eventObj;
  const response = await fetch(`/api/events/${id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      date_time,
      description,
    }),
  });

  const event = await response.json();
  dispatch(updateOneEvent(event));
  return event;
};

export const deleteEvent = (id) => async (dispatch) => {
  const response = await fetch(`/api/events/delete/${id}`, {
    method: "DELETE",
  });
  dispatch(deleteOneEvent(id));
  return response;
};

const initialState = {};

const eventReducer = (state = initialState, action) => {
  let newState;
  let all_events;
  switch (action.type) {
    case LOAD:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    case LOAD_ONE:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    case LOAD_AREA_EVENT:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    case CREATE_EVENT:
      const new_event = action.payload.event;
      console.log("--event reducer, action.payload-->", action.payload);
      all_events = state.all_events;
      newState = { all_events: { ...all_events, [new_event.id]: new_event } };
      return newState;
    case UPDATE_EVENT:
      const updatedEvent = action.payload.event;
      all_events = state.all_events;
      newState = { event: updatedEvent };
      return newState;
    case DELETE_EVENT:
      newState = Object.assign({}, state);
      delete newState.event;
      return newState;
    default:
      return state;
  }
};

export default eventReducer;
