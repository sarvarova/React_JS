import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { authMiddleware, cardMiddleware  } from "./authMiddleware";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, cardMiddleware ));