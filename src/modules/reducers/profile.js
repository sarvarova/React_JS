import { HANDLE_PROFILE_SUBMIT, ERROR } from "../actions";

const initialState = {
  number: "",
  date: "",
  name: "",
  cvc: "",
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_PROFILE_SUBMIT:
      return action.payload;
    case ERROR:
      return action.payload;
    default:
      return state;
  }
};