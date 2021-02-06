import React, { Component } from "react";
import { cardAdd } from "./actions";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";

export class Profile extends Component {
  cardAdd = (event) => {
    event.preventDefault()
    const { number, expiry, name, cvc } = event.target;
    this.props.cardAdd(number.value, expiry.value, name.value, cvc.value)
  };

  render( ) {
    return (
           <form onSubmit={this.cardAdd}>
            <h1>Profile</h1>
            <div>
              <label htmlFor="number">Номер карты:</label>
              <input id="number" type="number" name="number" size="28" />
              <label htmlFor="name">Имя владельца:</label>
              <input id="name" type="name" name="name" size="28" />
            </div>
            <div>
              <label htmlFor="expiry">Срок действия:</label>
              <input id="expiry" type="expiry" name="expiry" size="28" />
              <label htmlFor="cvc">CVC:</label>
              <input id="cvc" type="cvc" name="cvc" size="28" />
            </div>
            <button type="submit">Сохранить</button>
          </form>
    )
  }
}

export const ProfileWithConnect = connect(
  (state) => ({
    number: state.card.number,
    expiry: state.card.expiry,
    name: state.card.name,
    cvc: state.card.cvc,
  }),
  { cardAdd }
)(Profile);