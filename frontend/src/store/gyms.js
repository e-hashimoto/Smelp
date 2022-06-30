const LOAD = 'gyms/LOAD';
const ADD_ONE = 'gyms/ADD_ONE';
const LOAD_BRANDS = 'brands/LOAD';


const load = list => ({
    type: LOAD,
    list
});

const addOneGym = gym => ({
    type: ADD_ONE,
    gym
});

const loadBrands = brands => ({
    type: LOAD_BRANDS,
    brands
});

export const createGym = (payload) => async dispatch => {
    const response = await fetch('/api/gyms', {
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

export const getGym = () => async dispatch => {
    const response = await fetch(`/api/gyms`);
    if (response.ok) {
        const list = await response.json();
        dispatch(load(list));
    }
};

export const getBrands = () => async dispatch => {
    const response = await fetch (`api/brands`);
    if (response.ok) {
        const list = await response.json();
        dispatch(loadBrands(list))
    }
}

const initialState = {
    list: [],
};


const gymReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allGyms = {};
            action.list.forEach(gym => {
                allGyms[gym.id] = gym;
            });
            return {
                ...allGyms,
                ...state
            };
        case ADD_ONE:
            if(!state[action.gym.id]) {
                const newState = {
                    ...state,
                    [action.gym.id]: action.gym
                };
                const gymList = newState.list.map(id => newState[id]);
                gymList.push(action.gym);
                newState.list = gymList;
                return newState;
            }
            return {
                ...state,
                [action.gym.id]: {
                    ...state[action.gym.id],
                    ...action.gym
                }
            };
        default:
            return state;
    }
}

export default gymReducer;
