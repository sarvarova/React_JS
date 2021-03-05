import React from "react";
//import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { LoginForm } from "./LoginForm";

const Login = () => {
  
  return (     
          <LoginForm />
  );
};

export default compose(connect(state => ({ isLoggedIn: state.isLoggedIn })))(Login);
