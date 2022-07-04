import { csrfFetch } from "./csrf";

const LOAD_RACKETS = 'rackets/loadRackets';
const LOAD_RACKET = 'rackets/loadRacket';

const loadRackets = rackets => ({
    type: LOAD_RACKETS,
    rackets
});

const loadRacket = racket => ({
    type: LOAD_RACKET,
    racket
});

export const getRackets = () => async dispatch => {
    const response = await csrfFetch(`api/rackets`);
    if (response.ok) {
        const list = await response.json();
        dispatch(loadRackets(list))
    }
};

export const getRacket = (id) => async dispatch => {
    const response = await csrfFetch(`/api/rackets/${id}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadRacket(data));
        return data;
    }
};

// Reducer

const initialState = {};

const racketReducer = (state  = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_RACKETS:
            newState = {...state};
            action.rackets.forEach(racket => {
                newState[racket.id] = racket;
            });
            return newState;
        case LOAD_RACKET:
            return { ...state, [action.racket.racket.id]: action.racket.racket};
        default:
            return state;
    };
};

export default racketReducer;
