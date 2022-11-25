import * as types from "../actionTypes/dropoff_actionType";

export const loadDropOffsStart = (pageInfo) => ({
  type: types.LOAD_DROPOFFS_START,
  payload: pageInfo
});

export const loadDropOffsSuccess = (dropOffs) => ({
  type: types.LOAD_DROPOFFS_SUCCESS,
  payload: dropOffs,
});

export const loadDropOffsError = (error) => ({
  type: types.LOAD_DROPOFFS_ERROR,
  payload: error,
});

export const createDropOffStart = (dropOff) => ({
  type: types.CREATE_DROPOFF_START,
  payload: dropOff,
});

export const createDropOffSuccess = (dropOffs) => ({
  type: types.CREATE_DROPOFF_SUCCESS,
  payload: dropOffs,
});

export const createDropOffError = (error) => ({
  type: types.CREATE_DROPOFF_ERROR,
  payload: error,
});

export const deleteDropOffStart = (id) => ({
  type: types.DELETE_DROPOFF_START,
  payload: id,
});

export const deleteDropOffSuccess = (userId) => ({
  type: types.DELETE_DROPOFF_SUCCESS,
  payload: userId
});

export const deleteDropOffError = (error) => ({
  type: types.DELETE_DROPOFF_ERROR,
  payload: error,
});

export const updateDropOffStart = (userInfo) => ({
  type: types.UPDATE_DROPOFF_START,
  payload: userInfo,
});

export const updateDropOffSuccess = () => ({
  type: types.UPDATE_DROPOFF_SUCCESS,
});

export const updateDropOffError = (error) => ({
  type: types.UPDATE_DROPOFF_ERROR,
  payload: error,
});

export const searchDropOffStart = (query) => ({
  type: types.SEARCH_DROPOFF_START,
  payload: query,
});

export const searchDropOffSuccess = (dropOffs) => ({
  type: types.SEARCH_DROPOFF_SUCCESS,
  payload: dropOffs
});

export const searchDropOffError = (error) => ({
  type: types.SEARCH_DROPOFF_ERROR,
  payload: error,
});

export const filterDropOffStart = (value) => ({
  type: types.FILTER_DROPOFF_START,
  payload: value,
});

export const filterDropOffSuccess = (dropOffs) => ({
  type: types.FILTER_DROPOFF_SUCCESS,
  payload: dropOffs
});

export const filterDropOffError = (error) => ({
  type: types.FILTER_DROPOFF_ERROR,
  payload: error,
});

export const sortDropOffStart = (value) => ({
  type: types.SORT_DROPOFF_START,
  payload: value,
});

export const sortDropOffSuccess = (dropOffs) => ({
  type: types.SORT_DROPOFF_SUCCESS,
  payload: dropOffs,
});

export const sortDropOffError = (error) => ({
  type: types.SORT_DROPOFF_ERROR,
  payload: error,
});