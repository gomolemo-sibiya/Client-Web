import * as types from "../actionTypes/admin_actionType";

export const loadAdminUserStart = (pageInfo) => ({
  type: types.LOAD_ADMIN_USERS_START,
  payload: pageInfo
});

export const loadAdminUsersSuccess = (adminUsers) => ({
  type: types.LOAD_ADMIN_USERS_SUCCESS,
  payload: adminUsers,
});

export const loadAdminUsersError = (error) => ({
  type: types.LOAD_ADMIN_USERS_ERROR,
  payload: error,
});

export const createAdminUserStart = (adminUser) => ({
  type: types.CREATE_ADMIN_USER_START,
  payload: adminUser,
});

export const createAdminUserSuccess = (adminUsers) => ({
  type: types.CREATE_ADMIN_USER_SUCCESS,
  payload: adminUsers,
});

export const createAdminUserError = (error) => ({
  type: types.CREATE_ADMIN_USER_ERROR,
  payload: error,
});

export const deleteAdminUserStart = (id) => ({
  type: types.DELETE_ADMIN_USER_START,
  payload: id,
});

export const deleteAdminUserSuccess = (userId) => ({
  type: types.DELETE_ADMIN_USER_SUCCESS,
  payload: userId
});

export const deleteAdminUserError = (error) => ({
  type: types.DELETE_ADMIN_USER_ERROR,
  payload: error,
});

export const updateAdminUserStart = (userInfo) => ({
  type: types.UPDATE_ADMIN_USER_START,
  payload: userInfo,
});

export const updateAdminUserSuccess = () => ({
  type: types.UPDATE_ADMIN_USER_SUCCESS,
});

export const updateAdminUserError = (error) => ({
  type: types.UPDATE_ADMIN_USER_ERROR,
  payload: error,
});

//New
export const searchAdminUserStart = (query) => ({
  type: types.SEARCH_ADMIN_USER_START,
  payload: query,
});

export const searchAdminUserSuccess = (adminUsers) => ({
  type: types.SEARCH_ADMIN_USER_SUCCESS,
  payload: adminUsers
});

export const searchAdminUserError = (error) => ({
  type: types.SEARCH_ADMIN_USER_ERROR,
  payload: error,
});

export const filterAdminUserStart = (value) => ({
  type: types.FILTER_ADMIN_USER_START,
  payload: value,
});

export const filterAdminUserSuccess = (adminUsers) => ({
  type: types.FILTER_ADMIN_USER_SUCCESS,
  payload: adminUsers
});

export const filterAdminUserError = (error) => ({
  type: types.FILTER_ADMIN_USER_ERROR,
  payload: error,
});

export const sortAdminUserStart = (value) => ({
  type: types.SORT_ADMIN_USER_START,
  payload: value,
});

export const sortAdminUserSuccess = (adminUsers) => ({
  type: types.SORT_ADMIN_USER_SUCCESS,
  payload: adminUsers,
});

export const sortAdminUserError = (error) => ({
  type: types.SORT_ADMIN_USER_ERROR,
  payload: error,
});