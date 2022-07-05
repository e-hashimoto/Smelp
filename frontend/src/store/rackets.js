import { csrfFetch } from "./csrf";

const LOAD_RACKETS = "rackets/loadRackets";
const LOAD_RACKET = "rackets/loadRacket";
const ADD_RACKET = "rackets/addRacket";
const DELETE_RACKET = "rackets/deleteRacket";

const loadRackets = (rackets) => ({
  type: LOAD_RACKETS,
  rackets,
});

const loadRacket = (racket) => ({
  type: LOAD_RACKET,
  racket,
});

const addRacket = (racket) => ({
  type: ADD_RACKET,
  racket,
});

const deleteRacket = (racket) => ({
  type: DELETE_RACKET,
  payload: racket,
});

export const getRackets = () => async (dispatch) => {
  const response = await csrfFetch(`api/rackets`);
  if (response.ok) {
    const list = await response.json();
    dispatch(loadRackets(list));
  }
};

export const getRacket = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/rackets/${id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(loadRacket(data));
    return data;
  }
};

export const createRacket = (payload) => async (dispatch) => {
  console.log(payload, "---------------What is going in?");
  const { name, brandId, description, userId } = payload;
  const response = await csrfFetch("/api/rackets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const racket = await response.json();
    dispatch(addRacket(racket));
    return racket;
  }
};

export const removeRacket = (id) => async (dispatch) => {
  console.log(id, "We're passing through what????");
  const response = await csrfFetch(`/api/rackets/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
  // dispatch(deleteRacket(id))
//   const deletedRacketId = await response.json();
//   console.log(deletedRacketId, "we're grabbing it");
    console.log('*****************************');
    dispatch(deleteRacket(id));
  }
};

// Reducer

const initialState = {};

const racketReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_RACKETS:
      newState = { ...state };
      action.rackets.forEach((racket) => {
        newState[racket.id] = racket;
      });
      return newState;
    case LOAD_RACKET:
      return { ...state, [action.racket.id]: action.racket };
    case ADD_RACKET:
      return { ...state, [action.racket.id]: action.racket };
    case DELETE_RACKET:
      newState = { ...state };
      delete newState[action.payload];
      // return delete { ...state, [action.payload]: action.id };
      return newState;
    default:
      return state;
  }
};

export default racketReducer;
