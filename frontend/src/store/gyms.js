import { csrfFetch } from "./csrf";

const GET_GYMS = 'gyms/getAllGyms';
const GET_ONE_GYM = 'gyms/getOneGym';
const ADD_ONE = 'gyms/addOneGym';
const UPDATE_GYM = 'gyms/updateAGym';
const DELETE_GYM = 'gyms/deleteAGym';


// Action creators
const getAllGyms = gyms => ({
    type: GET_GYMS,
    gyms
});

const getOneGym = gym => ({
    type: GET_ONE_GYM,
    gym
});

const addOneGym = gym => ({
    type: ADD_ONE,
    gym
});

const updateAGym = gym => ({
    type: UPDATE_GYM,
    gym
});

const deleteAGym = gym => ({
    type: DELETE_GYM,
    payload: gym
});
// Thunks

export const createGym = (payload) => async dispatch => {
    console.log('                        working')
    const response = await csrfFetch('/api/gyms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    console.log(' Hi ', response);

    if (response.ok) {
        const gym = await response.json();
        dispatch(addOneGym(gym));
        return gym;
    }
};

export const getGyms = () => async dispatch => {
    const response = await csrfFetch(`/api/gyms`);

    if (response.ok) {
        const data = await response.json();
        dispatch(getAllGyms(data));
    }
};

export const getASingleGym = (id) => async dispatch => {
    const response = await csrfFetch(`/api/gyms/${id}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getOneGym(data));
        return data;
    }
};

export const updateGym = (data) => async dispatch => {
    console.log(data, 'Should be getting something!!!');
    const response = await csrfFetch(`/api/gyms/${data.gymId}/edit`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const newGymData = await response.json();
        dispatch(updateAGym(newGymData));
        return newGymData;
    };
};

// Is this not needed to delete?
export const deleteGym = (id) => async dispatch => {
    const response = await csrfFetch(`/api/gyms/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        // const removedGym = await response.json();
        dispatch(deleteAGym(id));
    };
};

// REDUCER
const initialState = {};

const gymReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_GYMS:
            newState = {...state};
            action.gyms.forEach(gym => {
                newState[gym.id] = gym;
            });
            return newState;
        case GET_ONE_GYM:
            return { ...state, [action.gym.gym.id]: action.gym.gym};
        case UPDATE_GYM:
            return {
                ...state, [action.gym.gym.id]: {...action.gym.gym}
            };
        case DELETE_GYM:
            newState = { ...state };
            delete newState[action.payload];
            return newState;
            // return delete { ...state, [action.id]: action.id};
        default:
            return state;
    }
}

export default gymReducer;
