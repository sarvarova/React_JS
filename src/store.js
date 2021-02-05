import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { authMiddleware, cardMiddleware } from "./authMiddleware";
import { loadState, saveState } from "./localStorage";

//export const store = createStore(rootReducer, compose(applyMiddleware(authMiddleware, cardMiddleware )));

export const createAppStore = () => {
    const initialState = loadState();
  
    const store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(authMiddleware, cardMiddleware))
    );
  
    store.subscribe(() => {
        saveState(store.getState());
      });
  
    return store;
  };