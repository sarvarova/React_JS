// Login
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const logIn = (token) => ({
  type: LOG_IN,
  payload: token,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

// Registration

export const HANDLESIGN_UP = "HANDLESIGN_UP";

export const  handleSignUp = (email, password, name, surname) => ({
  type: HANDLESIGN_UP,
  payload: { email, password, name, surname },
});

// Profile

export const LOAD_PROFILE = "LOAD_PROFILE";
export const SAVE_PROFILE = "SAVE_PROFILE";
export const SAVE_TO_STORE = "SAVE_TO_STORE";
export const ERROR = "ERROR";

export const loadProfile = (token) => ({
  type: LOAD_PROFILE,
  payload: token
}) 

export const saveProfile = (number, date, name, cvc, token) => ({
  type: SAVE_PROFILE,
  payload: { number, date, name, cvc, token },
});

export const saveCardToStore = (number, date, name, cvc, token) => ({
  type: SAVE_TO_STORE,
  payload: { number, date, name, cvc, token },
});

export const showError = (error) => ({
  type: ERROR,
  payload: error
});

// Map

export const SEND_ADDRESSES = "SEND_ADDRESSES";
export const GET_ADDRESSES = "GET_ADDRESSES";

export const getAddresses = (addresses) => ({
  type: GET_ADDRESSES,
  payload: addresses
});

export const sendAddresses = () => ({
  type: SEND_ADDRESSES,
})

export const SEND_ROUTE = "SEND_ROUTE";
export const SAVE_COORDS = "SAVE_COORDS";

export const sendRoute = (address1, address2) => ({
  type: SEND_ROUTE,
  payload: {address1, address2}
})

export const saveCoords = (coords) => ({
  type: SAVE_COORDS,
  payload: coords
})

  
/*export const CARD_ADD = "CARD_ADD";
export const CARD_UPDATE = "CARD_UPDATE";
export const CARD_CLEAR = "CARD_CLEAR";
export const TOKEN = "TOKEN";
export const ERROR = "ERROR";

export const cardAdd = (payload) => ({
  type: CARD_ADD,
  payload,
});

export const cardUpdate = (payload) => ({
  type: CARD_UPDATE,
  payload,
});

export const setToken = (token) => ({
  type: TOKEN,
  payload: token,
});

export const cardClear = () => ({ 
  type: CARD_CLEAR 
});

/*export const CARD_ADD = "CARD_ADD";

export const cardAdd = (number, expiry, name, cvc) => ({
  type: CARD_ADD,
  payload: { number, expiry, name, cvc },
});*/
