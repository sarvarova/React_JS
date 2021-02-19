import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { authSaga  } from "./sagas/authSaga";
import { registrationSaga } from "./sagas/registrationSaga";
import { profileSaga } from "./sagas/profileSaga";
import {addressesSaga} from './sagas/addressesSaga';
import {routeSaga} from './sagas/routeSaga';
import { loadState, saveState } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();

export const createAppStore = () => {
    const initialState = loadState();
  
    const store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(sagaMiddleware )
      )
    );

    sagaMiddleware.run(authSaga);
    sagaMiddleware.run(registrationSaga);
    sagaMiddleware.run(profileSaga);
    sagaMiddleware.run(addressesSaga);
    sagaMiddleware.run(routeSaga);
  
    store.subscribe(() => {
        saveState(store.getState());
      });
  
    return store;
  };