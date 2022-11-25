import * as types from "../actionTypes/client_actionType";

export const loadClientUserStart = (pageInfo) => ({
  type: types.LOAD_CLIENT_USERS_START,
  payload: pageInfo
});

export const loadClientUsersSuccess = (clientUsers) => ({
  type: types.LOAD_CLIENT_USERS_SUCCESS,
  payload: clientUsers,
});

export const loadClientUsersError = (error) => ({
  type: types.LOAD_CLIENT_USERS_ERROR,
  payload: error,
});

export const createClientUserStart = (clientUser) => ({
  type: types.CREATE_CLIENT_USER_START,
  payload: clientUser,
});

export const createClientUserSuccess = (clientUsers) => ({
  type: types.CREATE_CLIENT_USER_SUCCESS,
  payload: clientUsers,
});

export const createClientUserError = (error) => ({
  type: types.CREATE_CLIENT_USER_ERROR,
  payload: error,
});

export const deleteClientUserStart = (id) => ({
  type: types.DELETE_CLIENT_USER_START,
  payload: id,
});

export const deleteClientUserSuccess = (userId) => ({
  type: types.DELETE_CLIENT_USER_SUCCESS,
  payload: userId
});

export const deleteClientUserError = (error) => ({
  type: types.DELETE_CLIENT_USER_ERROR,
  payload: error,
});

export const updateClientUserStart = (userInfo) => ({
  type: types.UPDATE_CLIENT_USER_START,
  payload: userInfo,
});

export const updateClientUserSuccess = () => ({
  type: types.UPDATE_CLIENT_USER_SUCCESS,
});

export const updateClientUserError = (error) => ({
  type: types.UPDATE_CLIENT_USER_ERROR,
  payload: error,
});

//New
export const searchClientUserStart = (query) => ({
  type: types.SEARCH_CLIENT_USER_START,
  payload: query,
});

export const searchClientUserSuccess = (clientUsers) => ({
  type: types.SEARCH_CLIENT_USER_SUCCESS,
  payload: clientUsers
});

export const searchClientUserError = (error) => ({
  type: types.SEARCH_CLIENT_USER_ERROR,
  payload: error,
});

export const filterClientUserStart = (value) => ({
  type: types.FILTER_CLIENT_USER_START,
  payload: value,
});

export const filterClientUserSuccess = (clientUsers) => ({
  type: types.FILTER_CLIENT_USER_SUCCESS,
  payload: clientUsers
});

export const filterClientUserError = (error) => ({
  type: types.FILTER_CLIENT_USER_ERROR,
  payload: error,
});

export const sortClientUserStart = (value) => ({
  type: types.SORT_CLIENT_USER_START,
  payload: value,
});

export const sortClientUserSuccess = (clientUsers) => ({
  type: types.SORT_CLIENT_USER_SUCCESS,
  payload: clientUsers,
});

export const sortClientUserError = (error) => ({
  type: types.SORT_CLIENT_USER_ERROR,
  payload: error,
});