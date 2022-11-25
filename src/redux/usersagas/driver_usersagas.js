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
    loadDriverUsersSuccess,
    loadDriverUsersError,
    createDriverUserSuccess,
    createDriverUserError,
    deleteDriverUserSuccess,
    deleteDriverUserError,
    updateDriverUserSuccess,
    updateDriverUserError,
    searchDriverUserSuccess,
    searchDriverUserError,
    filterDriverUserSuccess,
    filterDriverUserError,
    sortDriverUserError,
    sortDriverUserSuccess,
  } from "../action/driver_actions";

  import {
    loadDriverUsersApi,
    createDriverUserApi,
    deleteDriverUserApi,
    updateDriverUserApi,
    searchDriverUserApi,
    filterDriverUserApi,
    sortDriverUserApi,
    //New
  } from "../api";
  
  import * as types from "../actionTypes/driver_actionType";
  
  //New - {payload: {start, end, currentPage}} | start, api
  export function* onLoadDriverUsersStartAsync({payload: {start, end, currentPage}}) {
    try {
      const response = yield call(loadDriverUsersApi, start, end);
      if (response.status === 200) {
        yield delay(500);
        yield put(loadDriverUsersSuccess({driverUsers: response.data, currentPage}));
      }
    } catch (error) {
      yield put(loadDriverUsersError(error));
    }
  }
  
  function* deleteDriverUser(userId) {
    try {
      const response = yield call(deleteDriverUserApi, userId);
      if (response.status === 200) {
        yield delay(500);
        yield put(deleteDriverUserSuccess(userId));
      }
    } catch (error) {
      yield put(deleteDriverUserError(error));
    }
  }
  
  function* onDeleteDriverUserRequest() {
    while (true) {
      const { payload: id } = yield take(types.DELETE_DRIVER_USER_START);
      yield call(deleteDriverUser, id);
    }
  }
  
  function* onCreateDriverUserStartAsync({ payload }) {
    try {
      const response = yield call(createDriverUserApi, payload);
      console.log("responseCreate", response);
      if (response.status === 200) {
        yield put(createDriverUserSuccess(response.data));
      }
    } catch (error) {
      yield put(createDriverUserError(error));
    }
  }
  
  //New
  function* onSearchDriverUserStartAsync({ payload: query }) {
    try {
      const response = yield call(searchDriverUserApi, query);
      if (response.status === 200) {
        yield put(searchDriverUserSuccess(response.data));
      }
    } catch (error) {
      yield put(updateDriverUserError(error));
    }
  }
  
  function* onFilterDriverUserStartAsync({ payload: value}) {
    try {
      const response = yield call(filterDriverUserApi, value);
      if (response.status === 200) {
        yield put(filterDriverUserSuccess(response.data));
      }
    } catch (error) {
      yield put(filterDriverUserError(error));
    }
  }
  
  function* onSortDriverUserStartAsync({ payload: value}) {
    try {
      const response = yield call(sortDriverUserApi, value);
      if (response.status === 200) {
        yield put(sortDriverUserSuccess(response.data));
      }
    } catch (error) {
      yield put(sortDriverUserError(error));
    }
  }
  
  //New End
  function* onUpdateDriverUserStartAsync({ payload: { id, formValue } }) {
    try {
      const response = yield call(updateDriverUserApi, id, formValue);
      if (response.status === 200) {
        yield put(updateDriverUserSuccess(response.data));
      }
    } catch (error) {
      yield put(searchDriverUserError(error));
    }
  }
  
  export function* onLoadDriverUsers() {
    yield takeLatest(types.LOAD_DRIVER_USERS_START, onLoadDriverUsersStartAsync);
  }
  
  export function* onCreateDriverUser() {
    yield takeLatest(types.CREATE_DRIVER_USER_START, onCreateDriverUserStartAsync);
  }
  
  export function* onUpdateDriverUser() {
    yield takeLatest(types.UPDATE_DRIVER_USER_START, onUpdateDriverUserStartAsync);
  }
  
  //New
  export function* onSearchDriverUser() {
    yield takeLatest(types.SEARCH_DRIVER_USER_START, onSearchDriverUserStartAsync);
  }
  
  export function* onFilterDriverUser() {
    yield takeLatest(types.FILTER_DRIVER_USER_START, onFilterDriverUserStartAsync);
  }
  
  export function* onSortDriverUser() {
    yield takeLatest(types.SORT_DRIVER_USER_START, onSortDriverUserStartAsync);
  }
  //New End
  
  const userSagas = [
    fork(onLoadDriverUsers),
    fork(onCreateDriverUser),
    fork(onDeleteDriverUserRequest),
    fork(onUpdateDriverUser),
    fork(onSearchDriverUser),
    fork(onFilterDriverUser),
    fork(onSortDriverUser)
  ];
  
  export default function* driverRootSaga() {
    yield all([...userSagas]);
  }
  