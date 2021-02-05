import { AUTHENTICATE, logIn, CARD_ADD, cardAdd } from "./actions";
import {serverLogIn, serverCard} from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    try {
      const success = await serverLogIn(email, password)
      if(success){
        store.dispatch(logIn())
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.log('error');      
    };
  } else {
    next(action);
  }
};

export const cardMiddleware = (store) => next => async (action) => {
    if (action.type === CARD_ADD) {
        const {number, name, expiry, cvc, token} = action.payload;
        try {
          const success = await serverCard(number, name, expiry, cvc, token)
          if(success){
            store.dispatch(cardAdd());
          } else {
            throw new Error('error');
          } 
        } catch (error) {
          console.log('error');      
        };
    } else {
        next(action);
    } 
  };