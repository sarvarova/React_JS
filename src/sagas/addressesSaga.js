import {takeEvery, call, put} from 'redux-saga/effects';
import {SEND_ADDRESSES, getAddresses, showError} from '../actions';
import {serverAddresses} from '../api'

export function* showAddressesSaga() {
     //const {startingPoint, endingPoint} = action.payload;
    try {
        const res = yield call(serverAddresses);
        if (res.addresses) {
            yield put(getAddresses(res.addresses))
        }
        else {
            throw new Error('Загрузить адреса не удалось. Попробуйте обновить страницу и сделать это снова')
        }
         //const res = yield call(serverAddresses, startingPoint,endingPoint);
    } catch (error) {
        yield put(showError(error))                
    }
}

export function* addressesSaga() {
    yield takeEvery(SEND_ADDRESSES, showAddressesSaga)
}
