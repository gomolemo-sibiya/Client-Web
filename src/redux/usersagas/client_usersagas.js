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
    loadClientUsersSuccess,
    loadClientUsersError,
    createClientUserSuccess,
    createClientUserError,
    deleteClientUserSuccess,
    deleteClientUserError,
    updateClientUserSuccess,
    updateClientUserError,
    searchClientUserSuccess,
    searchClientUserError,
    filterClientUserSuccess,
    filterClientUserError,
    sortClientUserError,
    sortClientUserSuccess,
  } from "../action/client_actions";
  import {
    loadClientUsersApi,
    createClientUserApi,
    deleteClientUserApi,
    updateClientUserApi,
    //New
    searchClientUserApi,
    filterClientUserApi,
    sortClientUserApi,
    //New
  } from "../api";
  
  import * as types from "../actionTypes/client_actionType";
  
  //New - {payload: {start, end, currentPage}} | start, api
  export function* onLoadClientUsersStartAsync({payload: {start, end, currentPage}}) {
    try {
      const response = yield call(loadClientUsersApi, start, end);
      if (response.status === 200) {
        yield delay(500);
        yield put(loadClientUsersSuccess({clientUsers: response.data, currentPage}));
      }
    } catch (error) {
      yield put(loadClientUsersError(error));
    }
  }
  
  function* deleteClientUser(userId) {
    try {
      const response = yield call(deleteClientUserApi, userId);
      if (response.status === 200) {
        yield delay(500);
        yield put(deleteClientUserSuccess(userId));
      }
    } catch (error) {
      yield put(deleteClientUserError(error));
    }
  }
  
  function* onDeleteClientUserRequest() {
    while (true) {
      const { payload: id } = yield take(types.DELETE_CLIENT_USER_START);
      yield call(deleteClientUser, id);
    }
  }
  
  function* onCreateClientUserStartAsync({ payload }) {
    try {
      const response = yield call(createClientUserApi, payload);
      console.log("responseCreate", response);
      if (response.status === 200) {
        yield put(createClientUserSuccess(response.data));
      }
    } catch (error) {
      yield put(createClientUserError(error));
    }
  }
  
  //New
  function* onSearchClientUserStartAsync({ payload: query }) {
    try {
      const response = yield call(searchClientUserApi, query);
      if (response.status === 200) {
        yield put(searchClientUserSuccess(response.data));
      }
    } catch (error) {
      yield put(searchClientUserError(error));
    }
  }
  
  function* onFilterClientUserStartAsync({ payload: value}) {
    try {
      const response = yield call(filterClientUserApi, value);
      if (response.status === 200) {
        yield put(filterClientUserSuccess(response.data));
      }
    } catch (error) {
      yield put(filterClientUserError(error));
    }
  }
  
  function* onSortClientUserStartAsync({ payload: value}) {
    try {
      const response = yield call(sortClientUserApi, value);
      if (response.status === 200) {
        yield put(sortClientUserSuccess(response.data));
      }
    } catch (error) {
      yield put(sortClientUserError(error));
    }
  }
  
  //New End
  function* onUpdateClientUserStartAsync({ payload: { id, formValue } }) {
    try {
      const response = yield call(updateClientUserApi, id, formValue);
      if (response.status === 200) {
        yield put(updateClientUserSuccess(response.data));
      }
    } catch (error) {
      yield put(updateClientUserError(error));
    }
  }
  
  export function* onLoadClientUsers() {
    yield takeLatest(types.LOAD_CLIENT_USERS_START, onLoadClientUsersStartAsync);
  }
  
  export function* onCreateClientUser() {
    yield takeLatest(types.CREATE_CLIENT_USER_START, onCreateClientUserStartAsync);
  }
  
  export function* onUpdateClientUser() {
    yield takeLatest(types.UPDATE_CLIENT_USER_START, onUpdateClientUserStartAsync);
  }
  
  //New
  export function* onSearchClientUser() {
    yield takeLatest(types.SEARCH_CLIENT_USER_START, onSearchClientUserStartAsync);
  }
  
  export function* onFilterClientUser() {
    yield takeLatest(types.FILTER_CLIENT_USER_START, onFilterClientUserStartAsync);
  }
  
  export function* onSortClientUser() {
    yield takeLatest(types.SORT_CLIENT_USER_START, onSortClientUserStartAsync);
  }
  //New End
  
  const userSagas = [
    fork(onLoadClientUsers),
    fork(onCreateClientUser),
    fork(onDeleteClientUserRequest),
    fork(onUpdateClientUser),
    //New
    fork(onSearchClientUser),
    fork(onFilterClientUser),
    fork(onSortClientUser)
    //New
  ];
  
  export default function* clientRootSaga() {
    yield all([...userSagas]);
  }
  