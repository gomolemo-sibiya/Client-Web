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
  loadAdminUsersSuccess,
  loadAdminUsersError,
  createAdminUserSuccess,
  createAdminUserError,
  deleteAdminUserSuccess,
  deleteAdminUserError,
  updateAdminUserSuccess,
  updateAdminUserError,
  searchAdminUserSuccess,
  searchAdminUserError,
  filterAdminUserSuccess,
  filterAdminUserError,
  sortAdminUserError,
  sortAdminUserSuccess,
} from "../action/admin_actions";
import {
  loadAdminUsersApi,
  createAdminUserApi,
  deleteAdminUserApi,
  updateAdminUserApi,
  //New
  searchAdminUserApi,
  filterAdminUserApi,
  sortAdminUserApi,
  //New
} from "../api";

import * as types from "../actionTypes/admin_actionType";

//New - {payload: {start, end, currentPage}} | start, api
export function* onLoadAdminUsersStartAsync({payload: {start, end, currentPage}}) {
  try {
    const response = yield call(loadAdminUsersApi, start, end);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadAdminUsersSuccess({adminUsers: response.data, currentPage}));
    }
  } catch (error) {
    yield put(loadAdminUsersError(error));
  }
}

function* deleteAdminUser(userId) {
  try {
    const response = yield call(deleteAdminUserApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteAdminUserSuccess(userId));
    }
  } catch (error) {
    yield put(deleteAdminUserError(error));
  }
}

function* onDeleteAdminUserRequest() {
  while (true) {
    const { payload: id } = yield take(types.DELETE_ADMIN_USER_START);
    yield call(deleteAdminUser, id);
  }
}

function* onCreateAdminUserStartAsync({ payload }) {
  try {
    const response = yield call(createAdminUserApi, payload);
    console.log("responseCreate", response);
    if (response.status === 200) {
      yield put(createAdminUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createAdminUserError(error));
  }
}

//New
function* onSearchAdminUserStartAsync({ payload: query }) {
  try {
    const response = yield call(searchAdminUserApi, query);
    if (response.status === 200) {
      yield put(searchAdminUserSuccess(response.data));
    }
  } catch (error) {
    yield put(searchAdminUserError(error));
  }
}

function* onFilterAdminUserStartAsync({ payload: value}) {
  try {
    const response = yield call(filterAdminUserApi, value);
    if (response.status === 200) {
      yield put(filterAdminUserSuccess(response.data));
    }
  } catch (error) {
    yield put(filterAdminUserError(error));
  }
}

function* onSortAdminUserStartAsync({ payload: value}) {
  try {
    const response = yield call(sortAdminUserApi, value);
    if (response.status === 200) {
      yield put(sortAdminUserSuccess(response.data));
    }
  } catch (error) {
    yield put(sortAdminUserError(error));
  }
}

//New End
function* onUpdateAdminUserStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateAdminUserApi, id, formValue);
    if (response.status === 200) {
      yield put(updateAdminUserSuccess(response.data));
    }
  } catch (error) {
    yield put(updateAdminUserError(error));
  }
}

export function* onLoadAdminUsers() {
  yield takeLatest(types.LOAD_ADMIN_USERS_START, onLoadAdminUsersStartAsync);
}

export function* onCreateAdminUser() {
  yield takeLatest(types.CREATE_ADMIN_USER_START, onCreateAdminUserStartAsync);
}

export function* onUpdateAdminUser() {
  yield takeLatest(types.UPDATE_ADMIN_USER_START, onUpdateAdminUserStartAsync);
}

//New
export function* onSearchAdminUser() {
  yield takeLatest(types.SEARCH_ADMIN_USER_START, onSearchAdminUserStartAsync);
}

export function* onFilterAdminUser() {
  yield takeLatest(types.FILTER_ADMIN_USER_START, onFilterAdminUserStartAsync);
}

export function* onSortAdminUser() {
  yield takeLatest(types.SORT_ADMIN_USER_START, onSortAdminUserStartAsync);
}
//New End

const userSagas = [
  fork(onLoadAdminUsers),
  fork(onCreateAdminUser),
  fork(onDeleteAdminUserRequest),
  fork(onUpdateAdminUser),
  //New
  fork(onSearchAdminUser),
  fork(onFilterAdminUser),
  fork(onSortAdminUser)
  //New
];

export default function* adminRootSaga() {
  yield all([...userSagas]);
}
