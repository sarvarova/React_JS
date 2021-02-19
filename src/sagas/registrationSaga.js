import { takeEvery, call, put } from "redux-saga/effects";
import { HANDLESIGN_UP, logIn } from "../actions";
import { serverRegistration } from "../api";

function* handleSignUpSaga(action) {
  const success = yield call(serverRegistration, action.payload);

  if (success) {
    yield put(logIn(success.token));
    console.log('registration successful')
  } else {
    alert("Пользователь уже существует");
  }
}

export function* registrationSaga() {
  yield takeEvery(HANDLESIGN_UP, handleSignUpSaga);
}