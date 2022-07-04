import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/getReviews';
const ADD_REVIEW = 'reviews/addReview';
const DELETE_REVIEW = 'reviews/deleteReview';
const BLANK_SLATE = 'reviews/clearReviews';

const getReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
});

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
});

const deleteReview = (id) => ({
    type: DELETE_REVIEW,
    id
});

export const clearReviews = () => {
    return {
        type: BLANK_SLATE,
    };
};

export const loadReviews = (gymId) => async dispatch => {
    const response = await csrfFetch(`/api/gyms/${gymId}/reviews`);
    if (response.ok) {
        const data = await response.json();
        dispatch(getReviews(data));
    };
};

export const addAReview = (reviews) => async (dispatch) => {
    const { gymId, userId, title, rating, description } = reviews;
    const response = await csrfFetch(`/api/gyms/${gymId}/reviews`, {
        method: 'POST',
        body: JSON.stringify({
            gymId,
            userId,
            title,
            rating,
            description
        }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(addReview(data));
        return data;
    }
};

export const deleteAReview = (gymId, id) => async (dispatch) => {
    const response = await csrfFetch(
        `/api/gyms/${gymId}/reviews/${id}`,
        {
            method: 'DELETE',
        }
    );
    if (response.ok) {
        dispatch(deleteReview(id));
    }
};

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_REVIEWS:
            newState = { ...state };
            action.reviews.forEach((review) => {
                newState[review.id] = review;
            });
            return newState;
        case BLANK_SLATE:
            const cleanSlate = {};
            return cleanSlate;
        case ADD_REVIEW:
            return { ...state, [action.review.id]: action.review };
        case DELETE_REVIEW:
            return delete { ...state, [action.id]: action.id };
        default:
            return state;
    }
};

export default reviewsReducer;
