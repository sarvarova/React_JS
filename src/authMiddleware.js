import { AUTHENTICATE, logIn, CARD_ADD, cardAdd } from "./actions";
import {serverLogIn, serverCard} from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const success = await serverLogIn(email, password)
    if(success){
      store.dispatch(logIn())
    }
  } else {
    next(action);
  }
};

export const cardMiddleware = (store) => next => async (action) => {
    if (action.type === CARD_ADD) {
        const {number, name, expiry, cvc} = action.payload;
        const success = await serverCard(number, name, expiry, cvc)
        if(success){
            store.dispatch(cardAdd());
        }
    }
    else {
        next(action);
    } 
  };