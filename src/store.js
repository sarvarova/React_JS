import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { authSaga  } from "./sagas/authSaga";
import { registrationSaga } from "./sagas/registrationSaga";
import { profileSaga } from "./sagas/profileSaga";
import {addressesSaga} from './sagas/addressesSaga';
import {routeSaga} from './sagas/routeSaga';
//import { loadState, saveState } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware ));

sagaMiddleware.run(authSaga);
sagaMiddleware.run(registrationSaga);
sagaMiddleware.run(profileSaga);
sagaMiddleware.run(addressesSaga);
sagaMiddleware.run(routeSaga);