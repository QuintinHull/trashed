const LOAD = "area/getAllAreas";
const LOAD_ONE = "area/getOneArea";
const CREATE_AREA = "area/createArea";
const UPDATE_AREA = "area/updateArea";
const DELETE_AREA = "area/deleteArea";

const getAllAreas = (areas) => {
  return {
    type: LOAD,
    payload: areas,
  };
};

const getOneArea = (area) => {
  return {
    type: LOAD_ONE,
    payload: area,
  };
};

const createNewArea = (area) => {
  return {
    type: CREATE_AREA,
    payload: area,
  };
};

const updateOneArea = (area) => {
  return {
    type: UPDATE_AREA,
    payload: area,
  };
};

const deleteArea = (area) => {
  return {
    type: DELETE_AREA,
    payload: area,
  };
};

export const getAreas = () => async (dispatch) => {
  const response = await fetch("/api/areas");
  const areas = await response.json();
  return dispatch(getAllAreas(areas));
};

export const getArea = (id) => async (dispatch) => {
  const response = await fetch(`/api/areas/${id}`);
  const area = await response.json();
  dispatch(getOneArea(area));
  return area;
};

export const createArea = ({
  address,
  city,
  state,
  zipcode,
  description,
  latitude,
  longitude,
}) => async (dispatch) => {
  const response = await fetch("/api/areas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address,
      city,
      state,
      zipcode,
      description,
      latitude,
      longitude,
    }),
  });
  const area = await response.json();
  dispatch(createNewArea(area));
  return area;
};

export const updateArea = (areaObj) => async (dispatch) => {
  const respone = await fetch(`/api/areas/${id}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
};
