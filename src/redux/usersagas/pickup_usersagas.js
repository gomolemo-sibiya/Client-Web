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
  loadPickUpsSuccess,
  loadPickUpsError,
  createPickUpSuccess,
  createPickUpError,
  deletePickUpSuccess,
  deletePickUpError,
  updatePickUpSuccess,
  updatePickUpError,
  searchPickUpSuccess,
  searchPickUpError,
  filterPickUpSuccess,
  filterPickUpError,
  sortPickUpError,
  sortPickUpSuccess,
} from "../action/pickup_actions";
import {
  loadPickUpsApi,
  createPickUpApi,
  deletePickUpApi,
  updatePickUpApi,
  searchPickUpApi,
  filterPickUpApi,
  sortPickUpApi,
  //New
} from "../api";

import * as types from "../actionTypes/pickup_actionType";

export function* onLoadPickUpsStartAsync({payload: {start, end, currentPage}}) {
  try {
    const response = yield call(loadPickUpsApi, start, end);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadPickUpsSuccess({dropOffs: response.data, currentPage}));
    }
  } catch (error) {
    yield put(loadPickUpsError(error));
  }
}

function* deletePickUp(userId) {
  try {
    const response = yield call(deletePickUpApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deletePickUpSuccess(userId));
    }
  } catch (error) {
    yield put(deletePickUpError(error));
  }
}

function* onDeletePickUpRequest() {
  while (true) {
    const { payload: id } = yield take(types.DELETE_PICKUP_START);
    yield call(deletePickUp, id);
  }
}

function* onCreatePickUpStartAsync({ payload }) {
  try {
    const response = yield call(createPickUpApi, payload);
    console.log("responseCreate", response);
    if (response.status === 200) {
      yield put(createPickUpSuccess(response.data));
    }
  } catch (error) {
    yield put(createPickUpError(error));
  }
}

//New
function* onSearchPickUpStartAsync({ payload: query }) {
  try {
    const response = yield call(searchPickUpApi, query);
    if (response.status === 200) {
      yield put(searchPickUpSuccess(response.data));
    }
  } catch (error) {
    yield put(searchPickUpError(error));
  }
}

function* onFilterPickUpStartAsync({ payload: value}) {
  try {
    const response = yield call(filterPickUpApi, value);
    if (response.status === 200) {
      yield put(filterPickUpSuccess(response.data));
    }
  } catch (error) {
    yield put(filterPickUpError(error));
  }
}

function* onSortPickUpStartAsync({ payload: value}) {
  try {
    const response = yield call(sortPickUpApi, value);
    if (response.status === 200) {
      yield put(sortPickUpSuccess(response.data));
    }
  } catch (error) {
    yield put(sortPickUpError(error));
  }
}

//New End
function* onUpdatePickUpStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updatePickUpApi, id, formValue);
    if (response.status === 200) {
      yield put(updatePickUpSuccess(response.data));
    }
  } catch (error) {
    yield put(updatePickUpError(error));
  }
}

export function* onLoadPickUps() {
  yield takeLatest(types.LOAD_PICKUPS_START, onLoadPickUpsStartAsync);
}

export function* onCreatePickUp() {
  yield takeLatest(types.CREATE_PICKUP_START, onCreatePickUpStartAsync);
}

export function* onUpdatePickUp() {
  yield takeLatest(types.UPDATE_PICKUP_START, onUpdatePickUpStartAsync);
}

export function* onSearchPickUp() {
  yield takeLatest(types.SEARCH_PICKUP_START, onSearchPickUpStartAsync);
}

export function* onFilterPickUp() {
  yield takeLatest(types.FILTER_PICKUP_START, onFilterPickUpStartAsync);
}

export function* onSortPickUp() {
  yield takeLatest(types.SORT_PICKUP_START, onSortPickUpStartAsync);
}

const userSagas = [
  fork(onLoadPickUps),
  fork(onCreatePickUp),
  fork(onDeletePickUpRequest),
  fork(onUpdatePickUp),
  fork(onSearchPickUp),
  fork(onFilterPickUp),
  fork(onSortPickUp)
];

export default function* pickUpRootSaga() {
  yield all([...userSagas]);
}
