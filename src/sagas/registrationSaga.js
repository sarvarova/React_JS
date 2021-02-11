import { takeEvery, call, put } from "redux-saga/effects";
import { UNAUTHENTICATE, logIn } from "../actions";
import { serverRegistration } from "../api";

function* unauthenticateSaga(action) {
  const success = yield call(serverRegistration, action.payload);

  if (success) {
    yield put(logIn(success.token));
  } else {
    alert("Пользователь уже существует");
  }
}

export function* registrationSaga() {
  yield takeEvery(UNAUTHENTICATE, unauthenticateSaga);
}