import { CARD_ADD } from "../actions";

const initialState = {
  number: "",
  name: "",
  expiry: "",
  cvc: ""
};

export default function (state = initialState, action) {
   switch (action.type) {
     case CARD_ADD: {
       return {
         number: action.payload.number,
         name: action.payload.name,
         expiry: action.payload.expiry,
         cvc: action.payload.cvc
       };
     }
     default:
       return state;
   }
}