import React from "react";
import {LoginWithConnect} from "./Login";
import {RegistrationWithConnect} from "./Registration";
import Map from "./Map";
import Profile from "./Profile/Profile";
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
              <Route path="/registration" component={RegistrationWithConnect} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </section>
        </main>
      </>
    );
  }
}

export default (App);