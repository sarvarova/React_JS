import { takeEvery, call } from "redux-saga/effects";
import { HANDLE_PROFILE_SUBMIT } from "../actions";
import { serverProfile } from "../api";

export function* saveProfileSaga(action) {
  const { number, date, name, cvc, token } = action.payload;
  try {
    const result = yield call(serverProfile, number, date, name, cvc, token);
    if (result.success) {
      console.log('successful');
    } else {
      throw new Error('Cохранение не удалось')
    }
  } catch (error) {
    console.log('error');
    
  }
}

export function* profileSaga() {
  yield takeEvery(HANDLE_PROFILE_SUBMIT, saveProfileSaga)}

