import { AUTHENTICATE, logIn } from "../actions";
import { serverLogin } from "../api";
import { takeEvery, call, put } from "redux-saga/effects";

export function* authenticateSaga(action) {
  
  const success = yield call(serverLogin, action.payload);

  if (success) {
    yield put(logIn(success.token));
  } else {
    alert("Неправильный адрес электронной почты или пароль")
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}