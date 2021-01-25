import React from "react";
import {Login} from "./Login";
import {Registration} from "./Registration";
import {Map} from "./Map";
import {Profile} from "./Profile";
import './App.css';

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }
  render() {
    const PAGES = {
      login: <Login onMapRedirect={() => this.navigateTo("map")} />,
      registration: <Registration onMapRedirect={() => this.navigateTo("map")} />,
      map: <Map />,
      profile: <Profile />
    }

    return (
      <>
        <header>
          <nav>
            <button onClick={() => {this.navigateTo("login")}}>Login</button>
            <button onClick={() => {this.navigateTo("registration")}}>Registration</button>
            <button onClick={() => {this.navigateTo("map")}}>Map</button>  
            <button onClick={() => {this.navigateTo("profile")}}>Profile</button> 
          </nav>
        </header>
        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;