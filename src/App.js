import React from "react";
import {LoginWithAuth} from "./Login";
//import {RegistrationWithAuth} from "./Registration";
import {Map} from "./Map";
import { withAuth } from "./AuthContext";
import {ProfileWithAuth} from "./Profile";
import PropTypes from 'prop-types';
import './App.css';

const PAGES = {
  login: (props) => <LoginWithAuth {...props} />,
  //registration: (props) => <RegistrationWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
};

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "login" });
    }
  };
  
  render() {
    return (
      <>
        <header>
          <nav>
            <button onClick={() => {this.navigateTo("login")}}>Login</button>
            {/*<button onClick={() => {this.navigateTo("registration")}}>Registration</button>*/}
            <button onClick={() => {this.navigateTo("map")}}>Map</button>  
            <button onClick={() => {this.navigateTo("profile")}}>Profile</button> 
          </nav>
        </header>
        <main>
          <section>
            {PAGES[this.state.currentPage]({navigate: this.navigateTo})}
          </section>
        </main>
      </>
    );
  }
 }

 App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);