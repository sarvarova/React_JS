import {takeEvery, call, put} from 'redux-saga/effects';
import {FETCH_ADDRESSES, getAddresses, showError} from '../actions';
import {serverAddresses} from '../api'

export function* showAddressesSaga() {
    try {
        const res = yield call(serverAddresses);
        if (res.addresses) {
            yield put(getAddresses(res.addresses))
        }
        else {
            throw new Error('Загрузить адреса не удалось. Попробуйте снова')
        }
    } catch (error) {
        yield put(showError(error))                
    }
}

export function* addressesSaga() {
    yield takeEvery(FETCH_ADDRESSES, showAddressesSaga)
}
