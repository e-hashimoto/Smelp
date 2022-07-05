import { csrfFetch } from "./csrf";


const LOAD_BRANDS = 'brands/loadBrands';
const LOAD_BRAND = 'brands/loadBrand'


// Action Creators
const loadBrands = brands => ({
    type: LOAD_BRANDS,
    brands
});

const loadBrand = brand => ({
    type: LOAD_BRAND,
    brand
});

export const getBrands = () => async dispatch => {
    const response = await csrfFetch(`api/brands`);
    if (response.ok) {
        const list = await response.json();
        dispatch(loadBrands(list))
    }
};

export const getBrand = (id) => async dispatch => {
    const response = await csrfFetch(`/api/brands/${id}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadBrand(data));
        return data;
    }
};

// REDUCER
const initialState = {};

const brandReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_BRANDS:
            newState = {...state};
            action.brands.forEach(brand => {
                newState[brand.id] = brand;
            });
            return newState;
        case LOAD_BRAND:
            return { ...state, [action.brand.brand.id]: action.brand.brand};
        default:
            return state;
    };
};

export default brandReducer;
