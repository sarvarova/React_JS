import React from "react";
import {LoginWithConnect} from "./Login";
//import {RegistrationWithAuth} from "./Registration";
import {Map} from "./Map";
import { ProfileWithConnect } from "./Profile";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>
            <Switch>
              <Route exact path="/" component={LoginWithConnect} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithConnect} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

 App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn })
  )(App);