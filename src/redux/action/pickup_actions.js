import * as types from "../actionTypes/pickup_actionType";

export const loadPickUpsStart = (pageInfo) => ({
  type: types.LOAD_PICKUPS_START,
  payload: pageInfo
});

export const loadPickUpsSuccess = (pickUps) => ({
  type: types.LOAD_PICKUPS_SUCCESS,
  payload: pickUps,
});

export const loadPickUpsError = (error) => ({
  type: types.LOAD_PICKUPS_ERROR,
  payload: error,
});

export const createPickUpStart = (pickUp) => ({
  type: types.CREATE_PICKUP_START,
  payload: pickUp,
});

export const createPickUpSuccess = (pickUps) => ({
  type: types.CREATE_PICKUP_SUCCESS,
  payload: pickUps,
});

export const createPickUpError = (error) => ({
  type: types.CREATE_PICKUP_ERROR,
  payload: error,
});

export const deletePickUpStart = (id) => ({
  type: types.DELETE_PICKUP_START,
  payload: id,
});

export const deletePickUpSuccess = (userId) => ({
  type: types.DELETE_PICKUP_SUCCESS,
  payload: userId
});

export const deletePickUpError = (error) => ({
  type: types.DELETE_PICKUP_ERROR,
  payload: error,
});

export const updatePickUpStart = (userInfo) => ({
  type: types.UPDATE_PICKUP_START,
  payload: userInfo,
});

export const updatePickUpSuccess = () => ({
  type: types.UPDATE_PICKUP_SUCCESS,
});

export const updatePickUpError = (error) => ({
  type: types.UPDATE_PICKUP_ERROR,
  payload: error,
});

//New
export const searchPickUpStart = (query) => ({
  type: types.SEARCH_PICKUP_START,
  payload: query,
});

export const searchPickUpSuccess = (pickUps) => ({
  type: types.SEARCH_PICKUP_SUCCESS,
  payload: pickUps
});

export const searchPickUpError = (error) => ({
  type: types.SEARCH_PICKUP_ERROR,
  payload: error,
});

export const filterPickUpStart = (value) => ({
  type: types.FILTER_PICKUP_START,
  payload: value,
});

export const filterPickUpSuccess = (pickUps) => ({
  type: types.FILTER_PICKUP_SUCCESS,
  payload: pickUps
});

export const filterPickUpError = (error) => ({
  type: types.FILTER_PICKUP_ERROR,
  payload: error,
});

export const sortPickUpStart = (value) => ({
  type: types.SORT_PICKUP_START,
  payload: value,
});

export const sortPickUpSuccess = (pickUps) => ({
  type: types.SORT_PICKUP_SUCCESS,
  payload: pickUps,
});

export const sortPickUpError = (error) => ({
  type: types.SORT_PICKUP_ERROR,
  payload: error,
});