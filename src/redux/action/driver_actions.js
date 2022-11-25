import * as types from "../actionTypes/driver_actionType";

export const loadDriverUsersStart = (pageInfo) => ({
  type: types.LOAD_DRIVER_USERS_START,
  payload: pageInfo
});

export const loadDriverUsersSuccess = (driverUsers) => ({
  type: types.LOAD_DRIVER_USERS_SUCCESS,
  payload: driverUsers,
});

export const loadDriverUsersError = (error) => ({
  type: types.LOAD_DRIVER_USERS_ERROR,
  payload: error,
});

export const createDriverUserStart = (driverUser) => ({
  type: types.CREATE_DRIVER_USER_START,
  payload: driverUser,
});

export const createDriverUserSuccess = (driverUsers) => ({
  type: types.CREATE_DRIVER_USER_SUCCESS,
  payload: driverUsers,
});

export const createDriverUserError = (error) => ({
  type: types.CREATE_DRIVER_USER_ERROR,
  payload: error,
});

export const deleteDriverUserStart = (id) => ({
  type: types.DELETE_DRIVER_USER_START,
  payload: id,
});

export const deleteDriverUserSuccess = (userId) => ({
  type: types.DELETE_DRIVER_USER_SUCCESS,
  payload: userId
});

export const deleteDriverUserError = (error) => ({
  type: types.DELETE_DRIVER_USER_ERROR,
  payload: error,
});

export const updateDriverUserStart = (userInfo) => ({
  type: types.UPDATE_DRIVER_USER_START,
  payload: userInfo,
});

export const updateDriverUserSuccess = () => ({
  type: types.UPDATE_DRIVER_USER_SUCCESS,
});

export const updateDriverUserError = (error) => ({
  type: types.UPDATE_DRIVER_USER_ERROR,
  payload: error,
});

//New
export const searchDriverUserStart = (query) => ({
  type: types.SEARCH_DRIVER_USER_START,
  payload: query,
});

export const searchDriverUserSuccess = (driverUsers) => ({
  type: types.SEARCH_DRIVER_USER_SUCCESS,
  payload: driverUsers
});

export const searchDriverUserError = (error) => ({
  type: types.SEARCH_DRIVER_USER_ERROR,
  payload: error,
});

export const filterDriverUserStart = (value) => ({
  type: types.FILTER_DRIVER_USER_START,
  payload: value,
});

export const filterDriverUserSuccess = (driverUsers) => ({
  type: types.FILTER_DRIVER_USER_SUCCESS,
  payload: driverUsers
});

export const filterDriverUserError = (error) => ({
  type: types.FILTER_DRIVER_USER_ERROR,
  payload: error,
});

export const sortDriverUserStart = (value) => ({
  type: types.SORT_DRIVER_USER_START,
  payload: value,
});

export const sortDriverUserSuccess = (driverUsers) => ({
  type: types.SORT_DRIVER_USER_SUCCESS,
  payload: driverUsers,
});

export const sortDriverUserError = (error) => ({
  type: types.SORT_DRIVER_USER_ERROR,
  payload: error,
});