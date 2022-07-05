import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpFormModal />
      </>
    );
  }

  return (
    <div className="header">
      <ul className="buttons">
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/gyms">Gyms</NavLink>
        </div>
        <div>
          <NavLink to="/rackets">Rackets</NavLink>
        </div>
        <div>
          <NavLink to="/brands">Brands</NavLink>
        </div>
        {isLoaded && sessionLinks}
      </ul>
    </div>
  );
}

export default Navigation;
