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
  loadUsersSuccess,
  loadUsersError,
  createUserSuccess,
  createUserError,
  deleteUserSuccess,
  deleteUserError,
  updateUserSuccess,
  updateUserError,
  searchUserSuccess,
  searchUserError,
  filterUserSuccess,
  filterUserError,
  sortUserError,
  sortUserSuccess,
} from "./actions";
import {
  loadUsersApi,
  createUserApi,
  deleteUserApi,
  updateUserApi,
  //New
  searchUserApi,
  filterUserApi,
  sortUserApi,
  //New
} from "./api";

import * as types from "./actionType";

//New - {payload: {start, end, currentPage}} | start, api
export function* onLoadUsersStartAsync({payload: {start, end, currentPage}}) {
  try {
    const response = yield call(loadUsersApi, start, end);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess({users: response.data, currentPage}));
    }
  } catch (error) {
    yield put(loadUsersError(error));
  }
}

function* deleteUser(userId) {
  try {
    const response = yield call(deleteUserApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUserError(error));
  }
}

function* onDeleteUserRequest() {
  while (true) {
    const { payload: id } = yield take(types.DELETE_USER_START);
    yield call(deleteUser, id);
  }
}

function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    console.log("responseCreate", response);
    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error));
  }
}

//New
function* onSearchUserStartAsync({ payload: query }) {
  try {
    const response = yield call(searchUserApi, query);
    if (response.status === 200) {
      yield put(searchUserSuccess(response.data));
    }
  } catch (error) {
    yield put(searchUserError(error));
  }
}

function* onFilterUserStartAsync({ payload: value}) {
  try {
    const response = yield call(filterUserApi, value);
    if (response.status === 200) {
      yield put(filterUserSuccess(response.data));
    }
  } catch (error) {
    yield put(filterUserError(error));
  }
}

function* onSortUserStartAsync({ payload: value}) {
  try {
    const response = yield call(sortUserApi, value);
    if (response.status === 200) {
      yield put(sortUserSuccess(response.data));
    }
  } catch (error) {
    yield put(sortUserError(error));
  }
}

//New End
function* onUpdateUserStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateUserApi, id, formValue);
    if (response.status === 200) {
      yield put(updateUserSuccess(response.data));
    }
  } catch (error) {
    yield put(updateUserError(error));
  }
}

export function* onLoadUsers() {
  yield takeLatest(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

export function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

export function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

//New
export function* onSearchUser() {
  yield takeLatest(types.SEARCH_USER_START, onSearchUserStartAsync);
}

export function* onFilterUser() {
  yield takeLatest(types.FILTER_USER_START, onFilterUserStartAsync);
}

export function* onSortUser() {
  yield takeLatest(types.SORT_USER_START, onSortUserStartAsync);
}
//New End

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUserRequest),
  fork(onUpdateUser),
  //New
  fork(onSearchUser),
  fork(onFilterUser),
  fork(onSortUser)
  //New
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
