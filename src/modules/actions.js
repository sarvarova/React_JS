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

/*export const LOAD_PROFILE = "LOAD_PROFILE";
export const SAVE_PROFILE = "SAVE_PROFILE";*/
export const HANDLE_PROFILE_SUBMIT  = "HANDLE_PROFILE_SUBMIT";
export const ERROR = "ERROR";

export const handleProfileSubmit = (number, date, name, cvc, token) => ({
  type: HANDLE_PROFILE_SUBMIT,
  payload: { number, date, name, cvc, token },
});

/*export const loadProfile = (token) => ({
  type: LOAD_PROFILE,
  payload: token
}) 

export const saveProfile = () => ({
  type: SAVE_PROFILE,
});

*/

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
