import { takeEvery, call } from "redux-saga/effects";
import { SAVE_PROFILE } from "../actions";
import { serverProfile } from "../api";

export function* saveProfileSaga(action) {
  const { number, date, name, cvc, token } = action.payload;
  try {
    const result = yield call(serverProfile, number, date, name, cvc, token);
    if (result.success) {
      console.log('successful');
    } else {
      throw new Error('Сохранение не удалось')
    }
  } catch (error) {
    console.log('error');
  }
}

export function* profileSaga() {
  yield takeEvery(SAVE_PROFILE, saveProfileSaga);
}
