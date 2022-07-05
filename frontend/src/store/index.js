import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import gymReducer from "./gyms";
import brandReducer from "./brands";
import reviewsReducer from "./reviews";
import racketReducer from "./rackets";

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  gyms: gymReducer,
  brands: brandReducer,
  reviews: reviewsReducer,
  rackets: racketReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
