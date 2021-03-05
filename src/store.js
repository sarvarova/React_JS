import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./modules/reducers";
import createSagaMiddleware from "redux-saga";
import { authSaga  } from "./modules/sagas/authSaga";
import { registrationSaga } from "./modules/sagas/registrationSaga";
import { profileSaga } from "./modules/sagas/profileSaga";
import {addressesSaga} from './modules/sagas/addressesSaga';
import {routeSaga} from './modules/sagas/routeSaga';
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