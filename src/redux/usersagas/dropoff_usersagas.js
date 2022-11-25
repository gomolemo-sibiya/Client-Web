import {
    takeLatest,
    put,
    call,
    fork,
    all,
    take,
    delay,
  } from "redux-saga/effects";
  import {
    loadDropOffsSuccess,
    loadDropOffsError,
    createDropOffSuccess,
    createDropOffError,
    deleteDropOffSuccess,
    deleteDropOffError,
    updateDropOffSuccess,
    updateDropOffError,
    searchDropOffSuccess,
    searchDropOffError,
    filterDropOffSuccess,
    filterDropOffError,
    sortDropOffError,
    sortDropOffSuccess,
  } from "../action/dropoff_actions";
  import {
    loadDropOffsApi,
    createDropOffApi,
    deleteDropOffApi,
    updateDropOffApi,
    searchDropOffApi,
    filterDropOffApi,
    sortDropOffApi
  } from "../api";
  
  import * as types from "../actionTypes/dropoff_actionType";
  
  //New - {payload: {start, end, currentPage}} | start, api
  export function* onLoadDropOffsStartAsync({payload: {start, end, currentPage}}) {
    try {
      const response = yield call(loadDropOffsApi, start, end);
      if (response.status === 200) {
        yield delay(500);
        yield put(loadDropOffsSuccess({dropOffs: response.data, currentPage}));
      }
    } catch (error) {
      yield put(loadDropOffsError(error));
    }
  }
  
  function* deleteDropOff(userId) {
    try {
      const response = yield call(deleteDropOffApi, userId);
      if (response.status === 200) {
        yield delay(500);
        yield put(deleteDropOffSuccess(userId));
      }
    } catch (error) {
      yield put(deleteDropOffError(error));
    }
  }
  
  function* onDeleteDropOffRequest() {
    while (true) {
      const { payload: id } = yield take(types.DELETE_DROPOFF_START);
      yield call(deleteDropOff, id);
    }
  }
  
  function* onCreateDropOffStartAsync({ payload }) {
    try {
      const response = yield call(createDropOffApi, payload);
      console.log("responseCreate", response);
      if (response.status === 200) {
        yield put(createDropOffSuccess(response.data));
      }
    } catch (error) {
      yield put(createDropOffError(error));
    }
  }

  function* onSearchDropOffStartAsync({ payload: query }) {
    try {
      const response = yield call(searchDropOffApi, query);
      if (response.status === 200) {
        yield put(searchDropOffSuccess(response.data));
      }
    } catch (error) {
      yield put(searchDropOffError(error));
    }
  }
  
  function* onFilterDropOffStartAsync({ payload: value}) {
    try {
      const response = yield call(filterDropOffApi, value);
      if (response.status === 200) {
        yield put(filterDropOffSuccess(response.data));
      }
    } catch (error) {
      yield put(filterDropOffError(error));
    }
  }
  
  function* onSortDropOffStartAsync({ payload: value}) {
    try {
      const response = yield call(sortDropOffApi, value);
      if (response.status === 200) {
        yield put(sortDropOffSuccess(response.data));
      }
    } catch (error) {
      yield put(sortDropOffError(error));
    }
  }
  
  //New End
  function* onUpdateDropOffStartAsync({ payload: { id, formValue } }) {
    try {
      const response = yield call(updateDropOffApi, id, formValue);
      if (response.status === 200) {
        yield put(updateDropOffSuccess(response.data));
      }
    } catch (error) {
      yield put(updateDropOffError(error));
    }
  }
  
  export function* onLoadDropOffs() {
    yield takeLatest(types.LOAD_DROPOFFS_START, onLoadDropOffsStartAsync);
  }
  
  export function* onCreateDropOff() {
    yield takeLatest(types.CREATE_DROPOFF_START, onCreateDropOffStartAsync);
  }
  
  export function* onUpdateDropOff() {
    yield takeLatest(types.UPDATE_DROPOFF_START, onUpdateDropOffStartAsync);
  }

  export function* onSearchDropOff() {
    yield takeLatest(types.SEARCH_DROPOFF_START, onSearchDropOffStartAsync);
  }
  
  export function* onFilterDropOff() {
    yield takeLatest(types.FILTER_DROPOFF_START, onFilterDropOffStartAsync);
  }
  
  export function* onSortDropOff() {
    yield takeLatest(types.SORT_DROPOFF_START, onSortDropOffStartAsync);
  }
  
  const userSagas = [
    fork(onLoadDropOffs),
    fork(onCreateDropOff),
    fork(onDeleteDropOffRequest),
    fork(onUpdateDropOff),
    fork(onSearchDropOff),
    fork(onFilterDropOff),
    fork(onSortDropOff)
  ];
  
  export default function* dropOffRootSaga() {
    yield all([...userSagas]);
  }
  