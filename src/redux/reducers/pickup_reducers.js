import * as types from "../actionTypes/pickup_actionType";

const initialState = {
  pickUps: [],
  pickUp: {},
  loading: false,
  //New
  pageLimit: 6,
  currentPage: 0,
  paginationMode: true
};

const pickUpsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PICKUPS_START:
    case types.CREATE_PICKUP_START:
    case types.DELETE_PICKUP_START:
    case types.UPDATE_PICKUP_START:
    case types.SEARCH_PICKUP_START:
    case types.FILTER_PICKUP_START:
    case types.SORT_PICKUP_START:  
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_PICKUPS_SUCCESS:
      return {
        ...state,
        pickUps: action.payload.pickUps,
        loading: false,
        currentPage: state.currentPage + action.payload.currentPage,
        paginationMode: true
      };
    case types.SEARCH_PICKUP_SUCCESS:
    case types.FILTER_PICKUP_SUCCESS:
    case types.SORT_PICKUP_SUCCESS:  
      return {
        ...state,
        pickUps: action.payload,
        loading: false,
        paginationMode: false
      };
    case types.LOAD_PICKUPS_ERROR:
    case types.CREATE_PICKUP_ERROR:
    case types.DELETE_PICKUP_ERROR:
    case types.UPDATE_PICKUP_ERROR:
    case types.SEARCH_PICKUP_ERROR:
    case types.FILTER_PICKUP_ERROR:
    case types.SORT_PICKUP_ERROR:  
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.DELETE_PICKUP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 0      
      };
    case types.CREATE_PICKUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_PICKUP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 0
      };
    default:
      return state;
  }
};

export default pickUpsReducer;