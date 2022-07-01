import { csrfFetch } from "./csrf";

const GET_GYMS = 'gyms/GET_GYMS';
const GET_ONE_GYM = 'gyms/GET_ONE_GYM';
const ADD_ONE = 'gyms/ADD_ONE';
const LOAD_BRANDS = 'brands/LOAD';
const UPDATE_GYM = 'gyms/UPDATE_GYM';
const DELETE_GYM = 'gyms/DELETE_GYM';

// Action creators
const getAllGyms = gyms => ({
    type: GET_GYMS,
    gyms
});

const getOneGym = gym => ({
    type: GET_ONE_GYM,
    gym
})

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
    gym
})

const loadBrands = brands => ({
    type: LOAD_BRANDS,
    brands
});

// Thunks

export const createGym = (payload) => async dispatch => {
    const response = await csrfFetch('/api/gyms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const gym = await response.json();
        dispatch(addOneGym(gym));
        return gym;
    }
};

export const getGyms = () => async dispatch => {
    const response = await csrfFetch(`/api/gyms`);

    console.log(response);
    if (response.ok) {
        const data = await response.json();
        console.log(data, "We should see something")
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

export const updateGym = (id) => async dispatch => {
    const response = await fetch(`/api/gyms/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    });

    if (response.ok) {
        const newGymData = await response.json();
        dispatch(updateAGym(newGymData));
        return newGymData;
    };
};

// Is this not needed to delete?
// export const deleteGym = (id) => async dispatch => {
//     const response = await fetch (`/api/gyms/${id}`)
// }

export const getBrands = () => async dispatch => {
    const response = await csrfFetch(`api/brands`);
    if (response.ok) {
        const list = await response.json();
        dispatch(loadBrands(list))
    }
}


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
            return { ...state, [action.gym.id]: action.gym};
        case UPDATE_GYM:
            return {
                ...state, [action.gym.id]: action.gym
            };
        case DELETE_GYM:
            newState = {...state};
            delete newState[action.gymId];
            return newState;
        default:
            return state;
    }
}

export default gymReducer;
