import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/home';
import Rackets from "./components/Rackets/Rackets";
import Gyms from "./components/Gyms/AllGyms";
import Brands from "./components/Brands/index";
import Error from "./components/PageNotFound/index"
import SingleGym from "./components/Gym/index";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/gyms">
            <Gyms />
          </Route>
          <Route path="/gyms/:id">
            <SingleGym />
          </Route>
          <Route path="/rackets">
            <Rackets />
          </Route>
          <Route path="/brands">
            <Brands />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
