import * as types from "../actionTypes/dropoff_actionType";

const initialState = {
  dropOffs: [],
  dropOff: {},
  loading: false,
  //New
  pageLimit: 6,
  currentPage: 0,
  paginationMode: true
};

const dropOffsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_DROPOFFS_START:
    case types.CREATE_DROPOFF_START:
    case types.DELETE_DROPOFF_START:
    case types.UPDATE_DROPOFF_START:
    case types.SEARCH_DROPOFF_START:
    case types.FILTER_DROPOFF_START:
    case types.SORT_DROPOFF_START:  
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_DROPOFFS_SUCCESS:
      return {
        ...state,
        dropOffs: action.payload.dropOffs,
        loading: false,
        currentPage: state.currentPage + action.payload.currentPage,
        paginationMode: true
      };
    case types.SEARCH_DROPOFF_SUCCESS:
    case types.FILTER_DROPOFF_SUCCESS:
    case types.SORT_DROPOFF_SUCCESS:  
      return {
        ...state,
        dropOffs: action.payload,
        loading: false,
        paginationMode: false
      };
    case types.LOAD_DROPOFFS_ERROR:
    case types.CREATE_DROPOFF_ERROR:
    case types.DELETE_DROPOFF_ERROR:
    case types.UPDATE_DROPOFF_ERROR:
    case types.SEARCH_DROPOFF_ERROR:
    case types.FILTER_DROPOFF_ERROR:
    case types.SORT_DROPOFF_ERROR:  
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.DELETE_DROPOFF_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 0      
      };
    case types.CREATE_DROPOFF_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_DROPOFF_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 0
      };
    default:
      return state;
  }
};

export default dropOffsReducer;