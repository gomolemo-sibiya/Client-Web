import * as types from "./actionType";

export const loadUsersStart = (pageInfo) => ({
  type: types.LOAD_USERS_START,
  payload: pageInfo
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

export const createUserStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = (users) => ({
  type: types.CREATE_USER_SUCCESS,
  payload: users,
});

export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

export const deleteUserStart = (id) => ({
  type: types.DELETE_USER_START,
  payload: id,
});

export const deleteUserSuccess = (userId) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId
});

export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});

export const updateUserStart = (userInfo) => ({
  type: types.UPDATE_USER_START,
  payload: userInfo,
});

export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});

//New
export const searchUserStart = (query) => ({
  type: types.SEARCH_USER_START,
  payload: query,
});

export const searchUserSuccess = (users) => ({
  type: types.SEARCH_USER_SUCCESS,
  payload: users
});

export const searchUserError = (error) => ({
  type: types.SEARCH_USER_ERROR,
  payload: error,
});

export const filterUserStart = (value) => ({
  type: types.FILTER_USER_START,
  payload: value,
});

export const filterUserSuccess = (users) => ({
  type: types.FILTER_USER_SUCCESS,
  payload: users
});

export const filterUserError = (error) => ({
  type: types.FILTER_USER_ERROR,
  payload: error,
});

export const sortUserStart = (value) => ({
  type: types.SORT_USER_START,
  payload: value,
});

export const sortUserSuccess = (users) => ({
  type: types.SORT_USER_SUCCESS,
  payload: users,
});

export const sortUserError = (error) => ({
  type: types.SORT_USER_ERROR,
  payload: error,
});