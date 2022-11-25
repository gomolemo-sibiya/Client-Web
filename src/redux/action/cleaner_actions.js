import * as types from "../actionTypes/cleaner_actionType";

export const loadCleanerUsersStart = (pageInfo) => ({
  type: types.LOAD_CLEANER_USERS_START,
  payload: pageInfo
});

export const loadCleanerUsersSuccess = (cleanerUsers) => ({
  type: types.LOAD_CLEANER_USERS_SUCCESS,
  payload: cleanerUsers,
});

export const loadCleanerUsersError = (error) => ({
  type: types.LOAD_CLEANER_USERS_ERROR,
  payload: error,
});

export const createCleanerUserStart = (cleanerUser) => ({
  type: types.CREATE_CLEANER_USER_START,
  payload: cleanerUser,
});

export const createCleanerUserSuccess = (cleanerUsers) => ({
  type: types.CREATE_CLEANER_USER_SUCCESS,
  payload: cleanerUsers,
});

export const createCleanerUserError = (error) => ({
  type: types.CREATE_CLEANER_USER_ERROR,
  payload: error,
});

export const deleteCleanerUserStart = (id) => ({
  type: types.DELETE_CLEANER_USER_START,
  payload: id,
});

export const deleteCleanerUserSuccess = (userId) => ({
  type: types.DELETE_CLEANER_USER_SUCCESS,
  payload: userId
});

export const deleteCleanerUserError = (error) => ({
  type: types.DELETE_CLEANER_USER_ERROR,
  payload: error,
});

export const updateCleanerUserStart = (userInfo) => ({
  type: types.UPDATE_CLEANER_USER_START,
  payload: userInfo,
});

export const updateCleanerUserSuccess = () => ({
  type: types.UPDATE_CLEANER_USER_SUCCESS,
});

export const updateCleanerUserError = (error) => ({
  type: types.UPDATE_CLEANER_USER_ERROR,
  payload: error,
});

//New
export const searchCleanerUserStart = (query) => ({
  type: types.SEARCH_CLEANER_USER_START,
  payload: query,
});

export const searchCleanerUserSuccess = (cleanerUsers) => ({
  type: types.SEARCH_CLEANER_USER_SUCCESS,
  payload: cleanerUsers
});

export const searchCleanerUserError = (error) => ({
  type: types.SEARCH_CLEANER_USER_ERROR,
  payload: error,
});

export const filterCleanerUserStart = (value) => ({
  type: types.FILTER_CLEANER_USER_START,
  payload: value,
});

export const filterCleanerUserSuccess = (cleanerUsers) => ({
  type: types.FILTER_CLEANER_USER_SUCCESS,
  payload: cleanerUsers
});

export const filterCleanerUserError = (error) => ({
  type: types.FILTER_CLEANER_USER_ERROR,
  payload: error,
});

export const sortCleanerUserStart = (value) => ({
  type: types.SORT_CLEANER_USER_START,
  payload: value,
});

export const sortCleanerUserSuccess = (cleanerUsers) => ({
  type: types.SORT_CLEANER_USER_SUCCESS,
  payload: cleanerUsers,
});

export const sortCleanerUserError = (error) => ({
  type: types.SORT_CLEANER_USER_ERROR,
  payload: error,
});