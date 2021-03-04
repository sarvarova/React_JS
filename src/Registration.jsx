import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {PropTypes} from 'prop-types';
import { handleSignUp } from "./actions";
import { connect } from "react-redux";

export class Registration extends Component {
  handleSignUp = (event) => {
    event.preventDefault()
    const { email, password, name, surname } = event.target;
    this.props.handleSignUp(
      email.value,
      password.value,
      name.value,
      surname.value)
    }

  render() {
  return (
    <>
      {this.props.isLoggedIn ? (
        <p>
          You are registered. <Link to="/map">Go to map </Link>
        </p>
      ) : (
        <div className="wrapper__registration">
          <div className="container__registration">
            <h1 className="registration__title">Регистрация</h1>

            <div className="reg-login">
              <span className="reg-login__text">
                Уже зарегистрирован?
              </span>
              <Link to="/login">Войти</Link>
            </div>

            <form onSubmit={this.handleSignUp}>
              <div className="registration-email__container">
                <label htmlFor="email">Адрес электронной почты</label><br />
                <input id="email" type="email" name="email" size="28" />
              </div>
              <div className="registration-name__container">
                <label htmlFor="name">Имя</label><br />
                <input type="name" id="name" name="name" size="28" />
              </div>
              <div className="registration-lastname__container">
                <label htmlFor="surname">Фамилия</label><br />
                <input id="surname" type="surname" name="surname" size="28" />
              </div>
              <div className="registration-password__container">
                <label htmlFor="password">Пароль</label>
                <input id="password" type="password" name="password" size="28" />
              </div>
              <button type="submit">Регистрация</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
}

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
  handleSignUp: PropTypes.func,
};

export const RegistrationWithConnect = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { handleSignUp }
)(Registration);