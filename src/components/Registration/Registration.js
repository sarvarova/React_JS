import React from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { RegistrationForm } from "./RegistrationForm";

const Registration = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/map" />;
  }
  return (
          <RegistrationForm />
  );
};

export default compose(connect(state => ({ isLoggedIn: state.isLoggedIn })))(
    Registration
);
