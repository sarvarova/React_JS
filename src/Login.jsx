import React, { Component } from 'react'
import { withAuth } from './AuthContext';
import {PropTypes} from 'prop-types';

export class Login extends Component {
  goToProfile = () => {
    this.props.navigate("profile")
  }

  authenticate = (event) => {
    event.preventDefault()
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value)
  }

  render() {
    return (
      <>
      {
        this.props.isLoggedIn ? (
          <p>
            You are logged in <button onClick={this.goToProfile}>go to profile</button>
          </p>
        ) : (
          <form onSubmit={this.authenticate}>
            <h1>Войти</h1>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" size="28" /><br></br>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" size="28" /><br></br>
            <button type="submit">Log in</button>
          </form>
        )
        }
      </>
    );
  }  
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);