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
    loadCleanerUsersSuccess,
    loadCleanerUsersError,
    createCleanerUserSuccess,
    createCleanerUserError,
    deleteCleanerUserSuccess,
    deleteCleanerUserError,
    updateCleanerUserSuccess,
    updateCleanerUserError,
    searchCleanerUserSuccess,
    searchCleanerUserError,
    filterCleanerUserSuccess,
    filterCleanerUserError,
    sortCleanerUserError,
    sortCleanerUserSuccess,
  } from "../action/cleaner_actions";

  import {
    loadCleanerUsersApi,
    createCleanerUserApi,
    deleteCleanerUserApi,
    updateCleanerUserApi,
    //New
    searchCleanerUserApi,
    filterCleanerUserApi,
    sortCleanerUserApi,
    //New
  } from "../api";
  
  import * as types from "../actionTypes/cleaner_actionType";
  
  //New - {payload: {start, end, currentPage}} | start, api
  export function* onLoadCleanerUsersStartAsync({payload: {start, end, currentPage}}) {
    try {
      const response = yield call(loadCleanerUsersApi, start, end);
      if (response.status === 200) {
        yield delay(500);
        yield put(loadCleanerUsersSuccess({cleanerUsers: response.data, currentPage}));
      }
    } catch (error) {
      yield put(loadCleanerUsersError(error));
    }
  }
  
  function* deleteCleanerUser(userId) {
    try {
      const response = yield call(deleteCleanerUserApi, userId);
      if (response.status === 200) {
        yield delay(500);
        yield put(deleteCleanerUserSuccess(userId));
      }
    } catch (error) {
      yield put(deleteCleanerUserError(error));
    }
  }
  
  function* onDeleteCleanerUserRequest() {
    while (true) {
      const { payload: id } = yield take(types.DELETE_CLEANER_USER_START);
      yield call(deleteCleanerUser, id);
    }
  }
  
  function* onCreateCleanerUserStartAsync({ payload }) {
    try {
      const response = yield call(createCleanerUserApi, payload);
      console.log("responseCreate", response);
      if (response.status === 200) {
        yield put(createCleanerUserSuccess(response.data));
      }
    } catch (error) {
      yield put(createCleanerUserError(error));
    }
  }
  
  //New
  function* onSearchCleanerUserStartAsync({ payload: query }) {
    try {
      const response = yield call(searchCleanerUserApi, query);
      if (response.status === 200) {
        yield put(searchCleanerUserSuccess(response.data));
      }
    } catch (error) {
      yield put(searchCleanerUserError(error));
    }
  }
  
  function* onFilterCleanerUserStartAsync({ payload: value}) {
    try {
      const response = yield call(filterCleanerUserApi, value);
      if (response.status === 200) {
        yield put(filterCleanerUserSuccess(response.data));
      }
    } catch (error) {
      yield put(filterCleanerUserError(error));
    }
  }
  
  function* onSortCleanerUserStartAsync({ payload: value}) {
    try {
      const response = yield call(sortCleanerUserApi, value);
      if (response.status === 200) {
        yield put(sortCleanerUserSuccess(response.data));
      }
    } catch (error) {
      yield put(sortCleanerUserError(error));
    }
  }
  
  //New End
  function* onUpdateCleanerUserStartAsync({ payload: { id, formValue } }) {
    try {
      const response = yield call(updateCleanerUserApi, id, formValue);
      if (response.status === 200) {
        yield put(updateCleanerUserSuccess(response.data));
      }
    } catch (error) {
      yield put(updateCleanerUserError(error));
    }
  }
  
  export function* onLoadCleanerUsers() {
    yield takeLatest(types.LOAD_CLEANER_USERS_START, onLoadCleanerUsersStartAsync);
  }
  
  export function* onCreateCleanerUser() {
    yield takeLatest(types.CREATE_CLEANER_USER_START, onCreateCleanerUserStartAsync);
  }
  
  export function* onUpdateCleanerUser() {
    yield takeLatest(types.UPDATE_CLEANER_USER_START, onUpdateCleanerUserStartAsync);
  }
  
  //New
  export function* onSearchCleanerUser() {
    yield takeLatest(types.SEARCH_CLEANER_USER_START, onSearchCleanerUserStartAsync);
  }
  
  export function* onFilterCleanerUser() {
    yield takeLatest(types.FILTER_CLEANER_USER_START, onFilterCleanerUserStartAsync);
  }
  
  export function* onSortCleanerUser() {
    yield takeLatest(types.SORT_CLEANER_USER_START, onSortCleanerUserStartAsync);
  }
  //New End
  
  const userSagas = [
    fork(onLoadCleanerUsers),
    fork(onCreateCleanerUser),
    fork(onDeleteCleanerUserRequest),
    fork(onUpdateCleanerUser),
    //New
    fork(onSearchCleanerUser),
    fork(onFilterCleanerUser),
    fork(onSortCleanerUser)
    //New
  ];
  
  export default function* cleanerRootSaga() {
    yield all([...userSagas]);
  }
  