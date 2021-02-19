import React, { Component } from 'react'
import { authenticate } from "./actions";
import {PropTypes} from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Login extends Component {
  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value)
  }

  render() {
    return (
      <>
      {
        this.props.isLoggedIn ? (
        <p>
        You are logged in. <Link to="/profile">Go to profile </Link>
      </p>
        ) : (

          <div className="wrapper__login">
            <div className="container__login">
              <h2 className="login__title">Войти</h2>

                <div className="login-reg">
                  <span className="login-reg__text">Новый пользователь?</span>
                  <Link to="/registration">Зарегистрируйтесь</Link>
                </div>

                <form onSubmit={this.authenticate}>
                  <label htmlFor="email">Email:</label>
                  <input id="email" type="email" name="email" size="28" />
                  <label htmlFor="password">Password:</label>
                  <input id="password" type="password" name="password" size="28" />
                  <button type="submit">Log in</button>
                </form>
            </div>
          </div>
        )
        }
      </>
    );
  }  
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  authenticate: PropTypes.func,
};

export const LoginWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Login);