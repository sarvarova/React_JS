import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Map from "../Map/Map";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Profile from "../Profile/Profile";
import { PrivateRoute } from "./PrivateRoute";
import styles from './App.module.css';
import Header from "../Header/Header";

export class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        {this.props.isLoggedIn && <Header />}
        {this.props.error && <div>{this.props.error}</div>}
        <main className={styles.main}>
          {
            <Switch>
              <Route path="/registration" component={Registration}></Route>
              {!this.props.isLoggedIn && (
                <Route exact path="*" component={Login} />
              )}
              <PrivateRoute path="/map" component={Map}></PrivateRoute>
              <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
              <PrivateRoute path="/" component={Map}></PrivateRoute>
              <Redirect from="*" to="/"></Redirect>
            </Switch>
          }
        </main>
      </div>
    );
  }
}

export default connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.token,
  error: state.auth.error,
}))(App);