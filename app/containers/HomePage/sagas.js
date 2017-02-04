import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './constants';

export function fetchClientsApi() {
  return fetch('/api/clients/')
          .then((res) => res.json());
}

export function* fetchClients() {
  const res = yield call(fetchClientsApi);

  if (!res.error) {
    yield put(actions.receiveClients(res));
  } else {
    yield put(actions.getClientsFail());
  }
}

export function* clientsSaga() {
  yield takeLatest(actions.GET_CLIENTS_START, fetchClients);
}

export default [
  clientsSaga,
];
